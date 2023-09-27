const Page = require('../pageobjects/Configuration.page')
const Data = require('../Data/Configuration')
const assert = require('../vaah-webdriverio/Assert')

let params = Data.params;
let inputs;

params.group = Data.groups[1];

describe(Page.groupId(params), () => {

    params.test = Data.groups[1].tests[0];

    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[0];
        await Page.open();
        await Page.formValidationForValidInput(Data, inputs.assert);
    })
})
