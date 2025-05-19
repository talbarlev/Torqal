import Headerbar from "./headerbar.js";
import HeadersNavigationTabs from "./headers-navigation-tabs.js";
import BasePage from "./page.js";

export default class HomePage extends BasePage {
    get Headerbar() {
        return new Headerbar();
    }

    get HeadersNavigationTabs() {
        return new HeadersNavigationTabs();
    }
}