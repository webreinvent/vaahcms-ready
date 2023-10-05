const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert')

class ConfigurationPage extends Page{
    constructor() {
        super();
        this.params.page.id = "CG";
        this.params.page.name = "Configuration";
        this.params.page.path = "/backend#/setup/install/configuration";
        this.params.page.url = this.base_url+this.params.page.path;
    }

    async open()
    {
        await browser.maximizeWindow();
        await asserts.pause();
        await super.open(this.params.page.url);
    }

    async clear(element){
        await Sl.testid(element).doubleClick();
        await browser.keys('Backspace');
    }

    async assertTestDatabaseButton(data){
        await expect(Sl.testid(data.element.Database_Connection_Button_testid)).toExist();
    }

    async assertTestMailButton(data){
        await expect(Sl.testid(data.element.Test_Mail_Button_testid)).toExist();
    }

    async assertTestSaveButton(data){
        await expect(Sl.testid(data.element.Save_Button_testid)).toExist();
    }

    async setEnv(data){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Staging_label).click();
        const dbUsername = await Sl.testid(data.element.Database_Username_testid);
        await browser.waitUntil(async function () {
            return (await dbUsername.getValue()) === (data.value.dbUsername);
        }, {timeout: 5000})
    }

    async setDatabaseValues(data){
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.dbName);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.dbUsername);
    }

    async setEmailValue(data){
        await Sl.testid(data.element.From_Name_testid).scrollIntoView();
        await Sl.testid(data.element.From_Name_testid).setValue(data.value.from_Name);
        await Sl.testid(data.element.From_Email_testid).setValue(data.value.from_Email);
    }

    async clickDatabaseButton(data){
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
    }

    async assertMessage(data, assert){
        await this.clickDatabaseButton(data);
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert);
    }

    async assertSuccessMessage(data, assert){
        await Sl.testid(data.element.Save_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Save_Button_testid).click();
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert);
    }

    async invalidDatabaseHost(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Host_testid).setValue(data.value.invalid_dbhost);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseHost(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await this.clear(data.element.Database_Name_testid)
        await asserts.pause();
        await this.assertMessage(data, assert);
    }

    async blankDatabasePort(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await this.clear(data.element.Database_Port_testid);
        await this.assertMessage(data, assert);
    }

    async invalidDatabasePort(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Port_testid).setValue(data.value.invalid_dbport);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.dbUsername);
        await this.clear(data.element.Database_Name_testid);
        await this.assertMessage(data, assert);
    }

    async invalidDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.invalid_dbname);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.dbUsername);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseUsername(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await this.clear(data.element.Database_Username_testid);
        await this.assertMessage(data, assert);
    }

    async invalidDatabaseUsername(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.dbName);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.invalid_dbusername);
        await this.assertMessage(data, assert);
    }

    async databaseButtonBlankTest(data, assert){
        await this.setEnv(data);
        await this.clear(data.element.Database_Name_testid);
        await this.clear(data.element.Database_Username_testid);
        await this.assertMessage(data, assert);
    }

    async databaseButtonValidTest(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async testMailButtonFunctionality(data){
        await Sl.testid(data.element.Test_Mail_Button_testid).click();
        await expect(Sl.testid(data.element.Mail_Username_Dialog_testid)).toExist();
    }

    async mailUsernameCloseButton(data){
        await Sl.testid(data.element.Test_Mail_Button_testid).click();
        await Sl.testid(data.element.Mail_Username_Close_Button_testid).click();
        await expect(Sl.testid(data.element.Mail_Username_Dialog_testid)).not.toExist();
    }

    async envDropdownTest(data, assert){
        await this.setEnv(data);
        await expect(Sl.testid(data.element.Env_testid)).toHaveTextContaining(assert);
    }

    async debugDropdownTest(data, assert){
        await Sl.testid(data.element.Debug_testid).click();
        await Sl.label(data.element.Debug_Option_False_label).click();
        await expect(Sl.testid(data.element.Debug_testid)).toHaveTextContaining(assert);
    }

    async timezoneDropdownTest(data, assert){
        await Sl.testid(data.element.Timezone_testid).click();
        await Sl.label(data.element.Timezone_Option_Paris_label).click();
        await expect(Sl.testid(data.element.Timezone_testid)).toHaveTextContaining(assert);
    }

    async databaseTypeDropdownTest(data, assert){
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.label(data.element.Database_Type_Option_SQLite_label).click();
        await expect(Sl.testid(data.element.Database_Type_testid)).toHaveTextContaining(assert);
    }

    async mailProviderDropdownTest(data, assert){
        await Sl.testid(data.element.Mail_Provider_testid).click();
        await Sl.label(data.element.Mail_Provider_Option_GMail_label).click();
        await expect(Sl.testid(data.element.Mail_Provider_testid)).toHaveTextContaining(assert);
    }

    async mailEncryptionDropdownText(data, assert){
        await Sl.testid(data.element.Mail_Encryption_testid).click();
        await Sl.label(data.element.Mail_Encryption_SSL_label).click();
        await expect(Sl.testid(data.element.Mail_Encryption_testid)).toHaveTextContaining(assert);
    }

    async customTextbox(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Custom_label).click();
        await expect(Sl.testid(assert)).toExist();
    }

    async customeTextboxFunctionality(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Custom_label).click();
        await Sl.testid(data.element.Env_File_Name_testid).setValue(data.value.env_file);
        await expect(Sl.testid(data.element.Env_File_Name_testid)).toHaveValueContaining(assert);
    }

    async mysqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.label(data.element.Database_Type_Option_MySQL_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async postgresqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.label(data.element.Database_Type_Option_PostgreSQL_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async sqliteDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.label(data.element.Database_Type_Option_SQLite_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async sqlServerDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.label(data.element.Database_Type_Option_SQL_Server_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async databasePasswordEyeIconFunctionality(data, assert){
        await Sl.testid(data.element.Database_Password_testid).setValue(data.value.dbPassword);
        await Sl.testid(data.element.Database_Password_Eye_Button_testid).click();
        await expect(Sl.testid(data.element.Database_Password_testid)).toHaveAttribute(assert.attribute,assert.value);
    }

    async mailPasswordEyeIconFunctionality(data, assert){
        await Sl.testid(data.element.Mail_Password_testid).setValue(data.value.mailPassword);
        await Sl.testid(data.element.Mail_Password_Eye_Button_testid).click();
        await expect(Sl.testid(data.element.Mail_Password_testid)).toHaveAttribute(assert.attribute,assert.value);
    }

    async mailDriverPlaceholder(data, assert){
        await expect(Sl.testid(data.element.Mail_Driver_testid)).toHaveAttribute(assert);
    }

    async mailDriverTypeFunctionality(data, assert){
        await Sl.testid(data.element.Mail_Driver_testid).setValue(data.value.mailDriver);
        await expect(Sl.testid(data.element.Mail_Driver_testid)).toHaveValueContaining(assert);
    }

    async mailHostPlaceholder(data, assert){
        await expect(Sl.testid(data.element.Mail_Host_testid)).toHaveAttribute(assert);
    }

    async mailHostTypeFunctionality(data, assert){
        await Sl.testid(data.element.Mail_Host_testid).setValue(data.value.mailHost);
        await expect(Sl.testid(data.element.Mail_Host_testid)).toHaveValueContaining(assert);
    }

    async mailPortPlaceholder(data, assert){
        await expect(Sl.testid(data.element.Mail_Port_testid)).toHaveAttribute(assert);
    }

    async mailPortTypeFunctionality(data, assert){
        await Sl.testid(data.element.Mail_Port_testid).setValue(data.value.mailPort);
        await expect(Sl.testid(data.element.Mail_Port_testid)).toHaveValueContaining(assert);
    }

    async mailUsernamePlaceholder(data, assert){
        await expect(Sl.testid(data.element.Mail_Username_testid)).toHaveAttribute(assert);
    }

    async mailUsernameTypeFunctionality(data, assert){
        await Sl.testid(data.element.Mail_Username_testid).setValue(data.value.mailUsername);
        await expect(Sl.testid(data.element.Mail_Username_testid)).toHaveValueContaining(assert);
    }

    async mailPasswordPlaceholder(data, assert){
        await expect(Sl.testid(data.element.Mail_Password_testid)).toHaveAttribute(assert);
    }

    async mailPasswordTypeFunctionality(data, assert){
        await Sl.testid(data.element.Mail_Password_testid).setValue(data.value.mailPassword);
        await expect(Sl.testid(data.element.Mail_Password_testid)).toHaveValueContaining(assert);
    }

    async mailPasswordHidden(data, assert){
        await Sl.testid(data.element.Mail_Password_testid).setValue(data.value.mailPassword);
        await expect(Sl.testid(data.element.Mail_Password_testid)).toHaveAttribute(assert.attribute, assert.value);
    }

    async fromNamePlaceholder(data, assert){
        await expect(Sl.testid(data.element.From_Name_testid)).toHaveAttribute(assert);
    }

    async fromNameTypeFunctionality(data, assert){
        await Sl.testid(data.element.From_Name_testid).setValue(data.value.from_Name);
        await expect(Sl.testid(data.element.From_Name_testid)).toHaveValueContaining(assert);
    }

    async fromEmailPlaceholder(data, assert){
        await expect(Sl.testid(data.element.From_Email_testid)).toHaveAttribute(assert);
    }

    async fromEmailTypeFunctionality(data, assert){
        await Sl.testid(data.element.From_Email_testid).setValue(data.value.from_Email);
        await expect(Sl.testid(data.element.From_Email_testid)).toHaveValueContaining(assert);
    }

    async blankDataResponse(data, assert){
        await this.clickDatabaseButton(data);
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert.database_btn_assert);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await Sl.testid(data.element.Save_Button_testid).scrollIntoView();
        await expect(Sl.testid(data.element.Save_Button_testid)).toHaveAttribute(assert.save_btn_assert);
    }

    async blankAppNameResponse(data, assert){
        await this.setEnv(data);
        await asserts.pause();
        await this.setDatabaseValues(data);
        await this.clear(data.element.App_Name_id);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await this.assertSuccessMessage(data, assert);
    }

    async validDataResponse(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async customOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Custom_label).click();
        await Sl.testid(data.element.Env_File_Name_testid).setValue(data.value.env_file);
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async developOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Develop_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async stagingOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Staging_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async productionOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Production_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async wdiojsOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.label(data.element.Env_Option_Wdiojs_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }
}

module.exports = new ConfigurationPage()
