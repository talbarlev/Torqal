import BasePage from "pages/page.js";

class TicItemOptions extends BasePage {
    // Override
    get pageLocator() {
        return "div[data-test-id='product-modal']";
    }

 
}


export default new TicItemOptions()