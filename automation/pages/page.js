export default class BasePage {
    get className() {
        return this.constructor.name;
    }

    get pageLocator() {
        throw Error("not implemented");
    }

    async waitForPageLoad(timeout = 3000) {
        const className = this.className;

        try {
            await browser.waitForElement(this.pageLocator, `In new Page ${this.className}`);
            // Logger.info(`******'${this.#className}' loaded****** (${await browser.getUrl()})`);
        }
        catch (err) {
            const message = `Element '${this.pageLocator}' in ${this.className} not found after ${timeout} ms. Error: ${err}`;
            // Logger.fail(message);
            throw new Error(message);
        }
    }
}