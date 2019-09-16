# vaahcms-ready
> VaahCms Pre-configured and ready to install

Please consider starring the project to show your :heart: and support.


## Steps to install
Well, this is a pre-configure and ready to install repo for VaahCMS.

#### Step 1:
Download this repository and unzip.

#### Step 2:
Rename `.env.example` to `.env`

#### Step 3:
Run following command:
```bash
composer install
```

#### Step 3:
Publish VaahCms Assets:
```bash
php artisan vendor:publish --provider="WebReinvent\VaahCms\VaahCmsServiceProvider" --tag=assets
```

#### Step 4:
Then visit following url to setup the CMS:
```bash
<base-url>/public/vaahcms/setup
```


## Support us

[WebReinvent](https://www.webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
