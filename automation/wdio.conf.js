import customCommands from "./custom-commands.js";
import Logger from "./Logger.js";

export const config = {
    runner: 'local',
    specs: ['./tests/order-sainty.js'],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
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
        timeout: 120000
    },
    'wdio:options': {
        bidi: false,
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
