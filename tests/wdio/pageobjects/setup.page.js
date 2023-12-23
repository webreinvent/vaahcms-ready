import Page from '../vaah-webdriverio/Page.js'
import Selector from '../vaah-webdriverio/Selector.js'
import VaahAsserts from "../vaah-webdriverio/Assert.js";

let asserts = new VaahAsserts();
let Sl = new Selector();

export default class SetupPage extends Page{
    constructor() {
        super();
        this.params.page.id = "SP";
        this.params.page.name = "Setup";
        this.params.page.path = "/backend#/setup";
        this.params.page.url = this.base_url+this.params.page.path;

    }

    async pause(is_human){
        if(is_human)
            await browser.pause(this.is_human_pause);
    }

    async open()
    {
        await this.pause(this.is_human);
        await browser.maximizeWindow();
        await super.open(this.params.page.url);
        await browser.refresh();
    }

    async installButtonAssert(data){
        await expect(Sl.testid(data.element.install_button_testid)).toExist();
    }

    async clickButton(data){
        await expect(Sl.testid(data.element.install_button_testid).click());
    }

    async installButtonNavigation(data, assert){

        await this.clickButton(data);
        await this.pause(this.is_human);
        await asserts.pageUrl(assert);
    }
}
