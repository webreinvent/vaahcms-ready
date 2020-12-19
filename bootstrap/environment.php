<?php

use Dotenv\Dotenv;

function tld( $uri ) {
    $parts = explode('.', $uri);
    return (sizeof($parts) ? ('.' . end($parts)) : false);
}

function vh_get_root_domain($str)
{
    $pattern = "((?<=\.)[a-z0-9]*(?=\.)(?=[a-z]*))";
     preg_match($pattern, $str, $matches);
     $tld = tld($str);
    return $matches[0].$tld;
}

function vh_get_sub_domain($str)
{
    $pattern = "((?<=:\/\/)[a-z0-9]*(?=\.))";
    preg_match($pattern, $str, $matches);

    if(isset($matches[0]))
    {
        return $matches[0];
    }
    return null;
}


/*
|--------------------------------------------------------------------------
| Detect The Application Environment
|--------------------------------------------------------------------------
|
| Laravel takes a dead simple approach to your application environments
| so you can just specify a machine name for the host that matches a
| given environment, then we will automatically detect it for you.
|
*/
$env = $app->detectEnvironment(function(){

    $vaahcms_file = base_path('/vaahcms.json');
    $env_file_name = null;

    if(file_exists($vaahcms_file))
    {

        $vaahcms = file_get_contents(base_path('/vaahcms.json'));
        $vaahcms = json_decode($vaahcms, true);

        if(isset($vaahcms['environments']) && isset($vaahcms['environments']['default']))
        {
            $env_file_name = $vaahcms['environments']['default']['env_file'];
        }

        $host = null;
        $actual_url = null;
        $is_sub_domain = null;
        $sub_domain = null;
        $env_sub_domain = null;
        $env_root_domain = null;
        $root_domain = null;

        if(isset($_SERVER) && isset($_SERVER['HTTP_HOST']))
        {
            $actual_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        }

        $url_arr = explode('.', $actual_url);

        if(count($url_arr) > 2 )
        {
            $is_sub_domain = true;
            $root_domain = vh_get_root_domain($_SERVER["HTTP_HOST"]);
            $sub_domain = vh_get_sub_domain($actual_url);
        }

        if($actual_url && is_null($is_sub_domain))
        {
            if(isset($vaahcms['environments'])
                && is_array($vaahcms['environments'])
                && count($vaahcms['environments'])>0
            )
            {
                $actual_url = explode( '://', $actual_url);
                foreach ($vaahcms['environments'] as $key => $environment)
                {
                    $environment_app_url = explode( '://', $environment['app_url']);

                    if ( isset($environment_app_url[1])
                        && isset($actual_url[1])
                        && strpos(strval($actual_url[1]), strval($environment_app_url[1])) !== false){
                        $env_file_name = $environment['env_file'];
                    }
                }

            }
        } else if(!is_null($is_sub_domain))
        {

            foreach ($vaahcms['environments'] as $key => $environment)
            {
                $environment_app_url = explode( '.', $environment['app_url']);
                $environment_app_d = explode("://", $environment_app_url[0]);

                if (
                    isset($environment_app_d[1])
                    && isset($sub_domain)
                ){
                    $env_sub_domain = vh_get_sub_domain($environment['app_url']);

                    if(!$env_sub_domain)
                    {
                        continue;
                    }
                    //Stared sub domain
                    if($environment_app_d['1'] == '*' && $sub_domain == $env_sub_domain)
                    {
                        $sub_domain_arr = explode('.', $sub_domain);

                        unset($sub_domain_arr[0]);
                        unset($environment_app_url[0]);

                        $sub_domain_derived = implode('.', $sub_domain_arr);
                        $environment_app_url = implode('.', $sub_domain_arr);

                        if($sub_domain_derived == $environment_app_url)
                        {
                            $env_file_name = $environment['env_file'];
                        }

                    } else{
                        $actual_d = explode( '://', $actual_url);
                        $environment_app_url = explode( '://', $environment['app_url']);
                        if (strpos($actual_d[1], $environment_app_url[1]) !== false){
                            $env_file_name = $environment['env_file'];
                        }
                    }

                }
            }
        }

    }


    if(!$env_file_name)
    {
        $env_file_name = '.env';
    }


    if(file_exists(base_path($env_file_name)))
    {
        $dotenv = Dotenv::createImmutable(__DIR__.'/../', $env_file_name);
        $dotenv->load();
    }

});
