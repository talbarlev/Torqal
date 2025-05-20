import HomePage from "./home-page.js";
import ArrowListHorizontalComponent from "./list/arrow-list-component.js";
import LazyLoadListComponent from "./list/lazy-load-list-component.js";

export default class ProductsBasePage extends HomePage {
    // Locator ?

    get TitleOfPage() {
        return browser.waitForElement("h1[data-test-id='DiscoveryPageTitle']", "Headline title")
    }

    get filterButton() {
        return browser.waitForElement("[data-test-id='sorting.button']", "filter button");
    }

    get arrowListOfProducts() {
        return new ArrowListHorizontalComponent();
    }

    get allProductsList() {
        return new LazyLoadListComponent();
    }

    async naviagteToFiltersWidget() {
        // To impelemnt
    }
}