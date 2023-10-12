const Page = require('../vaah-webdriverio/Page');

class Dependencies extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            env_file_testid: 'setup-use_env',
            dependencies_message_testid: 'dependencies-message_text',
            dependencies_message_close_btn_testid: 'dependencies-message_close_btn',
            cms_module_heading: 'h5=CMS',
            bulma_module_heading: 'h5=BulmaBlogTheme',
            vaah_link: '=Vaah',
            webreinvent_link: '=WebReinvent',
            cms_import_data_checkbox_testid: 'dependencies-select_module',
            install_dependencies_btn_testid: 'dependencies-install_dependencies_btn_text',
            skip_btn_testid: 'dependencies-skip',
            back_btn_testid: 'dependencies-back_btn',
            save_btn_testid: 'dependencies-save_btn',
        }
        this.params.page = {
            id: 'DP',
            name: 'Dependencies',
            url : this.base_url+'/backend#/setup/install/dependencies'
        }
        this.groups = [
            {
                count: 1,
                name: 'UI',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the URL of the dependencies page',
                        expect: 'The URL should be: '+this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: 'Verify the Title of teh dependencies page',
                        expect: 'The title should be: Dependencies - Setup',
                        assert: 'Dependencies - Setup'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the Active Env File is visible on the dependencies or not',
                        expect: 'The Active Env File should be available on the dependencies page',
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the dependencies message is visible on the page or not',
                        expect: 'The dependencies message should available on the page',
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the CMS module is present on the page or not',
                        expect: 'The CMS module should be visible on the page',
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the BulmaBlogTheme module is present on the page or not',
                        expect: 'The BulmaBlogTheme module should be visible on the page',
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the Import Sample data checkbox is available on the CMS module or not',
                        expect: 'The Import Sample data checkbox should be available on the CMS module',
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the Import Sample data checkbox is available on the BulmaBlogTheme module or not',
                        expect: 'The Import Sample data checkbox should be available on the BulmaBlogTheme',
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the Download & install Dependencies button is available on the page or not',
                        expect: 'The Download & install Dependencies button should be available on the page',
                    },
                    {
                        count: 2.1,
                        name: 'Verify if the skip button is available on the page or not',
                        expect: 'The skip button should be available on the page',
                    },
                    {
                        count: 2.2,
                        name: 'Verify if the back button is available on the page or not',
                        expect: 'The back button should be available on the page',
                    },
                    {
                        count: 2.3,
                        name: 'Verify if the Save & Next button is available on the page or not',
                        expect: 'The Save & Next button should be available on the page',
                    },
                ]
            },
            {
                count: 2,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of close button in install dependencies message on the page',
                        expect: 'After clicking on button, the message should be removed from the page',
                        assert: {
                            attribute: 'style',
                            value: 'display: none;'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of Vaah link in the CMS module',
                        expect: 'The link should open a homepage of Vaah.dev',
                        assert: 'https://vaah.dev/'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the functionality of Webreinvent link in the BulmaBlogTheme module',
                        expect: 'The link should open a homepage of webreinvent',
                        assert: 'https://webreinvent.com/'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the Import Sample data checkbox of CMS module is functional or not',
                        expect: 'The Import Sample data checkbox of CMS module should be functional',
                        assert: {
                            attribute: 'data-p-highlight',
                            value: 'true'
                        }
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the Import Sample data checkbox of BulmaBlogTheme module is functional or not',
                        expect: 'The Import Sample data checkbox of BulmaBlogTheme module should be functional',
                        assert: {
                            attribute: 'data-p-highlight',
                            value: 'true'
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the Import Sample data checkbox of BulmaBlogTheme module is functional or not',
                        expect: 'The Import Sample data checkbox of BulmaBlogTheme module should be functional',
                        assert: {
                            attribute: 'data-p-highlight',
                            value: 'true'
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = new Dependencies();
