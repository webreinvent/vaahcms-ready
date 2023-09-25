const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/Setup.page')
const Data = require('../Data/Setup')

let params = Data.params;
let inputs;

params.group = Data.groups[0];

params.group.count = 1;
params.group.name = 'Setup';


describe(Page.groupId(params), async () => {

    params.test = Data.groups[0].tests[0];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        await Page.open(
            Data
        )
        await Page.pageHeading(
            Data,
            inputs.assert
        )
    })
})


