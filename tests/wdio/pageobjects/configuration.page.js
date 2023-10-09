const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert')
const helper = require('../vaah-webdriverio/Helper')

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

    async assertTestDatabaseButton(data){
        await expect(Sl.testid(data.element.db_connection_btn_testid)).toExist();
    }

    async assertTestMailButton(data){
        await expect(Sl.testid(data.element.test_mail_btn_testid)).toExist();
    }

    async assertTestSaveButton(data){
        await expect(Sl.testid(data.element.save_btn_testid)).toExist();
    }

    async setEnv(data){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_staging_label).click();
        const Username = await Sl.testid(data.element.db_username_testid);
        await browser.waitUntil(async function () {
            return (await Username.getValue()) === (data.value.db_username)
        }, {timeout: helper.long_pause})
    }

    async setDatabaseValues(data){
        await Sl.testid(data.element.db_name_testid).setValue(data.value.db_name);
        await Sl.testid(data.element.db_username_testid).setValue(data.value.db_username);
    }

    async setEmailValue(data){
        await Sl.testid(data.element.from_name_testid).setValue(data.value.from_name);
        await Sl.testid(data.element.from_email_testid).setValue(data.value.from_email);
    }

    async setMailProvider(data){
        await Sl.testid(data.element.mail_provider_testid).click();
        await Sl.label(data.element.mail_provider_option_mailtrap_label).click();
        const port = await Sl.testid(data.element.mail_port_testid);
        await browser.waitUntil(async function () {
            return (await port.getValue()) === (data.value.mail_port);
        }, {timeout: helper.long_pause})
    }

    async setEmailCredential(data){
        await Sl.testid(data.element.mail_username_testid).setValue(data.value.mail_username);
        await Sl.testid(data.element.mail_password_testid).setValue(data.value.mail_password);
    }

    async clickDatabaseButton(data){
        await Sl.testid(data.element.db_connection_btn_testid).click();
    }

    async testMailConfiguration(data){
        await Sl.testid(data.element.test_mail_btn_testid).click();
        await Sl.testid(data.element.mail_username_dialog_testid).setValue(data.value.from_email);
        await Sl.testid(data.element.mail_username_send_btn_testid).click();
    }

    async assertMessage(data, assert){
        await this.clickDatabaseButton(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async assertSuccessMessage(data, assert){
        await Sl.testid(data.element.save_btn_testid).click();
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidDatabaseHost(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await Sl.testid(data.element.db_host_testid).setValue(data.value.invalid_db_host);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseHost(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await helper.VueClear(data.element.db_host_testid)
        await asserts.pause();
        await this.assertMessage(data, assert);
    }

    async blankDatabasePort(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await helper.VueClear(data.element.db_port_testid);
        await this.assertMessage(data, assert);
    }

    async invalidDatabasePort(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await helper.VueClear(data.element.db_port_testid);
        await Sl.testid(data.element.db_port_testid).setValue(data.value.invalid_db_port);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.db_username_testid).setValue(data.value.db_username);
        await helper.VueClear(data.element.db_name_testid);
        await asserts.pause()
        await this.assertMessage(data, assert);
    }

    async invalidDatabaseName(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.db_name_testid).setValue(data.value.invalid_db_name);
        await Sl.testid(data.element.db_username_testid).setValue(data.value.db_username);
        await this.assertMessage(data, assert);
    }

    async blankDatabaseUsername(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await helper.VueClear(data.element.db_username_testid);
        await this.assertMessage(data, assert);
    }

    async invalidDatabaseUsername(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.db_name_testid).setValue(data.value.db_name);
        await Sl.testid(data.element.db_username_testid).setValue(data.value.invalid_db_username);
        await this.assertMessage(data, assert);
    }

    async databaseButtonBlankTest(data, assert){
        await this.setEnv(data);
        await helper.VueClear(data.element.db_name_testid);
        await helper.VueClear(data.element.db_username_testid);
        await this.assertMessage(data, assert);
    }

    async databaseButtonValidTest(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async testMailButtonFunctionality(data){
        await Sl.testid(data.element.test_mail_btn_testid).click();
        await expect(Sl.testid(data.element.mail_username_dialog_testid)).toExist();
    }

    async mailUsernameCloseButton(data){
        await Sl.testid(data.element.test_mail_btn_testid).click();
        await Sl.testid(data.element.mail_username_close_btn_testid).click();
        await expect(Sl.testid(data.element.mail_username_dialog_testid)).not.toExist();
    }

    async envDropdownTest(data, assert){
        await this.setEnv(data);
        await expect(Sl.testid(data.element.env_testid)).toHaveTextContaining(assert);
    }

    async debugDropdownTest(data, assert){
        await Sl.testid(data.element.debug_testid).click();
        await Sl.label(data.element.debug_option_false_label).click();
        await expect(Sl.testid(data.element.debug_testid)).toHaveTextContaining(assert);
    }

    async timezoneDropdownTest(data, assert){
        await Sl.testid(data.element.timezone_testid).click();
        await Sl.label(data.element.timezone_option_paris_label).click();
        await expect(Sl.testid(data.element.timezone_testid)).toHaveTextContaining(assert);
    }

    async databaseTypeDropdownTest(data, assert){
        await Sl.testid(data.element.db_type_testid).click();
        await Sl.label(data.element.db_type_option_sqlite_label).click();
        await expect(Sl.testid(data.element.db_type_testid)).toHaveTextContaining(assert);
    }

    async mailProviderDropdownTest(data, assert){
        await Sl.testid(data.element.mail_provider_testid).click();
        await Sl.label(data.element.mail_provider_option_gmail_label).click();
        await expect(Sl.testid(data.element.mail_provider_testid)).toHaveTextContaining(assert);
    }

    async mailEncryptionDropdownText(data, assert){
        await Sl.testid(data.element.mail_encryption_testid).click();
        await Sl.label(data.element.mail_encryption_ssl_label).click();
        await expect(Sl.testid(data.element.mail_encryption_testid)).toHaveTextContaining(assert);
    }

    async customTextbox(data, assert){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_custom_label).click();
        await expect(Sl.testid(assert)).toExist();
    }

    async customeTextboxFunctionality(data, assert){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_custom_label).click();
        await Sl.testid(data.element.env_file_name_testid).setValue(data.value.env_file);
        await expect(Sl.testid(data.element.env_file_name_testid)).toHaveValueContaining(assert);
    }

    async mysqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.db_type_testid).click();
        await Sl.label(data.element.db_type_option_mysql_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async postgresqlDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.db_type_testid).click();
        await Sl.label(data.element.db_type_option_postgresql_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async sqliteDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.db_type_testid).click();
        await Sl.label(data.element.db_type_option_sqlite_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async sqlServerDatabaseTest(data, assert){
        await this.setEnv(data);
        await Sl.testid(data.element.db_type_testid).click();
        await Sl.label(data.element.db_type_option_sql_server_label).click();
        await this.setDatabaseValues(data);
        await this.assertMessage(data, assert);
    }

    async databasePasswordEyeIconFunctionality(data, assert){
        await Sl.testid(data.element.db_password_testid).setValue(data.value.db_password);
        await Sl.testid(data.element.db_password_eye_btn_testid).click();
        await expect(Sl.testid(data.element.db_password_testid)).toHaveAttribute(assert.attribute,assert.value);
    }

    async mailPasswordEyeIconFunctionality(data, assert){
        await Sl.testid(data.element.mail_password_testid).setValue(data.value.mail_password);
        await Sl.testid(data.element.mail_password_eye_btn_testid).click();
        await expect(Sl.testid(data.element.mail_password_testid)).toHaveAttribute(assert.attribute,assert.value);
    }

    async mailDriverPlaceholder(data, assert){
        await expect(Sl.testid(data.element.mail_driver_testid)).toHaveAttribute(assert);
    }

    async mailDriverTypeFunctionality(data, assert){
        await Sl.testid(data.element.mail_driver_testid).setValue(data.value.mail_driver);
        await expect(Sl.testid(data.element.mail_driver_testid)).toHaveValueContaining(assert);
    }

    async mailHostPlaceholder(data, assert){
        await expect(Sl.testid(data.element.mail_host_testid)).toHaveAttribute(assert);
    }

    async mailHostTypeFunctionality(data, assert){
        await Sl.testid(data.element.mail_host_testid).setValue(data.value.mail_host);
        await expect(Sl.testid(data.element.mail_host_testid)).toHaveValueContaining(assert);
    }

    async mailPortPlaceholder(data, assert){
        await expect(Sl.testid(data.element.mail_port_testid)).toHaveAttribute(assert);
    }

    async mailPortTypeFunctionality(data, assert){
        await Sl.testid(data.element.mail_port_testid).setValue(data.value.mail_port);
        await expect(Sl.testid(data.element.mail_port_testid)).toHaveValueContaining(assert);
    }

    async mailUsernamePlaceholder(data, assert){
        await expect(Sl.testid(data.element.mail_username_testid)).toHaveAttribute(assert);
    }

    async mailUsernameTypeFunctionality(data, assert){
        await Sl.testid(data.element.mail_username_testid).setValue(data.value.mail_username);
        await expect(Sl.testid(data.element.mail_username_testid)).toHaveValueContaining(assert);
    }

    async mailPasswordPlaceholder(data, assert){
        await expect(Sl.testid(data.element.mail_password_testid)).toHaveAttribute(assert);
    }

    async mailPasswordTypeFunctionality(data, assert){
        await Sl.testid(data.element.mail_password_testid).setValue(data.value.mail_password);
        await expect(Sl.testid(data.element.mail_password_testid)).toHaveValueContaining(assert);
    }

    async mailPasswordHidden(data, assert){
        await Sl.testid(data.element.mail_password_testid).setValue(data.value.mail_password);
        await expect(Sl.testid(data.element.mail_password_testid)).toHaveAttribute(assert.attribute, assert.value);
    }

    async fromNamePlaceholder(data, assert){
        await expect(Sl.testid(data.element.from_name_testid)).toHaveAttribute(assert);
    }

    async fromNameTypeFunctionality(data, assert){
        await Sl.testid(data.element.from_name_testid).setValue(data.value.from_name);
        await expect(Sl.testid(data.element.from_name_testid)).toHaveValueContaining(assert);
    }

    async fromEmailPlaceholder(data, assert){
        await expect(Sl.testid(data.element.from_email_testid)).toHaveAttribute(assert);
    }

    async fromEmailTypeFunctionality(data, assert){
        await Sl.testid(data.element.from_email_testid).setValue(data.value.from_email);
        await expect(Sl.testid(data.element.from_email_testid)).toHaveValueContaining(assert);
    }

    async blankSendMailButtonResponse(data, assert){
        await Sl.testid(data.element.test_mail_btn_testid).click();
        await Sl.testid(data.element.mail_username_send_btn_testid).click();
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankMailDriverTest(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await helper.VueClear(data.element.mail_driver_testid);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidMailDriver(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await Sl.testid(data.element.mail_driver_testid).setValue(data.value.invalid_mail_driver);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankMailHost(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await helper.VueClear(data.element.mail_host_testid);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidMailHost(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await Sl.testid(data.element.mail_host_testid).setValue(data.value.invalid_mail_host);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankMailPort(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await helper.VueClear(data.element.mail_port_testid);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidMailPort(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await Sl.testid(data.element.mail_port_testid).setValue(data.value.invalid_mail_port);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankMailUsername(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await helper.VueClear(data.element.mail_username_testid);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidMailUsername(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await Sl.testid(data.element.mail_username_testid).setValue(data.value.invalid_mail_username);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankMailPassword(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await helper.VueClear(data.element.mail_password_testid);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidMailPassword(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await Sl.testid(data.element.mail_password_testid).setValue(data.value.invalid_mail_password);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankFromName(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await this.setEmailValue(data);
        await helper.VueClear(data.element.from_name_testid);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankFromEmail(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await this.setEmailValue(data);
        await helper.VueClear(data.element.from_email_testid);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidFromEmail(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await this.setEmailValue(data);
        await Sl.testid(data.element.from_email_testid).setValue(data.value.invalid_from_email);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async invalidDialogMailUsername(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await this.setEmailValue(data);
        await Sl.testid(data.element.test_mail_btn_testid).click();
        await Sl.testid(data.element.mail_username_dialog_testid).setValue(data.value.invalid_mail_username);
        await Sl.testid(data.element.mail_username_send_btn_testid).click();
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async validSendMailButtonResponse(data, assert){
        await this.setMailProvider(data);
        await this.setEmailCredential(data);
        await this.setEmailValue(data);
        await this.testMailConfiguration(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert);
    }

    async blankDataResponse(data, assert){
        await this.clickDatabaseButton(data);
        await expect(Sl.class(data.element.validation_message_class)).toHaveTextContaining(assert.database_btn_assert);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await expect(Sl.testid(data.element.save_btn_testid)).toHaveAttribute(assert.save_btn_assert);
    }

    async blankAppNameResponse(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await helper.VueClear(data.element.app_name_testid);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await this.assertSuccessMessage(data, assert);
    }

    async validDataResponse(data, assert){
        await this.setEnv(data);
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async customOptionPageResponse(data, assert){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_custom_label).click();
        await Sl.testid(data.element.env_file_name_testid).setValue(data.value.env_file);
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async developOptionPageResponse(data, assert){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_develop_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async stagingOptionPageResponse(data, assert){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_staging_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async productionOptionPageResponse(data, assert){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_production_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }

    async wdiojsOptionPageResponse(data, assert){
        await Sl.testid(data.element.env_testid).click();
        await Sl.label(data.element.env_option_wdiojs_label).click();
        await this.setDatabaseValues(data);
        await this.clickDatabaseButton(data);
        await Sl.label(data.element.validation_message_close_btn_label).click();
        await this.setEmailValue(data);
        await this.assertSuccessMessage(data, assert);
    }
}

module.exports = new ConfigurationPage()
