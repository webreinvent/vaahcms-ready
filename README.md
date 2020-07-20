# vaahcms-ready
> VaahCms Pre-configured and ready to install

Please consider starring the project to show your :heart: and support.


## Steps to install
Well, this is a pre-configure and ready to install repo for VaahCMS.

#### Step 1:
Download this repository and unzip.

#### Step 2:
Run following command:
```bash
composer install
```

#### Step 4:
Publish VaahCms Assets:
```bash
php artisan vendor:publish --provider="WebReinvent\VaahCms\VaahCmsServiceProvider" --tag=assets --force
```

#### Step 5:
Then visit following url to setup the CMS:
```bash
<base-url>/public/vaahcms/setup
```

## Steps to upgrade and fresh reinstall

DO NO REPEAT THESE STEPS FOR PRODUCTION ENVIRONMENT 

#### Step 1:
Delete `vaahcms.json`, `composer.lock` and all `.env` files like `.env.local` etc. Create new `.env` file from `.env.example` 

#### Step 2:
Delete database table and run `composer update`

#### Step 3:
Run `php artisan vendor:publish --provider="WebReinvent\VaahCms\VaahCmsServiceProvider" --tag=assets --force`

#### Step 4:
Visit `<base-url>/public/vaahcms/setup` to reinstall the VaahCMS

## Support us

[WebReinvent](https://www.webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
