const Page = require('../vaah-webdriverio/Page');

class Setup extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            Env: 'span=Select Env',
            Debug : 'span=True',
            Timezone: '(GMT) UTC',
            App_Name: '#app-name',
            Database_Type: 'span=MySQL',
            Database_Host : {
                attribute: 'placeholder',
                value: 'Database Host'
            },
            Database_Port: {
                attribute: 'placeholder',
                value: 'Database Port'
            },
            Database_Name: {
                attribute: 'placeholder',
                value: 'Database Name'
            },
            Database_Username: {
                attribute: 'placeholder',
                value: 'Database Username'
            },
            Database_Password: {
                attribute: 'placeholder',
                value: 'Database Password'
            },
            Database_Connection_Button: {
                attribute: 'aria-label',
                value: 'Test Database connection'
            },
            Database_Connection_Message: 'div*=Enter database name',
            Mail_Provider: 'span=Select Mail Provider',
            Mail_Driver: {
                attribute: 'placeholder',
                value: 'Mail Driver'
            },
            Mail_Host: {
                attribute: 'placeholder',
                value: 'Mail Host'
            },
            Mail_Port: {
                attribute: 'placeholder',
                value: 'Mail Port'
            },
            Mail_Username: {
                attribute: 'placeholder',
                value: 'Mail Username'
            },
            Mail_Password: {
                attribute: 'placeholder',
                value: 'Mail Password'
            },
            Mail_Encryption: 'span=Select Mail Encryption',
            From_Name: {
                attribute: 'placeholder',
                value: 'From Name'
            },
            From_Email: {
                attribute: 'placeholder',
                value: 'From Email'
            },
            Test_Mail_Button : 'span=Test Mail Configuration',
            Save_Button: 'span=Save & Next',
            alert_message: {
                attribute: 'role',
                value: 'alert'
            },
            Mail_Username_Heading: 'h5=Mail Username',
            Mail_Username_Close_Button: {
                attribute: 'aria-label',
                value: 'Close'
            },
            Mail_Username_Send_Button: 'span=Send Email',
            Success_Message: 'div=Configuration Saved',




        }
        this.value = {
            env: 'Abhijeet',
            dbName: 'vaahcms',
            dbUsername: 'root',
            dbPassword: 'testing'
        }
        this.params.page = {
            id: "SP",
            name: "Setup",
            url : this.base_url+"/backend#/setup"
        }
        this.groups = [
            {
                count: 1,
                name: 'UI',
                test: [
                    {
                        count: 1.1,
                        name: 'Verify the if the Test Database Connection Button exists or not',
                        expect: 'The Test Database Connection button should exist on the page',
                        assert: 'Test Database Connection'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the if the Test Mail Configuration Button exists or not',
                        expect: 'The Test Mail Configuration button should exist on the page',
                        assert: 'Test Mail Configuration'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the if the Test Mail Configuration Button exists or not',
                        expect: 'The Test Mail Configuration button should exist on the page',
                        assert: 'Save & Next'
                    }
                ]
            },
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of Test Database connection button when mandatory fields are blank',
                        expect: 'The verify button should be clickable',
                        assert: 'Enter database name'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of Test Database connection button when mandatory fields are filled',
                        expect: 'The button should open a webpage with database details',
                        assert: ''
                    },
                    {
                        count: 1.3,
                        name: 'Verify the functionality of Test Mail Configuration button',
                        expect: 'Test Mail Configuration should open a dialog box with Mail Username field',
                        assert: 'Mail Username'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the close button in Mail Username dialog box is functional or not',
                        expect: 'The Send Mail button should be clickable',
                        assert: 'False'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the user can select options from ENV dropdown menu',
                        expect: 'The user should be able to select an option from the Debug dropdown menu',
                        assert: 'Abhijeet'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the user can select options from Debug dropdown menu',
                        expect: 'The user should be able to select an option from the Debug dropdown menu',
                        assert: 'False'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the user can select options from Timezone dropdown menu',
                        expect: 'The user should be able to select an option from the Timezone dropdown menu',
                        assert: '(GMT+01:00) Paris'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the user can select options from Database Type dropdown menu',
                        expect: 'The user should be able to select an option from the Database Type dropdown menu',
                        assert: 'SQLite'
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the user can select options from Mail Provider dropdown menu',
                        expect: 'The user should be able to select an option from the Mail Provider dropdown menu',
                        assert: 'GMail'
                    },
                    {
                        count: 1.10,
                        name: 'Verify if the user can select options from Mail Encryption dropdown menu',
                        expect: 'The user should be able to select an option from the Mail Encryption dropdown menu',
                        assert: 'SSL'
                    },
                ]
            },
            {
                count: 2,
                name: "End to End",
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the user can proceed by filling all the mandatory fields',
                        expect: 'The user should be able to proceed if data is entered in the fields',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can proceed by leaving the mandatory fields blank',
                        expect: 'User should not be able to proceed and the save button should be disabled',
                        assert: 'disabled'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can proceed by leaving the mandatory fields blank',
                        expect: 'User should not be able to proceed and the save button should be disabled',
                        assert: ''
                    }
                ]

            }
        ]
    }
}

module.exports = new Setup();
