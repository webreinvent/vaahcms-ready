<?php

use Dotenv\Dotenv;

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

        if(isset($_SERVER) && isset($_SERVER['HTTP_HOST']))
        {
            $actual_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        }


        if($actual_url)
        {


            if(isset($vaahcms['environments']) && is_array($vaahcms['environments'])
                && count($vaahcms['environments'])>0
            )
            {
                foreach ($vaahcms['environments'] as $environment)
                {
                    $environment_url = explode( '://', $environment['app_url']);
                    if (strpos($actual_url, $environment_url[1]) !== false){
                        $env_file_name = $environment['env_file'];
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
        $dotenv = Dotenv::create(__DIR__.'/../', $env_file_name);
        $dotenv->load();
    }


});
