class Setup{
    constructor() {
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            install_button: 'aria/Submit'
        }
        this.value = {
            URL: 'http://localhost/vaahcms-ready/public/backend#/setup',
            Title: 'Setup',
            Landing_URL: "http://localhost/vaahcms-ready/public/backend#/setup/install/configuration"
        }
        this.params.page = {
            id: "SP",
            name: "Setup",
            url: '/'
        }
        this.groups = [
            {
                count: 1,
                name: "FP",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify the URL",
                        expect: "The URL should be: http://localhost/vaahcms-ready/public/backend#/setup",
                        assert: 'http://localhost/vaahcms-ready/public/backend#/setup'
                    },
                    {
                        count: 1.2,
                        name: "Verify the Title",
                        expect: "The title should be: Setup",
                        assert: "Setup"
                    },
                    {
                        count: 1.3,
                        name: "Verify if the Install button exist or not",
                        expect: "The install button should exist",
                    },
                    {
                        count: 1.4,
                        name: "Verify if the button is clickable or not",
                        expect: "The install button should be clickable",
                    },
                    {
                        count: 1.5,
                        name: "Verify if the install button leads to proper landing page or not",
                        expect: "The button should lead to a proper landing page",
                    }
                ]

            }
        ]
    }
}

module.exports = new Setup();
