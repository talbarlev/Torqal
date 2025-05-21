import ItemsPage from "../pages/items-page.js";
import DiscoveryHomePage from "../pages/order-options/discovery-page.js";
import ResturantPage from "../pages/order-options/resturant-page.js";
import ItemOptionModal from "../pages/modal/tic-options-item-modal.js"

import { expect } from 'chai';

import { DISCVOERY_TABS_OPTION_ENGLISH } from "../data/constant-option.js";
// TODO : waits ? for page to load ?

describe('Orders [user not logged in]', function () {
    it(`Order [Resturant] -  One item from first resturant on page`, async function () {
        const amountOfItems = 1;
        let priceOfItem;

        await DiscoveryHomePage.open()

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.HeadersNavigationTabs.navigateToTab(DISCVOERY_TABS_OPTION_ENGLISH.RESTURANTS);

        await ResturantPage.allProductsList.chooseElementFromListByIndex(4);

        await ItemsPage.clickPlusButtonByIndex(1);

        await ItemOptionModal.ticFromAllSections();

        priceOfItem = await ItemOptionModal.getPrice();

        // wait to disapear
        await ItemOptionModal.addToOrder();

        const dataFromShowItems = await ItemsPage.headerbar.getDataFromShowItems();

        expect(dataFromShowItems.amount == amountOfItems, "amount of item").to.be.true;
        expect(dataFromShowItems.price == priceOfItem, "price of item").to.be.true
    });
});