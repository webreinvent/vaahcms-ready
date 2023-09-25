const Page = require('./../vaah-webdriverio/Page');



class Login extends Page {

    constructor() {
        super();
        this.params.page.id = "SP"; // Page ID, Please keep this unique for all the pages.
        this.params.page.name = "Setup";
        this.params.page.path = "/backend#/setup";
        this.params.page.url = this.base_url + this.params.page.path;
    }

    open (url=null) {
        if(url)
        {
            this.params.page.url = url
        }
        return super.open(this.params.page.url);
    }

}
module.exports = new Login();
