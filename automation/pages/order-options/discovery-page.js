import HomePage from "./home-page.js";

class DiscoveryHomePage extends HomePage {

    // Override
    get pageLocator() {
        return "div[data-test-id='MainDiscoveryContent']";
    }

    async open() {
        await browser.url("https://wolt.com/en/discovery");
    }
}


export default new DiscoveryHomePage()