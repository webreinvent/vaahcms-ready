class Setup{
    constructor() {
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            install_button: '//span[text()= "Install"]'
        }
        this.value = {
            URL: 'http://localhost/vaahcms-ready/public/backend#/setup',
            Title: 'Setup',
            Landing_URL: "http://localhost/vaahcms-ready/public/backend#/setup/install/configuration"
        }
        this.params.page = {
            id: "SP",
            name: "Setup",
            url: 'http://localhost/vaahcms-ready/public/backend#/setup'
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
                        expect: "The button should exist",
                        assert: "Install"
                    },
                    {
                        count: 1.4,
                        name: "Verify if the button lead to a proper landing page or not",
                        expect: "The button should lead to a proper landing page.",
                        assert: "http://localhost/vaahcms-ready/public/backend#/setup/install/configuration"
                    },
                ]

            }
        ]
    }
}

module.exports = new Setup();
