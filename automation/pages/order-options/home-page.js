import Headerbar from "../component/headerbar.js";
import HeadersNavigationTabs from "../component/headers-navigation-tabs.js";
import BasePage from "../page.js";

export default class HomePage extends BasePage {

    get Headerbar() {
        return new Headerbar();
    }

    get HeadersNavigationTabs() {
        return new HeadersNavigationTabs();
    }

    // TODO :
    // Add about, google play/app store buttons....(down page)
}