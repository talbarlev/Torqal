import HomePage from "./home-page.js";
import ArrowListHorizontalComponent from "../component/list/arrow-list-component.js";
import LazyLoadListComponent from "../component/list/lazy-load-list-component.js";

export default class ProductsBasePage extends HomePage {

    get pageTitle() {
        return browser.waitForElement("h1[data-test-id='DiscoveryPageTitle']", "Headline title")
    }

    get filterButton() {
        return browser.waitForElement("[data-test-id='sorting.button']", "filter button");
    }

    get arrowListProduct() {
        return new ArrowListHorizontalComponent();
    }

    get allProductsList() {
        return new LazyLoadListComponent();
    }

    async naviagteToFiltersWidget() {
        // TODO
    }
}