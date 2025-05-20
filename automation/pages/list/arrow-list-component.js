export default class ArrowListHorizontalComponent {
    get pageLoadElementLoactor() {
        return ".wg9azbo";
    }

    get listLocator() {
        return ".iciyw6p ";
    }

    get backArrowButton() {
        return browser.waitForElement("button[aria-label='Previous']", "back button")
    }

    get nextArrowButton() {
        return browser.waitForElement("button[aria-label='Next']", "next button")
    }


    async clickOnArrow(direction = "Next") {
        if (direction === "Next") {
            await this.nextArrowButton.clickSafely("next button");
        }
        else if (direction === "Previous") {
            await this.backArrowButton.clickSafely("back button");
        } else {
            throw new Error(`Invalid direction: ${direction}. Use "Next" or "Previous".`);
        }
    }
}

