import { DiscoveryHomePage } from "../pages/home-page.js";

describe('Orders [user not logged in]', function () {
    it(`Order [Resturant] -  One item from first resturant on page`, async function () {
        DiscoveryHomePage.open('')

        DiscoveryHomePage.waitForPageToLoad();

        DiscoveryHomePage.HeaderTabs.navigateToTab('Resturant');

        ResturantsPage.Allresturants.chooseResturant();

        // // Widget ? make selection 
        // ProductsCatalogPage.selectItem();

        // SelectOptionWidget.addOptions();

        // ProductCatalogPage.goToCart();


    });
});