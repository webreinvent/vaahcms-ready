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

    async clickButton(data){
        await expect(Sl.$(data.element.install_button).click());
    }

    async databaseButtonBlankTest(data, assert){
        const Env = await Sl.$(data.element.Env);
        Env.click();
        await browser.pause(10000);
        await Env.selectByVisibleText(data.value.env);
        await Sl.attr(data.element.Database_Connection_Button.attribute, data.element.Database_Connection_Button.value).click();
        await expect(Sl.$(data.element.Database_Connection_Message).toHaveTextContaining(assert));
    }

    async databaseButtonValidTest(data, assert){
        const Env = await Sl.$(data.element.Env);
        Env.click();
        await browser.pause(10000);
        await Env.selectByVisibleText(data.value.env);
        const dbName = data.element.Database_Name;
        const dbUsername = data.element.Database_Username;
        const dbPassword = data.element.Database_Password;
        await Sl.attr(dbName.attribute, dbName.value).setValue(data.value.dbName);
        await Sl.attr(dbUsername.attribute, dbUsername.value).setValue(data.value.dbUsername);
        await Sl.attr(dbPassword.attribute, dbPassword.value).setValue(data.value.dbPassword);
        await Sl.attr(data.element.Database_Connection_Button.attribute, data.element.Database_Connection_Button.value).click();
        await expect(Sl.$(data.element.Database_Connection_Message).toHaveTextContaining(assert));
    }

    async formValidationForValidInput(data, assert){
        const Env = await Sl.$(data.element.Env);
        Env.click();
        await browser.pause(10000);
        await Env.selectByVisibleText(data.value.env);
        await Sl.attr(data.element.Database_Connection_Button.attribute, data.element.Database_Connection_Button.value).click();
        await Sl.$(data.element.Save_Button).click();
        const msg = await Sl.$(data.element.Success_Message);
        await msg.waitForExist({timeout: 5000});
        await expect(msg).toHaveTextContaining(assert);
    }

    async envDropdownOption(data, title, assert){
        const Env = await Sl.$(data.elements.Env);
        Env.click();
        await Env.selectByVisibleText(title);
        await browser.pause(this.is_human_pause);
        await expect(Env).toHaveTextContaining(assert);
    }
}

module.exports = new SetupPage()
