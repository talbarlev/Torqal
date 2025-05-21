import BasePage from "../page.js";

export default class HeadersNavigationTabs extends BasePage {
    // Override
    get pageLocator() {
        return ".i13rwx4e";
    }

    get tabsLocator() {
        return "[role='tab']";
    }

    /**
   * Navigate to a specific tab by its visible name
   * @param {string} tabName - The visible name of the tab to click
   */
    async navigateToTab(tabName) {
        const tabsContainer = await browser.waitForElement(this.pageLocator, "Tabs container");

        const tabToClick = await tabsContainer.waitForElement(`${this.tabsLocator}*=${tabName}`, `Tab: ${tabName}`);

        await tabToClick.clickSafely(tabName);
    }
}
