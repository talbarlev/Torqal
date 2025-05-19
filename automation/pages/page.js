export default class BasePage {
    get className() {
        return this.constructor.name;
    }

    get pageLoadElementLoactor() {
        return new Error("not implemented");
    }

    async waitForPageLoad(timeout = 3000) {
        const className = this.className;

        try {
            // await browser.waitForElement(.selector, `Page load element: ${this.pageLoadWaitElementProperties.selector} in ${className}`, this.pageLoadWaitElementProperties.shouldBeVisible, this.pageLoadWaitElementProperties.timeout);

            // logger.info(`${className} loaded (${browser.getUrl()})`);
        }
        catch (err) {
            // const message = `Element '${this.pageLoadWaitElementProperties.selector}' in ${className} not found after ${this.pageLoadWaitElementProperties.timeout == undefined ? browser.config.waitforTimeout : this.pageLoadWaitElementProperties.timeout} ms. Error: ${err}`;
            // logger.fail(message);
            // throw new Error(message);
        }
    }
}