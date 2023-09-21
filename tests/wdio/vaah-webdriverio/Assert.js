const env = require('./../../../wdio.env');

class Assert{

    pause()
    {
        if(env.is_human)
        {
            browser.pause(env.is_human_pause*1000);
        }
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
