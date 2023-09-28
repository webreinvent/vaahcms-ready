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
        await Sl.$(data.element.Env_Option_Custom).click();
    }

    async setDatabaseValues(data){
        await Sl.$(data.element.Database_Name).setValue(data.value.dbName);
        await Sl.$(data.element.Database_Username).setValue(data.value.dbUsername);
    }

    async assertErrorMessage(data, assert){
        await Sl.$(data.element.Database_Connection_Button).click();
        await expect(Sl.$(data.element.Error_Message).toHaveTextContaining(assert));
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

}

module.exports = new SetupPage()
