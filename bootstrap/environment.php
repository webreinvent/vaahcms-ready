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



    $host = null;
    $actual_link = null;

    if(isset($_SERVER) && isset($_SERVER['HTTP_HOST']))
    {
        $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

        $host = $_SERVER['HTTP_HOST'];
    }

    $env_file_name = '.env';

    if (strpos($actual_link, '/feature') !== false) {
        $env_file_name .= '.feature';
    }  else if(strpos($actual_link, '/develop') !== false)
    {
        $env_file_name .= '.develop';
    } else if(strpos($actual_link, '/release') !== false)
    {
        $env_file_name .= '.release';
    } else if(strpos($host, 'example.com') !== false)
    {
        $env_file_name .= '.production';
    } else if(strpos($actual_link, 'localhost') !== false)
    {
        $env_file_name .= '.localhost';
    }


    $dotenv = Dotenv::create(__DIR__.'/../', $env_file_name);
    $dotenv->load();
});
