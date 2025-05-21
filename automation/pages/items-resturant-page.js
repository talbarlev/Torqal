import { waitForListToReachLength } from "../helper/utils.js";
import ItemBasePage from "./item-base-page.js";

export class ItemsResturantPage extends ItemBasePage {
    get itemsLocator() {
        return "button[data-test-id='horizontal-item-card-button']"
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