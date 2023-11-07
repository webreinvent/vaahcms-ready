
import chalk from 'chalk';
import color from 'cli-color'
import env from '../../../wdio.env.js'

chalk.enabled = true
chalk.level = 3

const envObj = new env();

const params = envObj.getParams();


/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {

    constructor() {
        this.base_url = params.base_url;
        this.is_human_pause = params.is_human_pause;
        this.small_pause = params.small_pause;
        this.medium_pause = params.medium_pause;
        this.long_pause = params.long_pause;
        this.params = {
            page: {
                id: null,
                name: null,
                path: null,
                url: null,
            },
            group: {
                count: null,
                name: null,
            },
            test: {
                count: null,
                name: null,
                data: null,
                expect: null,
            }
        };

    }

    //-------------------------------------------------
    open (url) {
        return browser.url(url);
    }
    //-------------------------------------------------
    bold(str)
    {
        return chalk.bold(str);
    }
    //-------------------------------------------------
    highlight(str)
    {
        return chalk.magenta(str);
    }
    //-------------------------------------------------
    pageId(params)
    {

        return this.bold(`
[PAGE ID: ${this.highlight(params.page.id)}] Page: `+params.page.name+` URL: `+params.page.url);
    }
    //-------------------------------------------------
    groupId(params)
    {
        let id = chalk.red(`
--------------------------------------------------------------------------------------------------------`);
        id += this.pageId(params);
        id += `
[GROUP ID: `+this.highlight(params.page.id+"_"+params.group.count)+"] "+params.group.name;

        return id;
    }
    //-------------------------------------------------
    testId(params)
    {
        let id = `[TEST ID: `+this.highlight(params.page.id+"_"+params.group.count+"_"+params.test.count)+"] "+params.test.name;
        if(params.test.expect)
        {
            id += `
    ${color.blue('Expect:')} ${params.test.expect}`;
        }


        return id;
    }
    //-------------------------------------------------
    //-------------------------------------------------
}
