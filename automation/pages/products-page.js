import HomePage from "./home-page.js";
import ArrowListHorizontalComponent from "./list/arrow-list-component.js";
import LazyLoadListComponent from "./list/lazy-load-list-component.js";

export default class ProductsBasePage extends HomePage {
    get TitleOfPage() {
        return $("h1[data-test-id='DiscoveryPageTitle']")
    }

    get filterButton() {
        return $("[data-test-id='sorting.button']");
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