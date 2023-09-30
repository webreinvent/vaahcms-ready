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
            Env_testid: 'configuration-env',
            Env_Option_Custom_label: 'Custom',
            Env_Option_Local_label: 'Local',
            Env_Option_Develop_label: 'Develop',
            Env_Option_Staging_label: 'Staging',
            Env_Option_Production_label: 'Production',
            Env_Option_Wdiojs_label: 'Wdiojs',
            Env_File_Name_id: 'app-env-custom',
            Debug_testid: 'configuration-debug',
            Debug_Option_True_label: 'True',
            Debug_Option_False_label: 'False',
            Timezone_testid: 'configuration-timezone',
            Timezone_Option_Paris_label: '(GMT+01:00) Paris',
            App_Name_id: 'app-name',
            Database_Type_testid: 'configuration-db_type',
            Database_Type_Option_MySQL_label: 'MySQL',
            Database_Type_Option_PostgreSQL_label: 'PostgreSQL',
            Database_Type_Option_SQLite_label: 'SQLite',
            Database_Type_Option_SQL_Server_label: 'SQL Server',
            Database_Host_testid: 'configuration-db_host',
            Database_Port_testid: 'configuration-db_port',
            Database_Name_testid: 'configuration-db_name',
            Database_Username_testid: 'configuration-db_username',
            Database_Password_testid: 'configuration-db_password',
            Database_Password_Eye_Button_testid: 'configuration-db_password_eye',
            Database_Connection_Button_testid: 'configuration-test_db_connection_btn_text',
            Mail_Provider_testid: 'configuration-mail_provider',
            Mail_Provider_Option_MailTrap_label: 'MailTrap',
            Mail_Provider_Option_GMail_label: 'GMail',
            Mail_Provider_Option_Other_label: 'Other',
            Mail_Driver_testid: 'configuration-mail_driver',
            Mail_Host_testid: 'configuration-mail_host',
            Mail_Port_testid: 'configuration-mail_port',
            Mail_Username_testid: 'configuration-mail_username',
            Mail_Password_testid: 'configuration-mail_password',
            Mail_Password_Eye_Button_testid: 'configuration-mail_password_eye',
            Mail_Encryption_testid: 'configuration-mail_encryption',
            Mail_Encryption_None_label: 'None',
            Mail_Encryption_SSL_label: 'SSL',
            Mail_Encryption_TLS_label: 'TLS',
            From_Name_testid: 'configuration-mail_from_name',
            From_Email_testid: 'configuration-mail_from_address',
            Test_Mail_Button_testid: 'configuration-test_mail_btn_text',
            Save_Button_testid: 'configuration-save_btn',
            Mail_Username_Dialog_testid: 'configuration-test_email_to',
            Mail_Username_Close_Button_testid: 'configuration-test_mail_close',
            Mail_Username_Send_Button_testid: 'configuration-send_mail',
            Validation_Message_class: 'p-toast-detail',
            Validation_Message_close_btn_label: 'Close',
            Debugger_close_btn_class: 'phpdebugbar-close-btn'
        }
        this.value = {
            env: 'Custom',
            env_file: 'Test',
            dbName: 'vaahcms',
            dbUsername: 'root',
            dbPassword: 'testing',
            mailPassword: 'testing',
            from_Name:'Test Cases',
            from_Email: 'we@webreinvent.com',
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
                    },
                    {
                        count: 1.4,
                        name: 'Verify the if the Test Mail Configuration Button exists or not',
                        expect: 'The Test Mail Configuration button should exist on the page',
                    },
                    {
                        count: 1.5,
                        name: 'Verify the if the Save & Next Button exists or not',
                        expect: 'The Save & Next button should exist on the page',
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
                        assert: 'Staging'
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
                        count: 2.1,
                        name: 'Verify if the user can select options from Mail Encryption dropdown menu',
                        expect: 'The user should be able to select an option from the Mail Encryption dropdown menu',
                        assert: 'SSL'
                    },
                    {
                        count: 2.2,
                        name: 'Verify if a textbox appears or not when the user selects Custom option from the ENV Dropdown Menu ',
                        expect: 'A textbox should appear for the Custom option in ENV Dropdown menu',
                        assert: 'configuration-custom_evn'
                    },
                    {
                        count: 2.3,
                        name: 'Verify if the database connection is established for the MySQL Database Type',
                        expect: 'The Database connection should establish for MySQL if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 2.4,
                        name: 'Verify if the database connection is established for the PostgreSQL Database Type',
                        expect: 'The Database connection should establish for PostgreSQL if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 2.5,
                        name: 'Verify if the database connection is established for the SQLite Database Type',
                        expect: 'The Database connection should establish for SQLite if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 2.6,
                        name: 'Verify if the database connection is established for the SQL Server Database Type',
                        expect: 'The Database connection should establish for SQL Server if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 2.7,
                        name: 'Verify the functionality of eye icon of the Database Password field',
                        expect: 'Clicking on the eye icon should make the text in the Password field visible',
                        assert: {
                            attribute: 'type',
                            value: 'text'
                        }
                    },
                    {
                        count: 2.8,
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
                        name: 'Verify if the user can proceed by leaving the mandatory fields blank',
                        expect: 'User should not be able to proceed and the save button should be disabled',
                        assert: {
                            database_btn_assert: 'Enter database name',
                            save_btn_assert: 'disabled'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can proceed or not if the App Name fields blank',
                        expect: 'The user should not be able to proceed if App Name field is blank',
                        assert: 'The app name field is required'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can proceed by filling all the mandatory fields',
                        expect: 'The user should be able to proceed if data is entered in the fields',
                        assert: 'Configuration Saved'
                    },
                    // {
                    //     count: 1.4,
                    //     name: 'Verify if the user can create multiple environment using the same APP URL',
                    //     expect: 'Creating multiple environment using same APP URL is not allowed. The user should see an error message',
                    //     assert: 'Duplicate entries for app_url'
                    // },
                    {
                        count: 1.5,
                        name: 'Verify if the user can proceed by selecting a Custom option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if a Env File name is provided for Custom Option',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the user can proceed by selecting a Develop option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Develop Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the user can proceed by selecting a Staging option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Staging Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the user can proceed by selecting a Production option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Production Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the user can proceed by selecting a Wdiojs option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Wdiojs Option is selected',
                        assert: 'Configuration Saved'
                    },
                ]
            }
        ]
    }
}

module.exports = new Setup();