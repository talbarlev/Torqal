import { DISCVOERY_TABS_OPTION_ENGLISH } from "../data/constant-option.js";
import DiscoveryHomePage from "../pages/order-options/discovery-page.js";
import ResturantPage from "../pages/order-options/resturant-page.js";

describe('Orders [user not logged in]', function () {
    it(`Order [Resturant] -  One item from first resturant on page`, async function () {
        const amountOfItems = 1;
        let price;

        await DiscoveryHomePage.open()

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.HeadersNavigationTabs.navigateToTab(DISCVOERY_TABS_OPTION_ENGLISH.RESTURANTS);

        await ResturantPage.allProductsList.chooseElementFromListByIndex(4);

        // // Widget ? make selection 
        await ItemsPage.clickOnPlusForItemByIndex(1);

        await SelectionPopUp.tickChoices();

        price = await SelectionPopUp.getPrice();

        // wait to disapear
        await SelectionPopUp.addToOrder();

        const dataFromShowItems = await ItemsPage.getDataFromShowItems();
        
        expect(dataFromShowItems.price).equals(price)
        expect(dataFromShowItems.amount).equals(amountOfItems)



    });
});