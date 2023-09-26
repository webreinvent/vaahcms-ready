const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert')

class SetupPage extends Page{
    constructor() {
        super();
        this.params.page.id = "SP";
        this.params.page.name = "Setup";
        this.params.page.path = "/backend#/setup";
        this.params.page.url = this.base_url+this.params.page.path;

    }

    async open(data)
    {
        await browser.pause(1200)
        await super.open(this.params.page.url);
    }

    async buttonIsExist(data, assert){
        await expect(Sl.$(data.element.install_button)).toHaveTextContaining(assert);
    }

    async clickButton(data){
        await expect(Sl.$(data.element.install_button).click());
    }

    async buttonNavigation(data, assert){
        await this.clickButton(data);
        await browser.pause(3000)
        await asserts.pageUrl(assert);
    }
}

module.exports = new SetupPage()
