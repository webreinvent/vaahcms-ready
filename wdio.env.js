
module.exports = class Env {

    constructor() {
        this.params = {
            debug: true,
            is_human: false,
            is_human_pause: 2000,
            env: null,
            base_url: 'http://localhost/vaahcms-ready/public',
            version: null,
            capabilities: [{
                browserName: 'chrome'
            }]
        };

    }

    //-------------------------------------------------
    getParams () {
        if(this.params.is_human === false) {
            this.params.capabilities = [{
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: ['headless', 'disable-gpu']
                }
            }]
        }
        return this.params;
    }
}
