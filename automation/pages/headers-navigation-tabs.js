import BasePage from "./page.js";

export default class HeadersNavigationTabs extends BasePage {

    // Override
    get pageLocator() {
        return ".i13rwx4e";
    }

    get TabsLocator() {
        return "[role='tab']";
    }

    async navigateToTab(tabName) {
        const tabs = await browser.waitForElement(this.pageLocator, "Container of tabs");
      
        const tabToClick = await tabs.waitForElement(`${this.TabsLocator}*=${tabName}`, "tab");

        await tabToClick.clickSafely(`Tab : ${tabName}`)

        // const tabToClick = await browser.waitForElement(this.pageLocator, "Container of tabs")
        //     .waitForElement(`${this.TabsLocator}*=${tabName}`, "tab")

        // await tabToClick.clickSafely(`Tab : ${tabName}`)

        // const tabToClick = await $(this.pageLocator).$(`${this.TabsLocator}*=${tabName}`)

        // await tabToClick.click() 
    }

}
