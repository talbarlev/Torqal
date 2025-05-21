import { waitForListToReachLength } from "../helper/utils.js";
import ItemBasePage from "./item-base-page.js";

export class ItemsStorePage extends ItemBasePage {
    get itemsLocator() {
        return "[data-test-id='ItemCard']"
    }

    get plusButtonLocator() {
        return "[data-test-id='ItemCardStepperIncrement'][role='button']"
    }

    // span also taking the one with discount
    get priceInItemLocator() {
        return "[data-test-id='ImageCentricProductCardPrice'] span";
    }

    // TODO: Handle potential popup that might block the click action
    async clickPlusButtonByIndex(index = 0) {
        await waitForListToReachLength(this.itemsLocator);

        const itemElements = await this.items;

        const item = await (itemElements[index])

        await item.scrollIntoView();

        const plusToClick = await item.waitForElement(this.plusButtonLocator);


        // TODO: Remove forceClick and properly handle any blocking popup
        await plusToClick.clickSafely("item", { forceClick: true, isWaitForClickable: false });
    }
}

export default new ItemsStorePage();