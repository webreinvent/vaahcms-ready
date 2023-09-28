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

})
