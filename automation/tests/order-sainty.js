import ItemsResturantPage from "../pages/items-resturant-page.js";
import DiscoveryHomePage from "../pages/order-options/discovery-page.js";
import ResturantPage from "../pages/order-options/resturant-page.js";
import ItemOptionModal from "../pages/modal/item-options-modal.js"
import StorePage from "../pages/order-options/store-page.js";
import ItemsStorePage from "../pages/items-store-page.js";
import ListGridPage from "../pages/listgrid-page.js";

import { expect } from 'chai';

import { DISCVOERY_TABS_OPTION_ENGLISH } from "../data/constant-option.js";

describe('Orders [user not logged in]', function () {
    it(`Order [Resturant] - ["all resturant"] One item from first resturant on page`, async function () {
        const amountOfItems = 1;
        let priceOfItem;

        await DiscoveryHomePage.open();

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.headersNavigationTabs.navigateToTab(DISCVOERY_TABS_OPTION_ENGLISH.RESTURANTS);

        await ResturantPage.allProductsList.chooseElementFromListByIndex(4);

        await ItemsResturantPage.clickPlusButtonByIndex(1);

        await ItemOptionModal.ticFromAllSections();

        priceOfItem = await ItemOptionModal.getPrice();

        await ItemOptionModal.addToOrder();

        const dataFromShowItems = await ItemsResturantPage.headerbar.getDataFromShowItems();

        expect(dataFromShowItems.amount == amountOfItems,
            `amount of item selected :"${amountOfItems}". amount in show items :"${dataFromShowItems.amount}"`).to.be.true;
        expect(dataFromShowItems.price == priceOfItem, `price of item selected :"${priceOfItem}". 
            price in show items :"${dataFromShowItems.price}"`).to.be.true
    });

    it(`Order [Store] - ["lets shop for"] One item from first store on page`, async function () {
        const amountOfItems = 1, itemIndex = 1;
        let priceOfItem;

        await DiscoveryHomePage.open();

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.headersNavigationTabs.navigateToTab(DISCVOERY_TABS_OPTION_ENGLISH.STORES);

        await StorePage.arrowListProduct.chooseElementFromListByIndex();

        await ListGridPage.chooseElementFromListByIndex();

        await ItemsStorePage.clickPlusButtonByIndex(itemIndex);

        priceOfItem = await ItemsStorePage.getPriceOfItem(itemIndex);

        const dataFromShowItems = await ItemsStorePage.headerbar.getDataFromShowItems();

        expect(dataFromShowItems.amount == amountOfItems,
            `amount of item selected :"${amountOfItems}". amount in show items :"${dataFromShowItems.amount}"`).to.be.true;
        expect(dataFromShowItems.price == priceOfItem, `price of item selected :"${priceOfItem}". 
            price in show items :"${dataFromShowItems.price}"`).to.be.true
    });


    it.skip(`Order [discovery]`, async function () {
        const amountOfItems = 1, resturantIndex = 1;
        let priceOfItem;

        await DiscoveryHomePage.open();

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.categoryList.chooseElementFromListByIndex(resturantIndex); // TODO

        await ResturantPage.allProductsList.chooseElementFromListByIndex(4);

        await ItemsResturantPage.clickPlusButtonByIndex(1);

        await ItemOptionModal.ticFromAllSections();

        priceOfItem = await ItemOptionModal.getPrice();

        await ItemOptionModal.addToOrder();

        const dataFromShowItems = await ItemsResturantPage.headerbar.getDataFromShowItems();

        expect() // TODO
    });

    it.skip(`Order [searchbar] `, async function () {
        const alwaysShown = "BBB";

        await DiscoveryHomePage.open();

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.headerbar.search(alwaysShown) // TODO

        // In Progress
    });

    it.skip(`Filtering `, async function () {
        const alwaysShown = "BBB";

        await DiscoveryHomePage.open();

        await DiscoveryHomePage.waitForPageLoad();

        await DiscoveryHomePage.headerbar.search(alwaysShown) // TODO

        // In Progress
    });
});
