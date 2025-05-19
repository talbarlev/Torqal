import BasePage from "./page.js";

export default class HeadersNavigationTabs extends BasePage {
    get pageLoadElementLoactor() {
        return ".i13rwx4e";
    }

    get TabsLocator() {
        return "[role='tab']";
    }

    async navigateToTab(tabName) {
        const tabToClick = await $(this.pageLoadElementLoactor).$(`${this.TabsLocator}*=${tabName}`)

        tabToClick.click() 
    }

}
