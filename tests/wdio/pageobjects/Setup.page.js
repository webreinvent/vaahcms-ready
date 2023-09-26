const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert');

class SetupPage extends Page{
    constructor() {
        super();
        this.params.page.id = "SP";
        this.params.page.name = "Setup";
        this.params.page.path = "/backend#/setup";
        this.params.page.url = this.base_url+this.params.page.path;

    }

    async open()
    {
        await browser.pause(this.is_human_pause)
        await super.open(this.params.page.url);
    }

    async installButtonAssert(data, assert){
        await expect(Sl.$(data.element.install_button)).toHaveTextContaining(assert);
    }

    async clickButton(data){
        await expect(Sl.$(data.element.install_button).click());
    }

    async installButtonNavigation(data, assert){

        await this.clickButton(data);
        await browser.pause(this.is_human_pause);
        await asserts.pageUrl(assert);
    }
}

module.exports = new SetupPage()
