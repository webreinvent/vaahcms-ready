const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert');
const helper = require('../vaah-webdriverio/Helper');

class MigratePage extends Page{
    constructor() {
        super();
        this.params.page.id = "MG";
        this.params.page.name = "Migrate";
        this.params.page.path = "/backend#/setup/install/migrate";
        this.params.page.url = this.base_url+this.params.page.path;
    }

    async open()
    {
        await browser.maximizeWindow();
        await asserts.pause();
        await super.open(this.params.page.url);
    }

    async waitExist(element){
        await element.waitForExist({timeout: helper.long_pause});
    }

    async waitDisplayed(element){
        await element.waitForDisplayed({timeout: helper.long_pause, interval: helper.small_pause});
    }

    async envFileVisibility(data){
        await expect(Sl.testid(data.element.env_file_testid)).toExist();
    }

    async migrationMessageVisibility(data, assert){
        await expect(Sl.testid(data.element.migration_message_testid)).toHaveTextContaining(assert);
    }

    async migrateButtonAvailability(data){
        await expect(Sl.testid(data.element.migration_button_testid)).toExist();
    }

    async backButtonAvailability(data){
        await expect(Sl.testid(data.element.back_button_testid)).toExist();
    }

    async saveButtonAvailability(data){
        await expect(Sl.testid(data.element.save_button_testid)).toExist();
    }

    async messageCloseButtonFunctionality(data, assert){
        await Sl.testid(data.element.close_button_testid).click();
        await expect(Sl.role(data.element.migration_message_div_role)).toHaveAttribute(assert.attribute, assert.value);
    }

    async migrationButtonFunctionality(data){
        await Sl.testid(data.element.migration_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toExist();
    }

    async migrationConfirmationMessage(data, assert){
        await Sl.testid(data.element.migration_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toHaveTextContaining(assert)
    }

    async migrationWindowCloseButton(data){
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.migration_close_button_testid).click();
        await asserts.pause();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).not.toExist();
    }

    async cancelButtonFunctionality(data){
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.cancel_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).not.toExist();
    }

    async proceedButtonFunctionality(data, assert){
        await this.waitDisplayed(Sl.testid(data.element.env_file_testid))
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.proceed_button_testid).click();
        const message = Sl.class(data.element.validation_message_class);
        await this.waitExist(message);
        await expect(message).toHaveTextContaining(assert);
    }

    async backButtonFunctionality(data, assert){
        await Sl.testid(data.element.back_button_testid).click();
        await asserts.pageUrl(assert);
    }

    async saveButtonFunctionality(data, assert){
        await browser.refresh();
        await this.waitDisplayed(Sl.testid(data.element.env_file_testid))
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.proceed_button_testid).click();
        await this.waitExist(Sl.class(data.element.validation_message_class));
        await Sl.testid(data.element.save_button_testid).click();
        await asserts.pause();
        await asserts.pageUrl(assert);
    }

    async invalidSaveButtonResponse(data, assert){
        await browser.refresh();
        await Sl.testid(data.element.save_button_testid).click();
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async validSaveButtonResponse(data, assert){
        await this.waitDisplayed(Sl.testid(data.element.env_file_testid))
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.proceed_button_testid).click();
        await this.waitExist(Sl.class(data.element.validation_message_class));
        await Sl.testid(data.element.save_button_testid).click();
        await asserts.pageUrl(assert);
    }
}

module.exports = new MigratePage();
