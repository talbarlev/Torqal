import Logger from "../../Logger.js";
import BasePage from "../page.js";

class ItemOptionsModal extends BasePage {
    // Override 
    get pageLocator() {
        return "[data-test-id='product-modal']";
    }

    get modalContainer() {
        return browser.waitForElement(this.pageLocator);
    }

    get confirmOrderButton() {
        return browser.waitForElement(`${this.pageLocator} button[type='submit']`, "addToOrder / updateOrder");
    }

    get sectionsContainer() {
        return "[data-capture-id='section']";
    }

    get checkboxToTicLocator() {
        return "div.cbc_InputCheckbox_Root_7dc";
    }

    get radioButtonToTicLocator() {
        return "div.cbc_InputRadio_Root_7dc"
    }

    get priceLocator() {
        return ("[data-test-id='product-modal.total-price']")
    }
    /**
    * Tic checkboxes or radio buttons from a specific section
    * @param {number} indexOfSection - Index of the section to work on
    * @param {indexesToTic} options - Index of the checkbox/radio buttin to tic ->
    */

    async ticFromSectionByIndex(indexOfSection, { indexesToTic = [0] } = {}) {
        if (!Array.isArray(indexesToTic)) {
            indexesToTic = [indexesToTic];
        }

        const container = await browser.waitForElement(this.pageLocator, "container of the popup widget");
        const sections = await container.waitForElements(this.sectionsContainer, "sections");

        const section = sections[indexOfSection];

        await section.scrollIntoView();

        const allTicElements = await section.$$(`${this.checkboxToTicLocator}, ${this.radioButtonToTicLocator}`);

        for (const idx of indexesToTic) {

            const element = allTicElements[idx];

            if (element && await element.isClickable()) {
                await element.click();
            }
        }

    }

    async ticFromAllSections() {
        const container = await browser.waitForElement(this.pageLocator, "container of the popup widget");
        const sections = await container.waitForElements("[data-capture-id='section']", "sections");

        // const sections = await this.modalContainer.waitForElements(this.sectionsToTic, "sections");

        for (let index = 0; index < sections.length; index++) {
            await this.ticFromSectionByIndex(index);
        }

    }

    async getPrice() {
        const buttonElement = await this.confirmOrderButton;

        const priceText = (await buttonElement.waitForElement(this.priceLocator, "price in the button")).getText();

        return priceText;
    }

    // TODO: Add validation for alert messages
    async addToOrder(waitToDisappear = true) {
        const button = await this.confirmOrderButton;

        await button.clickSafely("add to order button");

        if (waitToDisappear) {

            await browser.waitToDisappear(this.pageLocator, "modal");
        }
    }

}


export default new ItemOptionsModal()