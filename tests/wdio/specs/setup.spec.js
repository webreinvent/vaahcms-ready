import SetupPage from '../pageobjects/setup.page.js'
import Setup from '../data/setup.js'
import VaahAsserts from "../vaah-webdriverio/Assert.js";

let Page = new SetupPage();
let Data = new Setup();
let assert = new VaahAsserts();
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
        await Page.open();
        await Page.installButtonAssert(Data);

    })

    params.test = Data.groups[0].tests[3];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[3];
        await Page.open();
        await Page.installButtonNavigation(Data, inputs.assert);

    })
})
