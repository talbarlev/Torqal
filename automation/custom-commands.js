// @ts-nocheck
// import Logger from "../Logger.js";
const configTimeout = 10000;

class CustomCommand {
    addCoreCommands() {
        async function waitForElementBrowser(selector, description, { shouldBeVisible = true, timeout = configTimeout } = {}) {
            const element = await browser.$(selector);

            // Logger.info(`Searching for element : '${description}' `);

            await element.waitForExist({ timeout: configTimeout, reverse: false, timeoutMsg: `'${description}' not found after ${configTimeout} ms` });

            if (shouldBeVisible === true) {
                await element.waitForDisplayed({ timeout, reverse: false, timeoutMsg: `'${description}' not diplayed after ${timeout} ms` });
            }

            return element;
        }

        async function waitForElementsBrowser(selector, description, { shouldBeVisible = true, timeout = configTimeout } = {}) {

            const toTime = Date.now() + timeout;
            let elements = 0;

            while (elements == 0 && Date.now() < toTime) {
                await browser.pause(250);

                elements = await browser.$$(selector);
            }

            return elements;
        }

        async function waitToDisappearBrowser(selector, description, timeout = 5000, doTryFindElement = false) {
            const element = await $(selector);

            const exists = await element.isExisting();
            if (!exists) {
                if (doTryFindElement) {
                    throw new Error(`❌ '${description}' was not found on the page`);
                } else {
                    console.warn(`⚠️ '${description}' was not found — skipping wait`);
                    return;
                }
            }

            const wasVisible = await element.isDisplayed();

            await browser.waitUntil(async () => {
                const stillExists = await element.isExisting();
                const stillVisible = stillExists ? await element.isDisplayed() : false;

                return wasVisible ? !stillVisible : !stillExists;
            }, { timeout, interval: 100, timeoutMsg: `⏰ '${description}' did not disappear after ${timeout}ms`, }
            );

            console.info(`✅ '${description}' disappeared as expected`);
        }


        async function clickSafelyElement(elementDescription, { forceClick = false, shouldBeVisible = true, isWaitForClickable = true, timeout = configTimeout } = {}) {
            const element = this;

            await element.waitForExist({ timeout, reverse: false, timeoutMsg: `'${elementDescription}' not found after ${timeout} ms` });

            if (shouldBeVisible == true) {
                await element.waitForDisplayed({ timeout, reverse: false, timeoutMsg: `'${elementDescription}' not diplayed after ${timeout} ms` });
            }

            // Logger.info(`Clicking on '${elementDescription}' (locator: ${element.selector})`);

            if (isWaitForClickable) {
                await browser.waitUntil(() => element.isClickable(), { timeout, timeoutMsg: `${elementDescription} was not clickable after ${timeout} ms ` });
            }

            try {
                await element.click();

                // Remove
                return;
            }
            catch (err) {
                // Logger.warning(`Click on '${elementDescription}' (locator: ${element.selector}) failed: ${err}. Trying to scroll into view...`);
            }

            await element.moveTo();

            try {
                await element.click();
                // Logger.info(`Clicking on '${elementDescription}' (locator: ${element.selector})`);

                return;
            }
            catch (err) {
                // Logger.warning(`Clicking after scroll into view also failed: ${err}`);
            }

            // Logger.info(`Clicking on '${elementDescription}' (locator: ${element.selector})`);

            if (forceClick) {
                // Logger.info(`Regular click failed. Forcing click on ${element.selector}`);

                await browser.execute(
                    "arguments[0].click()", element
                );

            }
            else {
                // Logger.info(`clickSafely on '${elementDescription}'(${element.selector}) failed with parameters: isWaitForClickable= ${isWaitForClickable}, timeout= ${timeout}, forceClick= ${forceClick}`);

            }
        }

        async function waitForElementElement(selector, description, { shouldBeVisible = true, timeout = configTimeout } = {}) {
            const container = this;

            const element = await container.$(`${selector}`);

            // Logger.info(`Searching for element : '${description}' `);

            await element.waitForExist({ timeout, reverse: false, timeoutMsg: `'${description}' not found after ${timeout} ms` });

            if (shouldBeVisible == true) {
                await element.waitForDisplayed({ timeout, reverse: false, timeoutMsg: `'${description}' not diplayed after ${timeout} ms` });
            }

            return await element;
        }

        browser.addCommand("clickSafely", clickSafelyElement, true);

        // browser.addCommand("clickSafely", clickSafelyBrowser);

        browser.addCommand("waitToDisappear", waitToDisappearBrowser);

        browser.addCommand("waitForElements", waitForElementsBrowser);

        browser.addCommand("waitForElement", waitForElementElement, true);

        browser.addCommand("waitForElement", waitForElementBrowser);
    }
}

export default new CustomCommand;
