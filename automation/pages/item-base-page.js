import Headerbar from "./component/headerbar.js";
import BasePage from "./page.js";

export default class ItemBasePage extends BasePage {
    get headerbar() {
        return new Headerbar();
    }

    get itemsLocator() {
        return "";
    }

    get plusButtonLocator() {
        return "";
    }

    get priceInItemLocator() {
        return ""
    }

    // TODO: When relevant, separate menu sections (e.g. 'Most ordered', 'Starters')
    // Example locator: $$("[data-test-id='MenuSection']")
    get items() {
        return browser.waitForElements(this.itemsLocator, "items elements");
    }

    async getPriceOfItem(index) {
        const itemElements = await this.items;

        const item = await itemElements[index];

        const priceElement = await item.waitForElement(this.priceInItemLocator, "price");

        return await priceElement.getText();
    }

    async clickPlusButtonByIndex() { };


}