const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');

class SetupPage extends Page{
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
        await Sl.id(data.element.Env_Option_Staging_id).click();
    }

    async setDatabaseValues(data){
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.dbName);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.dbUsername);
    }

    async assertErrorMessage(data, assert){
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await expect(Sl.class(data.element.Validation_Message_class).toHaveTextContaining(assert));
    }

    async assertSuccessMessage(data, assert){
        await Sl.testid(data.element.Save_Button_testid).click();
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert);
    }

    async invalidDatabaseHost(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Host_testid).setValue(data.value.invalid_dbhost);
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabaseHost(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Host_testid).clearValue();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabasePort(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Port_testid).clearValue();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async invalidDatabasePort(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.id(data.element.Env_Option_Custom_id).click();
        await Sl.testid(data.element.Database_Port_testid).setValue(data.value.invalid_dbport);
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.dbUsername);
        await this.assertErrorMessage(data, assert);
    }

    async invalidDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.invalid_dbname);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.dbUsername);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabaseUsername(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.dbName);
        await this.assertErrorMessage(data, assert);
    }

    async invalidDatabaseUsername(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Name_testid).setValue(data.value.dbName);
        await Sl.testid(data.element.Database_Username_testid).setValue(data.value.invalid_dbusername);
        await this.assertErrorMessage(data, assert);
    }

    async databaseButtonBlankTest(data, assert){
        await this.setEnv(data);
        await this.assertErrorMessage(data, assert);
    }

    async databaseButtonValidTest(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues();
        await this.assertErrorMessage(data, assert);
    }

    async testMailButtonFunctionality(data){
        await Sl.testid(data.element.Test_Mail_Button_testid).click();
        await expect(Sl.testid(data.element.Mail_Username_Dialog_testid).toExist());
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
        await Sl.id(data.element.Debug_Option_False_id).click();
        await expect(Sl.testid(data.element.Debug_testid)).toHaveTextContaining(assert);
    }

    async timezoneDropdownTest(data, assert){
        await Sl.testid(data.element.Timezone_testid).click();
        await Sl.id(data.element.Timezone_Option_Paris_id).click();
        await expect(Sl.testid(data.element.Timezone_testid)).toHaveTextContaining(assert);
    }

    async databaseTypeDropdownTest(data, assert){
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.id(data.element.Database_Type_Option_SQLite_id).click();
        await expect(Sl.testid(data.element.Database_Type_testid)).toHaveTextContaining(assert);
    }

    async mailProviderDropdownTest(data, assert){
        await Sl.testid(data.element.Mail_Provider_testid).click();
        await Sl.id(data.element.Mail_Provider_Option_GMail_id).click();
        await expect(Sl.testid(data.element.Mail_Provider_testid)).toHaveTextContaining(assert);
    }

    async mailEncryptionDropdownText(data, assert){
        await Sl.testid(data.element.Mail_Encryption_testid).click();
        await Sl.id(data.element.Mail_Encryption_SSL_id).click();
        await expect(Sl.testid(data.element.Mail_Encryption_testid)).toHaveTextContaining(assert);
    }

    async envFileNameTextbox(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.id(data.element.Env_Option_Custom_id).click();
        await expect(Sl.testid(assert)).toExist();
    }

    async mysqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.id(data.element.Database_Type_Option_MySQL_id).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async postgresqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.id(data.element.Database_Type_Option_PostgreSQL_id).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async sqliteDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.id(data.element.Database_Type_Option_SQLite_id).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async sqlServerDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.Database_Type_testid).click();
        await Sl.id(data.element.Database_Type_Option_SQL_Server_id).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
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

    async validDataResponse(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await this.pause(this.is_human);
        await this.assertSuccessMessage(data, assert);
    }

    async blankDataResponse(data, assert){
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert);
        await expect(Sl.class(data.element.Validation_Message_class)).toBeDisabled();
    }

    async customOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.id(data.element.Env_Option_Custom_id).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await this.pause(this.is_human);
        await this.assertSuccessMessage(data, assert);
    }

    async developOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.id(data.element.Env_Option_Develop_id).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await this.pause(this.is_human);
        await this.assertSuccessMessage(data, assert);
    }

    async stagingOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.id(data.element.Env_Option_Staging_id).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await this.pause(this.is_human);
        await this.assertSuccessMessage(data, assert);
    }

    async productionOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.id(data.element.Env_Option_Production_id).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await this.pause(this.is_human);
        await this.assertSuccessMessage(data, assert);
    }

    async wdiojsOptionPageResponse(data, assert){
        await Sl.testid(data.element.Env_testid).click();
        await Sl.id(data.element.Env_Option_Wdiojs_id).click();
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.Database_Connection_Button_testid).click();
        await this.pause(this.is_human);
        await this.assertSuccessMessage(data, assert);
    }

    async blankAppNameResponse(data, assert){
        await this.setEnv(data);
        await Sl.id(data.element.App_Name_id).clearValue();
        await this.setDatabaseValues(data);
        await this.assertTestDatabaseButton(assert);
        await this.pause(this.is_human);
        await expect(Sl.testid(data.element.Save_Button_testid)).toBeDisabled();
    }
}

module.exports = new SetupPage()
