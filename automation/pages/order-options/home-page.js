import Headerbar from "../component/headerbar.js";
import HeadersNavigationTabs from "../component/headers-navigation-tabs.js";
import BasePage from "../page.js";

export default class HomePage extends BasePage {

    get headerbar() {
        return new Headerbar();
    }

    get headersNavigationTabs() {
        return new HeadersNavigationTabs();
    }

    // TODO:
    // Add buttons for About, Google Play, and App Store in the page footer
}