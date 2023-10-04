const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert');

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

    async envFileVisibility(data){
        await expect(Sl.testid(data.element.env_file_testid)).toExist();
    }

    async migrationMessageVisibility(data,assert){
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

    async deleteMigrationMessageAssert(data, assert){
        await Sl.testid(data.element.migration_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toExist();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toHaveTextContaining(assert);
    }

    async messageCloseButtonFunctionality(data){
        await Sl.testid(data.element.close_button_testid).click();
        await expect(Sl.testid(data.element.migration_message_testid)).not.toExist();
    }

    async migrationButtonFunctionality(data){
        await Sl.testid(data.element.migration_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toExist();
    }

    async cancelButtonFunctionality(data){
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.cancel_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).not.toExist();
    }

    async proceedButtonFunctionality(data, assert){
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.proceed_button_testid).click();
        const message = Sl.class(data.element.Validation_Message_class);
        await message.waitForExist({timeout: 6000});
        await expect(message).toHaveTitleContaining(assert);
    }

    async backButtonFunctionality(data, assert){
        await Sl.testid(data.element.back_button_testid).click();
        await this.pageUrl(assert);
    }

    async saveButtonFunctionality(data, assert){
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.proceed_button_testid).click();
        const message = Sl.class(data.element.Validation_Message_class);
        await message.waitForExist({timeout: 6000});
        await Sl.testid(data.element.save_button_testid).click();
        await this.pageUrl(assert);
    }

    async migrationWindowCloseButton(data){
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.migration_close_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).not.toExist();
    }

    async migrationConfirmationMessage(data, assert){
        await Sl.testid(data.element.migration_button_testid).click();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toHaveTextContaining(assert)
    }

    async invalidSaveButtonResponse(data, assert){
        await Sl.testid(data.element.save_button_testid).click();
        await expect(Sl.class(data.element.Validation_Message_class)).toHaveTextContaining(assert);
    }

    async validSaveButtonResponse(data, assert){
        await Sl.testid(data.element.migration_button_testid).click();
        await Sl.testid(data.element.proceed_button_testid).click();
        const message = Sl.class(data.element.Validation_Message_class);
        await message.waitForExist({timeout: 6000});
        await Sl.testid(data.element.save_button_testid).click();
        await this.pageUrl(assert);
    }
}

module.exports = new MigratePage();
