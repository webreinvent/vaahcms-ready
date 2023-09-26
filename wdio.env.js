
module.exports = class Env {

    constructor() {
        this.params = {
            debug: true,
            is_human: false,
            is_human_pause: 3000,
            env: null,
            base_url: 'http://localhost/vaahcms-ready/public',
            version: null,
        };

    }

    //-------------------------------------------------
    getParams () {
        return this.params;
    }

}
