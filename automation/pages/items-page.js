import { waitForListToReachLength } from "../helper/web-commands.js";
import Headerbar from "./component/headerbar.js";
import BasePage from "./page.js";

// Make in BASE when needed
export class ItemsPage extends BasePage {

    get headerbar() {
        return new Headerbar();
    }

    get itemsLocator() {
        return "button[data-test-id='horizontal-item-card-button']"
    }

    // TODO: When relevant, separate menu sections (e.g. 'Most ordered', 'Starters')
    // Example locator: $$("[data-test-id='MenuSection']")
    get items() {
        return browser.waitForElements(this.itemsLocator, "items elements");
    }

    // TODO: Handle potential popup that might block the click action
    async clickPlusButtonByIndex(index = 0) {

        await waitForListToReachLength(this.itemsLocator);

        const itemElements = await this.items;

        // TODO: Remove forceClick and properly handle any blocking popup
        await itemElements[index].clickSafely("item", { forceClick: true, isWaitForClickable: false });
    }
}

export default new ItemsPage()