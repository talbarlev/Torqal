export default class BasePage {
    get className() {
        return this.constructor.name;
    }

    get pageLoadElementLoactor() {
        return "not implemented";
    }

    // TODO
    async waitForPageLoad(timeout = 3000) {
        const className = this.className;

        try {
           
        }
        catch (err) {
           
        }
    }
}