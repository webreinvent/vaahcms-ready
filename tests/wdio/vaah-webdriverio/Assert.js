const env = require('./../../../wdio.env');

const envObj = new env();

const params = envObj.getParams();

class Assert{

    async pause()
    {
        if(params.is_human)
        {
            await browser.pause(params.is_human_pause);
        }
    }

    pageUrl(text)
    {
        return expect(browser).toHaveUrl(text);

    }

    pageTitle(text)
    {
        return expect(browser).toHaveTitleContaining(text);

    }

    text(selector, text)
    {
        return expect(selector).toHaveTextContaining(text);
    }


};

module.exports = new Assert()
