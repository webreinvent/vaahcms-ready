const Sl = require("../vaah-webdriverio/Selector");

class Helper{
    small_pause = 2000;
    medium_pause = 5000;
    long_pause = 10000;

    async VueClear(element) {
        await Sl.testid(element).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
}

module.exports = new Helper();
