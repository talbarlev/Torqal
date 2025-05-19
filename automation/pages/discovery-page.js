import HomePage from "./home-page.js";

  class DiscoveryHomePage extends HomePage {
    async open() {
       await browser.url("https://wolt.com/en/discovery");
    }
}


export default  new DiscoveryHomePage()