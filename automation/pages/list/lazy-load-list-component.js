export default class LazyLoadListComponent {
    get pageLoadElementLoactor() {
        return "";
    }

    get elementsLocator() {
        return "[data-test-id=VenueVerticalListGrid] > div ";
    }

    async getAllElementInList() {
        // add wait
        await this.waitForListToLoad();

        const elements = $$(this.elementsLocator);

        return elements;
    }

    async waitForListToLoad({ timeout = 3000 }) {
        await browser.waitUntil(async () => {
            const elements = await $$(this.elementsLocator);
            return await elements.length > 0
        }, { timeout, timeoutMsg: "" })
    }

    // TODO : Implement by name when relevant 

    async chooseElementFromListByIndex({ index = 1 }) {

        const products = await this.getAllElementInList();

        const product = products[index];

        await product.scrollIntoView();

        await product.click();

    }
}

