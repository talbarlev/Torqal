import { DISCVOERY_TABS_OPTION_ENGLISH } from "../data/constant-option.js";
import DiscoveryHomePage from "../pages/discovery-page.js";
import ResturantPage from "../pages/resturant-page.js";

describe('Orders [user not logged in]', function () {
    it(`Order [Resturant] -  One item from first resturant on page`, async function () {

        await DiscoveryHomePage.open()

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.HeadersNavigationTabs.navigateToTab(DISCVOERY_TABS_OPTION_ENGLISH.RESTURANTS);

        await ResturantPage.allProductsList.chooseElementFromListByIndex(4);

        // // Widget ? make selection 
        // ProductsCatalogPage.selectItem();

        // SelectOptionWidget.addOptions();

        // ProductCatalogPage.goToCart();


    });
});