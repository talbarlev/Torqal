import customCommands from "./custom-commands.js";

export const config = {
    runner: 'local',
    discovery: ['./tests/order-sainty.js'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    injectGlobals: true,
    services: [],

    async before() {
        customCommands.addCoreCommands();

        await browser.setWindowSize(1024, 768);

    },

    async beforeTest(test) {
        Logger.info(`--- Running test ${test.title}`);

    },

    async afterTest(test, error, result, duration, passed, retries) {
        if (result.passed === true)
            Logger.info("Test passed! 😀 😃 😄");

        else
            await Logger.failWithScreenShot("Test failed!!! 😕", test);
    }



};
