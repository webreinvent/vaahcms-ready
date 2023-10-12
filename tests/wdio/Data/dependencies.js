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
            id: "DP",
            name: "Dependencies",
            url : this.base_url+"/backend#/setup/install/dependencies"
        }
        this.groups = [
            {
                count: 1,
                name: "UI",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify the URL of the dependencies page",
                        expect: "The URL should be: "+this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: "Verify the Title of teh dependencies page",
                        expect: "The title should be: Dependencies - Setup",
                        assert: "Dependencies - Setup"
                    },
                    {
                        count: 1.3,
                        name: "Verify if the Active Env File is visible on the dependencies or not",
                        expect: "The Active Env File should be available on the dependencies page",
                    },
                    {
                        count: 1.4,
                        name: "Verify if the dependencies message is visible on the page or not",
                        expect: "The dependencies message should available on the page",
                    },
                    {
                        count: 1.5,
                        name: "Verify if the is CMS module is present on the page or not",
                        expect: "The CMS module should be visible on the page",
                    },
                    {
                        count: 1.6,
                        name: "",
                        expect: "",
                    },
                ]

            }
        ]
    }
}

module.exports = new Dependencies();
