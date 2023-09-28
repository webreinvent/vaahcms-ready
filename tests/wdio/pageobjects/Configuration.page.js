const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert');

class SetupPage extends Page{
    constructor() {
        super();
        this.params.page.id = "CG";
        this.params.page.name = "Configuration";
        this.params.page.path = "/backend#/setup/install/configuration";
        this.params.page.url = this.base_url+this.params.page.path;

    }

    async open()
    {
        await browser.pause(this.is_human_pause)
        await super.open(this.params.page.url);
    }

    async assertTestDatabaseButton(data, assert){
        await expect(Sl.$(data.element.Database_Connection_Button)).toHaveTextContaining(assert);
    }

    async assertTestMailButton(data, assert){
        await expect(Sl.$(data.element.Test_Mail_Button)).toHaveTextContaining(assert);
    }

    async assertTestSaveButton(data, assert){
        await expect(Sl.$(data.element.Save_Button)).toHaveTextContaining(assert);
    }

    async setEnv(data){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Staging).click();
    }

    async setDatabaseValues(data){
        await Sl.$(data.element.Database_Name).setValue(data.value.dbName);
        await Sl.$(data.element.Database_Username).setValue(data.value.dbUsername);
    }

    async assertErrorMessage(data, assert){
        await Sl.$(data.element.Database_Connection_Button).click();
        await expect(Sl.$(data.element.Error_Message).toHaveTextContaining(assert));
    }

    async assertSuccessMessage(data, assert){
        await Sl.$(data.element.Save_Button).click();
        await expect(Sl.$(data.element.Success_Message)).toHaveTextContaining(assert);
    }

    async invalidDatabaseHost(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Host).setValue(data.value.invalid_dbhost);
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabaseHost(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Host).clearValue();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabasePort(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Port).clearValue();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async invalidDatabasePort(data, assert){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Custom).click();
        await Sl.$(data.element.Database_Port).setValue(data.value.invalid_dbport);
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Username).setValue(data.value.dbUsername);
        await this.assertErrorMessage(data, assert);
    }

    async invalidDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Name).setValue(data.value.invalid_dbname);
        await Sl.$(data.element.Database_Username).setValue(data.value.dbUsername);
        await this.assertErrorMessage(data, assert);
    }

    async blankDatabaseUsername(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Name).setValue(data.value.dbName);
        await this.assertErrorMessage(data, assert);
    }

    async invalidDatabaseUsername(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Name).setValue(data.value.dbName);
        await Sl.$(data.element.Database_Username).setValue(data.value.invalid_dbusername);
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

    async testMailButtonFunctionality(data, assert){
        await Sl.$(data.element.Test_Mail_Button).click();
        await expect(Sl.$(data.element.Mail_Username_Heading).toHaveTextContaining(assert));
    }

    async mailUsernameCloseButton(data){
        await Sl.$(data.element.Test_Mail_Button).click();
        await Sl.$(data.element.Mail_Username_Close_Button).click();
        await expect(Sl.$(data.element.Mail_Username_Heading)).not.toExist();
    }

    async envDropdownTest(data, assert){
        await this.setEnv(data);
        await expect(Sl.$(data.element.Env)).toHaveTextContaining(assert);
    }

    async debugDropdownTest(data, assert){
        await Sl.$(data.element.Debug).click();
        await Sl.$(data.element.Debug_Option_False).click();
        await expect(Sl.$(data.element.Debug)).toHaveTextContaining(assert);
    }

    async timezoneDropdownTest(data, assert){
        await Sl.$(data.element.Timezone).click();
        await Sl.$(data.element.Timezone_Option_Paris).click();
        await expect(Sl.$(data.element.Timezone)).toHaveTextContaining(assert);
    }

    async databaseTypeDropdownTest(data, assert){
        await Sl.$(data.element.Database_Type).click();
        await Sl.$(data.element.Database_Type_Option_SQLite).click();
        await expect(Sl.$(data.element.Database_Type)).toHaveTextContaining(assert);
    }

    async mailProviderDropdownTest(data, assert){
        await Sl.$(data.element.Mail_Provider).click();
        await Sl.$(data.element.Mail_Provider_Option_GMail).click();
        await expect(Sl.$(data.element.Mail_Provider)).toHaveTextContaining(assert);
    }

    async mailEncryptionDropdownText(data, assert){
        await Sl.$(data.element.Mail_Encryption).click();
        await Sl.$(data.element.Mail_Encryption_SSL).click();
        await expect(Sl.$(data.element.Mail_Encryption)).toHaveTextContaining(assert);
    }

    async envFileNameTextbox(data, assert){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Custom).click();
        await expect(Sl.$(assert)).toExist();
    }

    async mysqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Type).click();
        await Sl.$(data.element.Database_Type_Option_MySQL).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async postgresqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Type).click();
        await Sl.$(data.element.Database_Type_Option_PostgreSQL).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async sqliteDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Type).click();
        await Sl.$(data.element.Database_Type_Option_SQLite).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async sqlServerDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.Database_Type).click();
        await Sl.$(data.element.Database_Type_Option_SQL_Server).click();
        await this.setDatabaseValues(data);
        await this.assertErrorMessage(data, assert);
    }

    async databasePasswordEyeIconFunctionality(data, assert){
        await Sl.$(data.element.Database_Password).setValue(data.value.dbPassword);
        await Sl.$(data.element.Database_Password_Eye_Button).click();
        await expect(Sl.$(data.element.Database_Password)).toHaveAttribute(assert.attribute,assert.value);
    }

    async mailPasswordEyeIconFunctionality(data, assert){
        await Sl.$(data.element.Mail_Password).setValue(data.value.mailPassword);
        await Sl.$(data.element.Mail_Password_Eye_Button).click();
        await expect(Sl.$(data.element.Mail_Password)).toHaveAttribute(assert.attribute,assert.value);
    }

    async validDataResponse(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await Sl.$(data.element.Database_Connection_Button).click();
        await browser.pause(this.is_human_pause);
        await this.assertSuccessMessage(data, assert);
    }

    async blankDataResponse(data, assert){
        await Sl.$(data.element.Database_Connection_Button).click();
        await expect(Sl.$(data.element.Error_Message)).toHaveTextContaining(assert);
        await expect(Sl.$(data.element.Error_Message)).toBeDisabled();
    }

    async customOptionPageResponse(data, assert){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Custom).click();
        await this.setDatabaseValues(data);
        await Sl.$(data.element.Database_Connection_Button).click();
        await browser.pause(this.is_human_pause);
        await this.assertSuccessMessage(data, assert);
    }

    async developOptionPageResponse(data, assert){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Develop).click();
        await this.setDatabaseValues(data);
        await Sl.$(data.element.Database_Connection_Button).click();
        await browser.pause(this.is_human_pause);
        await this.assertSuccessMessage(data, assert);
    }

    async stagingOptionPageResponse(data, assert){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Staging).click();
        await this.setDatabaseValues(data);
        await Sl.$(data.element.Database_Connection_Button).click();
        await browser.pause(this.is_human_pause);
        await this.assertSuccessMessage(data, assert);
    }

    async productionOptionPageResponse(data, assert){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Production).click();
        await this.setDatabaseValues(data);
        await Sl.$(data.element.Database_Connection_Button).click();
        await browser.pause(this.is_human_pause);
        await this.assertSuccessMessage(data, assert);
    }

    async wdiojsOptionPageResponse(data, assert){
        await Sl.$(data.element.Env).click();
        await Sl.$(data.element.Env_Option_Wdiojs).click();
        await this.setDatabaseValues(data);
        await Sl.$(data.element.Database_Connection_Button).click();
        await browser.pause(this.is_human_pause);
        await this.assertSuccessMessage(data, assert);
    }

    async blankAppNameResponse(data, assert){
        await this.setEnv(data);
        await Sl.$(data.element.App_Name).clearValue();
        await this.setDatabaseValues(data);
        await this.assertTestDatabaseButton(assert);
        await browser.pause(this.is_human_pause);
        await expect(Sl.$(data.element.Save_Button)).toBeDisabled();
    }
}

module.exports = new SetupPage()
