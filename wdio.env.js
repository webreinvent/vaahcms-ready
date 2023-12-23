class Env {

    constructor() {

        this.params = {
            debug: false,
            is_human: true,
            is_human_pause: 1000,
            env: null,
            log_level: 'error',
            small_pause: 2000,
            medium_pause: 5000,
            long_pause: 20000,
            base_url: 'http://localhost/testing/vaahcms-ready/public',
            version: null,
            capabilities: [
                {
                    platformName: "Linux",
                    "appium:automationName": "Chromium",
                    browserName: 'chrome',
                    acceptInsecureCerts: true,
                }, /*{
                    platformName: "mac",
                    "appium:automationName": "Safari",
                    browserName: 'Safari'
                },
                {
                    // capabilities for local Appium web tests on iOS
                    platformName: 'iOS',
                    browserName: 'Safari',
                    'appium:platformVersion': '17.0',
                    'appium:automationName': 'XCUITest'
                }*/

            ]
        };

        if(process.env.NODE_WDIO_IS_HUMAN)
        {
            this.params.is_human = true;
        }

        if(process.env.NODE_WDIO_DEBUG)
        {
            this.params.debug = true;
        }

        if(process.env.NODE_WDIO_OS)
        {
            this.setCapabilities()
        }

        if(this.params.debug === true)
        {
            this.params.log_level = 'debug'
        }

    }

    //-------------------------------------------------
    setCapabilities()
    {

        switch(process.env.NODE_WDIO_OS)
        {
            case 'mac':
                this.params.capabilities = [
                    {
                        platformName: "mac",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                    }, {
                        platformName: "mac",
                        "appium:automationName": "Safari",
                        browserName: 'Safari'
                    }
                ]
            break;
            case 'ios':
                this.params.capabilities = [
                    {
                        platformName: 'iOS',
                        browserName: 'Safari',
                        'appium:platformVersion': '17.0',
                        'appium:automationName': 'XCUITest'
                    }
                ]
           break;
            case 'android':
                this.params.capabilities = [
                    {
                        platformName: 'Android',
                        browserName: 'Chrome',
                        acceptInsecureCerts: true,
                        "appium:deviceName": "Pixel_3a_API_34", //this should match with emulator name
                        'appium:automationName': 'UIAutomator2',
                    }
                ]
                break;
            case 'windows':
                this.params.capabilities = [
                    {
                        platformName: "Window",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                    }
                ]
                break;
            case 'linux':
                this.params.capabilities = [
                    {
                        platformName: "Linux",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                    }
                ]
                break;
        }

    }
    //-------------------------------------------------
    getCapabilities(){
        let capabilities = this.params.capabilities;
        if(this.params.is_human === false){

            for(let i in capabilities)
            {
                switch(capabilities[i].browserName)
                {
                    case 'chrome':
                        capabilities[i]['goog:chromeOptions'] = {
                            args: [
                                '--no-sandbox',
                                '--disable-dev-shm-usage',
                                '--disable-infobars',
                                '--headless',
                                '--disable-gpu',
                                '--window-size=1440,735',
                                '--disable-extensions'
                            ]
                        }
                        break;
                }
            }
        }

        return capabilities;
    }
    //-------------------------------------------------
    getParams () {
        this.params.capabilities = this.getCapabilities();

        console.log('params-->', this.params);

        return this.params;
    }

}

export default Env;
