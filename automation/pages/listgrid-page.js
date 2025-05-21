import { waitForListToReachLength } from "../helper/utils.js";
import HomePage from "./order-options/home-page.js";

// Make in BASE when needed
export class ListGridPage extends HomePage {
    get elementsLocator() {
        return "[data-test-id='VenueVerticalListGrid'] > div"
    }

    async chooseElementFromListByIndex(index = 0) {
        await waitForListToReachLength(this.elementsLocator);

        const elements = await browser.waitForElements(this.elementsLocator);

        await elements[index].clickSafely("store/resturant element")
    }
}

export default new ListGridPage()