import Logger from "../../Logger.js";
import BasePage from "../page.js";

export default class Headerbar extends BasePage {

    // Exist in other header as well
    // @ts-ignore
    get pageLocator() {
        return "header.r7nbhzh"
    }

    // Bad locator
    get amoumtShowItemButtonLocator() {
        return ".i1dyoq4e"
    }

    // Bad locator
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

    get Profile() {

    }

    get searchbar() {

    }


    async changeLocation() {

    }

    async search() {

    }

    async getDataFromShowItems() {
        let showItem;

        try {
            // @ts-ignore
            const container = await browser.waitForElement(this.pageLocator, "header")
            showItem = await container.waitForElement(this.showItemsButtonLocator, "showItem");

        }
        catch (err) {
            Logger.warning(`"${err}", fallback to global show item button`)

            // @ts-ignore
            showItem = await browser.waitForElement(`[aria-live='assertive'] ${this.showItemsButtonLocator}`, "showItem");
        }

        const price = await (await showItem.waitForElement(this.priceShowItemButtonLocator, "price")).getText();

        const amount = await (await showItem.waitForElement(this.amoumtShowItemButtonLocator, "amount")).getText();

        return {
            price, amount
        }
    }

}
