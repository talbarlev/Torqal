export default class ArrowListHorizontalComponent {
    get pageLoadElementLoactor() {
        return ".wg9azbo";
    }

    get listLocator() {
        return ".iciyw6p ";
    }

    get backArrowButton() {
        return $("button[aria-label='Previous']")
    }

    get nextArrowButton() {
        return $("button[aria-label='Next']")
    }


    async clickOnArrow(direction = "Next") {
        if (direction === "Next") {
            await this.nextArrowButton.click();
        }
        else if (direction === "Previous") {
            await this.backArrowButton.click();
        } else {
            throw new Error(`Invalid direction: ${direction}. Use "Next" or "Previous".`);
        }
    }
}

