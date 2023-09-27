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
            Mail_Encryption_None: '#pv_id_25_0',
            Mail_Encryption_SSL: '#pv_id_25_1',
            Mail_Encryption_TLS: '#pv_id_25_2',
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




        }
        this.value = {

        }
        this.params.page = {
            id: "SP",
            name: "Setup",
            url : this.base_url+"/backend#/setup"
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the the Test Database connection button is clickable or not',
                        expect: 'The verify button should be clickable',
                        assert: '1) Enter database name  2) Enter database username'
                    },
                    {
                        count: 1.2  ,
                        name: 'Verify if the the Test Mail Configuration button is clickable or not',
                        expect: 'Test Mail Configuration button must be clickable',
                        assert: 'Mail Username'
                    }
                    {
                        count: 1.3  ,
                        name: 'Verify if the close button in Mail Username dialog box is functional or not',
                        expect: 'The Send Mail button should be clickable',
                        assert: 'False'
                    }
                ]
            },
            {
                count: 1,
                name: "End to End",
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the user can proceed by filling all the mandatory fields',
                        expect: 'The user should be able to proceed if data is entered in the fields',
                        assert: ''
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can proceed by leaving the mandatory fields blank',
                        expect: 'User should not be able to proceed and the save button should be disabled',
                        assert: ''
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
