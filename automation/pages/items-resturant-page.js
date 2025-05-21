import { waitForListToReachLength } from "../helper/utils.js";
import ItemBasePage from "./item-base-page.js";

// Make in BASE when needed
export class ItemsResturantPage extends ItemBasePage {
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

export default new ItemsResturantPage()