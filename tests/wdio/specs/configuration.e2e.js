const Page = require('../pageobjects/Configuration.page')
const Data = require('../Data/Configuration')
const assert = require('../vaah-webdriverio/Assert')

let params = Data.params;
let inputs;

params.group = Data.groups[0];

describe(Page.groupId(params), () => {

    params.test = Data.groups[0].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        await Page.open();
        await assert.pageUrl(inputs.assert);
    })

    params.test = Data.groups[0].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[1];
        await Page.open();
        await assert.pageTitle(inputs.assert);
    })

    params.test = Data.groups[0].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[2];
        await Page.open();
        await Page.assertTestDatabaseButton(Data, inputs.assert);
    })

    params.test = Data.groups[0].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[3];
        await Page.open();
        await Page.assertTestMailButton(Data, inputs.assert);
    })

    params.test = Data.groups[0].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[4];
        await Page.open();
        await Page.assertTestSaveButton(Data, inputs.assert);
    })

    params.group = Data.groups[1];
    params.test = Data.groups[1].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[0];
        await Page.open();
        await Page.invalidDatabaseHost(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[1];
        await Page.open();
        await Page.blankDatabaseHost(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[2];
        await Page.open();
        await Page.blankDatabasePort(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[3];
        await Page.open();
        await Page.invalidDatabasePort(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[4];
        await Page.open();
        await Page.blankDatabaseName(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[5];
        await Page.open();
        await Page.invalidDatabaseName(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[6];
        await Page.open();
        await Page.blankDatabaseUsername(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[7];
        await Page.open();
        await Page.invalidDatabaseUsername(Data, inputs.assert);
    })

    params.group = Data.groups[2];
    params.test = Data.groups[2].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[0];
        await Page.open();
        await Page.databaseButtonBlankTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[1];
        await Page.open();
        await Page.databaseButtonValidTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[2];
    it(Page.testId(params), async () => {
        await Page.open();
        await Page.testMailButtonFunctionality(Data);
    })

    params.test = Data.groups[2].tests[3];
    it(Page.testId(params), async () => {
        await Page.open();
        await Page.mailUsernameCloseButton(Data);
    })

    params.test = Data.groups[2].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[4];
        await Page.open();
        await Page.envDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[5];
        await Page.open();
        await Page.debugDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[6];
        await Page.open();
        await Page.timezoneDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[7];
        await Page.open();
        await Page.databaseTypeDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[8];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[8];
        await Page.open();
        await Page.mailProviderDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[9];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[9];
        await Page.open();
        await Page.mailEncryptionDropdownText(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[10];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[10];
        await Page.open();
        await Page.envFileNameTextbox(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[11];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[11];
        await Page.open();
        await Page.mysqlDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[12];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[12];
        await Page.open();
        await Page.postgresqlDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[13];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[13];
        await Page.open();
        await Page.sqliteDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[14];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[14];
        await Page.open();
        await Page.sqlServerDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[15];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[15];
        await Page.open();
        await Page.databasePasswordEyeIconFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[16];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[16];
        await Page.open();
        await Page.mailPasswordEyeIconFunctionality(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[0];
        await Page.open();
        await Page.validDataResponse(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[1];
        await Page.open();
        await Page.blankDataResponse(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[2];
        await Page.open();
        await Page.customOptionPageResponse(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[3];
        await Page.open();
        await Page.developOptionPageResponse(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[4];
        await Page.open();
        await Page.stagingOptionPageResponse(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[5];
        await Page.open();
        await Page.productionOptionPageResponse(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[6];
        await Page.open();
        await Page.wdiojsOptionPageResponse(Data, inputs.assert);
    })

    params.group = Data.groups[3];
    params.test = Data.groups[3].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[7];
        await Page.open();
        await Page.blankAppNameResponse(Data, inputs.assert);
    })

})
