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
            Env_Option_One: '#pv_id_4_0',
            Env_Option_Custom: '#pv_id_4_1',
            Env_Option_Local: '#pv_id_4_2',
            Env_Option_Develop: '#pv_id_4_3',
            Env_Option_Staging: '#pv_id_4_4',
            Env_Option_Production: '#pv_id_4_5',
            Env_Option_Abhijeet1: '#pv_id_4_6',
            Env_Option_Wdiojs: '#pv_id_4_7',
            Env_File_Name: '#app-env-custom',
            Debug : 'span=True',
            Debug_Option_True: '#pv_id_5_0',
            Debug_Option_False: '#pv_id_5_1',
            Timezone: '(GMT) UTC',
            Timezone_Option_Paris: '#pv_id_20_43',
            App_Name: '#app-name',
            Database_Type: 'span=MySQL',
            Database_Type_Option_MySQL: '#pv_id_7_0',
            Database_Type_Option_PostgreSQL: '#pv_id_7_1',
            Database_Type_Option_SQLite: '#pv_id_7_2',
            Database_Type_Option_SQL_Server: '#pv_id_7_3',
            Database_Host : '[placeholder="Database Host"]',
            Database_Port: '[placeholder="Database Port"]',
            Database_Name: '[placeholder="Database Name"]',
            Database_Username: '[placeholder="Database Username"]',
            Database_Password: '[placeholder="Database Password"]',
            Database_Password_Eye_Button: '',
            Database_Connection_Button: 'span=Test Database connection',
            Database_Connection_Message: 'div*=Enter database name',
            Mail_Provider: 'span=Select Mail Provider',
            Mail_Provider_Option_MailTrap: '#pv_id_8_0',
            Mail_Provider_Option_GMail: '#pv_id_8_1',
            Mail_Provider_Option_Other: '#pv_id_8_2',
            Mail_Driver: '[placeholder="Mail Driver"]',
            Mail_Host: '[placeholder="Mail Host"]',
            Mail_Port: '[placeholder="Mail Port"]',
            Mail_Username: '[placeholder="Mail Username"]',
            Mail_Password: '[placeholder="Mail Password"]',
            Mail_Password_Eye_Button: '',
            Mail_Encryption: 'span=Select Mail Encryption',
            Mail_Encryption_None: '#pv_id_23_0',
            Mail_Encryption_SSL: '#pv_id_23_1',
            Mail_Encryption_TLS: '#pv_id_23_2',
            From_Name: '[placeholder="From Name"]',
            From_Email: '[placeholder="From Email"]',
            Test_Mail_Button : 'span=Test Mail Configuration',
            Save_Button: 'span=Save & Next',
            alert_message: '[role="alert"]',
            Mail_Username_Heading: 'h5=Mail Username',
            Mail_Username_Close_Button: '[aria-label="Close"]',
            Mail_Username_Send_Button: 'span=Send Email',
            Success_Message: 'div*=Configuration Saved',
            Error_Message: ''
        }
        this.value = {
            env: 'Custom',
            env_file: 'Test',
            dbName: 'vaahcms',
            dbUsername: 'root',
            dbPassword: 'testing',
            mailPassword: 'testing',
            invalid_dbhost: 'test123',
            invalid_dbport: 'test',
            invalid_dbname: 'test123',
            invalid_dbusername: 'testing123',
            invalid_password: '123'
        }
        this.params.page = {
            id: "CG",
            name: "Configuration",
            url : this.base_url+"/backend#/setup/install/configuration"
        }
        this.groups = [
            {
                count: 1,
                name: 'UI',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the URL of the Configuration Page',
                        expect: 'The URL should be: '+this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: 'Verify the Title of the Configuration Page',
                        expect: 'The title of the page should be: Configuration - Setup',
                        assert: 'Configuration - Setup'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the if the Test Database Connection Button exists or not',
                        expect: 'The Test Database Connection button should exist on the page',
                        assert: 'Test Database connection'
                    },
                    {
                        count: 1.4,
                        name: 'Verify the if the Test Mail Configuration Button exists or not',
                        expect: 'The Test Mail Configuration button should exist on the page',
                        assert: 'Test Mail Configuration'
                    },
                    {
                        count: 1.5,
                        name: 'Verify the if the Save & Next Button exists or not',
                        expect: 'The Save & Next button should exist on the page',
                        assert: 'Save & Next'
                    }
                ]
            },
            {
                count: 2,
                name: 'Validation',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the response of Test Database Button with invalid DataBase Host',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'No such host is known'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the response of Test Database Button with blank DataBase Host',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Enter database host'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the response of Test Database Button with blank DataBase Port',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Enter database port'
                    },
                    {
                        count: 1.4,
                        name: 'Verify the response of Test Database Button with invalid DataBase Port',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'No such port is known'
                    },
                    {
                        count: 1.5,
                        name: 'Verify the response of Test Database Button with blank DataBase Name',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Enter database name'
                    },
                    {
                        count: 1.6,
                        name: 'Verify the response of Test Database Button with invalid DataBase Name',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Unknown database'
                    },
                    {
                        count: 1.7,
                        name: 'Verify the response of Test Database Button with blank DataBase Username',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Enter database username'
                    },
                    {
                        count: 1.8,
                        name: 'Verify the response of Test Database Button with invalid DataBase Username',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Access denied for user'
                    },
                ]
            },
            {
                count: 3,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of Test Database connection button when mandatory fields are blank',
                        expect: 'The user should see an error message with the fields that are mandatory',
                        assert: 'Enter database name'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of Test Database connection button when mandatory fields are filled',
                        expect: 'A success message should be displayed',
                        assert: 'Successfully connect with Database'
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
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the user can select options from ENV dropdown menu',
                        expect: 'The user should be able to select an option from the Debug dropdown menu',
                        assert: 'Custom'
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
                    {
                        count: 1.11,
                        name: 'Verify if a textbox appears or not when the user selects Custom option from the ENV Dropdown Menu ',
                        expect: 'A textbox should appear for the Custom option in ENV Dropdown menu',
                        assert: '[placeholder=Env File Name]'
                    },
                    {
                        count: 1.12,
                        name: 'Verify if the database connection is established for the MySQL Database Type',
                        expect: 'The Database connection should establish for MySQL if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 1.13,
                        name: 'Verify if the database connection is established for the PostgreSQL Database Type',
                        expect: 'The Database connection should establish for PostgreSQL if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 1.14,
                        name: 'Verify if the database connection is established for the SQLite Database Type',
                        expect: 'The Database connection should establish for SQLite if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 1.15,
                        name: 'Verify if the database connection is established for the SQL Server Database Type',
                        expect: 'The Database connection should establish for SQL Server if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 1.16,
                        name: 'Verify the functionality of eye icon of the Database Password field',
                        expect: 'Clicking on the eye icon should make the text in the Password field visible',
                        assert: {
                            attribute: 'type',
                            value: 'text'
                        }
                    },
                    {
                        count: 1.17,
                        name: 'Verify the functionality of eye icon of the Mail Password field',
                        expect: 'Clicking on the eye icon should make the text in the Password field visible',
                        assert: {
                            attribute: 'type',
                            value: 'text'
                        }
                    },
                ]
            },
            {
                count: 4,
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
                        assert: 'Enter database name'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can proceed by selecting a Custom option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if a Env File name is provided for Custom Option',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the user can proceed by selecting a Develop option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Develop Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the user can proceed by selecting a Staging option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Staging Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the user can proceed by selecting a Production option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Production Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the user can proceed by selecting a Wdiojs option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Wdiojs Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the user can proceed or not if the App Name fields blank',
                        expect: 'The user should not be able to proceed if App Name field is blank',
                        assert: 'The app name field is required'
                    }
                ]
            }
        ]
    }
}

module.exports = new Setup();
