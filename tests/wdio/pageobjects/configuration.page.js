const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');

class ConfigurationPage extends Page{
    constructor() {
        super();
        this.params.page.id = "CG";
        this.params.page.name = "Configuration";
        this.params.page.path = "/backend#/setup/install/configuration";
        this.params.page.url = this.base_url+this.params.page.path;
    }

    async pause(is_human){
        if(is_human)
            await browser.pause(this.is_human_pause);
    }

    async open()
    {
        await browser.maximizeWindow();
        await this.pause(this.is_human);
        await super.open(this.params.page.url);
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
        await Sl.arialabel(data.element.Env_Option_Staging_label).click();
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

    async assertMessage(data, assert){
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await expect(Sl.class(data.element.Validation_Message_class).toHaveTextContaining(assert));
    }

    async assertSuccessMessage(data, assert){
        await Sl.testid(data.element.Save_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Save_Button_testid).click();
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert);
    }

    async invalidDatabaseHost(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Host_testid).setValue(data.value.invalid_dbhost);
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseHost(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Host_testid).clearValue();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async blankDatabasePort(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Port_testid).clearValue();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async invalidDatabasePort(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Port_testid).setValue(data.value.invalid_dbport);
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.dbUsername);
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
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.dbName);
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
        await Sl.arialabel(data.element.Debug_Option_False_label).click();
        await expect(Sl.testid(data.element.Debug_testid)).toHaveTextContaining(assert);
    }

    async timezoneDropdownTest(data, assert){
        await Sl.testid(data.element.Timezone_testid).click();
        await Sl.arialabel(data.element.Timezone_Option_Paris_label).click();
        await expect(Sl.testid(data.element.Timezone_testid)).toHaveTextContaining(assert);
    }

    async databaseTypeDropdownTest(data, assert){
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.arialabel(data.element.Database_Type_Option_SQLite_label).click();
        await expect(Sl.testid(data.element.Database_Type_testid)).toHaveTextContaining(assert);
    }

    async mailProviderDropdownTest(data, assert){
        await Sl.testid(data.element.Mail_Provider_testid).click();
        await Sl.arialabel(data.element.Mail_Provider_Option_GMail_label).click();
        await expect(Sl.testid(data.element.Mail_Provider_testid)).toHaveTextContaining(assert);
    }

    async mailEncryptionDropdownText(data, assert){
        await Sl.testid(data.element.Mail_Encryption_testid).click();
        await Sl.arialabel(data.element.Mail_Encryption_SSL_label).click();
        await expect(Sl.testid(data.element.Mail_Encryption_testid)).toHaveTextContaining(assert);
    }

    async customTextbox(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.arialabel(data.element.Env_Option_Custom_label).click();
        await expect(Sl.testid(assert)).toExist();
    }

    async customeTextboxFunctionality(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.arialabel(data.element.Env_Option_Custom_label).click();
        await Sl.testid(data.element.Env_File_Name_testid).setValue(data.value.env_file);
        await expect(Sl.testid(data.element.Env_File_Name_testid)).toHaveValueContaining(assert);
    }

    async mysqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.arialabel(data.element.Database_Type_Option_MySQL_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async postgresqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.arialabel(data.element.Database_Type_Option_PostgreSQL_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async sqliteDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.arialabel(data.element.Database_Type_Option_SQLite_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async sqlServerDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.arialabel(data.element.Database_Type_Option_SQL_Server_label).click();
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

    async blankDataResponse(data, assert){
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert.database_btn_assert);
        await Sl.testid(data.element.Save_Button_testid).scrollIntoView();
        await expect(Sl.testid(data.element.Save_Button_testid)).toHaveAttribute(assert.save_btn_assert);
    }

    async blankAppNameResponse(data, assert){
        await this.setEnv(data);
        await this.pause(this.is_human);
        await this.setDatabaseValues(data);
        await Sl.id(data.element.App_Name_id).doubleClick();
        await browser.keys('Backspace');
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await this.assertSuccessMessage(data, assert);
    }

    async validDataResponse(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async customOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.arialabel(data.element.Env_Option_Custom_label).click();
        await Sl.testid(data.element.Env_File_Name_testid).setValue(data.value.env_file);
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async developOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.arialabel(data.element.Env_Option_Develop_label).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async stagingOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.arialabel(data.element.Env_Option_Staging_label).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async productionOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.arialabel(data.element.Env_Option_Production_label).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async wdiojsOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.arialabel(data.element.Env_Option_Wdiojs_label).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).scrollIntoView();
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await Sl.arialabel(data.element.Validation_Message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }
}

module.exports = new ConfigurationPage()
