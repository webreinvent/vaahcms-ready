const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/Setup.page')
const Data = require('../Data/Setup')
const assert = require('../vaah-webdriverio/Assert')

let params = Data.params;
let inputs;

params.group = Data.groups[0];

// params.group.count = 1;
// params.group.name = 'Setup';


describe(Page.groupId(params), () => {

    params.test = Data.groups[0].tests[0];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        await Page.open(
            Data.value.URL
        )
        await assert.pageUrl(inputs.assert)
    })

    params.test = Data.g
    it(Page.testId(params), async () => {


    })
})


