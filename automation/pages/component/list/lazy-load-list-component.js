import { waitForListToReachLength } from "../../../helper/web-commands.js";

export default class LazyLoadListComponent {
    get pageLoadElementLoactor() {
        return "";
    }

    get elementsLocator() {
        return "[data-test-id=VenueVerticalListGrid] > div ";
    }

    async getAllElementInList() {
        await this.waitForListToLoad();

        const elements = await browser.waitForElements(this.elementsLocator, "list of elements");

        return elements;
    }

    async waitForListToLoad(timeout = 3000) {
        await waitForListToReachLength(this.elementsLocator);
    }

    // TODO: Implement choosing element by name when relevant
    async chooseElementFromListByIndex(index = 1) {

        const products = await this.getAllElementInList();

        const product = products[index];

        await product.scrollIntoView();

        await product.clickSafely("item in list");

    }
}

