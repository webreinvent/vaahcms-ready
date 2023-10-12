const Sl = require("../vaah-webdriverio/Selector");

class Helper{

    async VueClear(testid) {
        await Sl.testid(testid).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
}

module.exports = new Helper();
