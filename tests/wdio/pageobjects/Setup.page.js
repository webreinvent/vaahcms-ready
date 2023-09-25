const Page = require('./../Page');
const Sl = require('./../Selector');
const assert = require('../vaah-webdriverio/Assert')

class SetupPage extends Page{
    constructor() {
        super();
        this.params.page.id = "SP";
        this.params.page.name = "Setup";
        this.params.page.path = "/backend#/setup";
        this.params.page.url = this.base_url+this.params.page.path;

    }

    async getButton(data){
        await expect(Sl.$(data.element.install_button).toExist());
    }

    async clickButton(data){
        await expect(Sl.$(data.element.install_button).click());
    }
    async buttonNavigation(data){
        await this.clickButton(data);
        await assert.pageTitle(data.value.Title);
    }
}

module.exports = new SetupPage()
