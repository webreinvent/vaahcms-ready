const Page = require('./../Page');
const Sl = require('./../Selector');

class SetupPage extends Page{
    constructor() {
        super();
        this.params.page.id = "SP";
        this.params.page.name = "Setup";
        this.params.page.path = "/backend#/setup";
        this.params.page.url = this.base_url+this.params.page.path;

    }

    async getButton(data){
        await expect(sl.$())
    }

}
