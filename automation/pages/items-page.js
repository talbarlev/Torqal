import Headerbar from "./component/headerbar.js";
import BasePage from "./page.js";

// Make in BASE when needed
export  class ItemsPage extends BasePage {
   
   
    get Headerbar() {
        return new Headerbar();
    }

    get itemsLocator() {
        return "button[data-test-id='horizontal-item-card-button']"
    }

    // TODO : when relevant add sepration of the sections [Most ordered, starters] -> 
    // locator [$$("[data-test-id='MenuSection']")]
    get items() {
        return browser.waitForElements(this.itemsLocator, "items elements");
    }

    // TODO : popup message can block
    async clickOnPlusForItemByIndex(index = 2) {
        const itemElements = await this.items;

        await itemElements[index].clickSafely("item");
    }
}

export default new ItemsPage()