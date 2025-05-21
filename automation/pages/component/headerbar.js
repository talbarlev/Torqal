import Logger from "../../Logger.js";
import BasePage from "../page.js";

export default class Headerbar extends BasePage {

    // Locator shared with other header components
    get pageLocator() {
        return "header.r7nbhzh"
    }

    // NOTE: These locators are fragile and should be improved if possible
    get amountShowItemButtonLocator() {
        return ".i1dyoq4e"
    }

    // NOTE: These locators are fragile and should be improved if possible
    get priceShowItemButtonLocator() {
        return ".t1ff47gi"
    }

    get showItemsButtonLocator() {
        return "button[data-test-id='cart-view-button']";
    }

    get loginButton() {

    }

    get signUp() {

    }

    get profile() {

    }

    get searchbar() {

    }


    async changeLocation() {

    }

    async search(text) {

    }

    /**
    * Retrieve price and amount text from the Show Items button in the header
    * Includes fallback logic if the button is not found inside the header
    */
    async getDataFromShowItems() {
        let showItem;

        try {
            const container = await browser.waitForElement(this.pageLocator, "header")
            showItem = await container.waitForElement(this.showItemsButtonLocator, "showItem");

        }

        catch (err) {
            Logger.warning(`"${err}", fallback to global show item button`)

            showItem = await browser.waitForElement(`[aria-live='assertive'] ${this.showItemsButtonLocator}`, "showItem");
        }

        const price = await (await showItem.waitForElement(this.priceShowItemButtonLocator, "price")).getText();

        const amount = await (await showItem.waitForElement(this.amountShowItemButtonLocator, "amount")).getText();

        return { price, amount }
    }

}
