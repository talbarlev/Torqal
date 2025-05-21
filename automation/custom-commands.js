
import Logger from "../automation/Logger.js";

const configTimeout = 10000;

class CustomCommand {
    addCoreCommands() {
        async function waitForElementBrowser(selector, description, { shouldBeVisible = true, timeout = configTimeout } = {}) {
            const element = await browser.$(selector);

            Logger.info(`Searching for element : '${description}' `);

            await element.waitForExist({ timeout: configTimeout, reverse: false, timeoutMsg: `'${description}' not found after ${configTimeout} ms` });

            if (shouldBeVisible === true) {
                await element.waitForDisplayed({ timeout, reverse: false, timeoutMsg: `'${description}' not diplayed after ${timeout} ms` });
            }

            return element;
        }

        async function waitForElementsBrowser(selector, description, { shouldBeVisible = true, timeout = configTimeout } = {}) {
            Logger.info(`Searching for elements : '${description}' `);

            const toTime = Date.now() + timeout;
            let elements = 0;

            while (elements == 0 && Date.now() < toTime) {
                await browser.pause(250);

                elements = await browser.$$(selector);
            }

            return elements;
        }


        async function waitToDisappearBrowser(selector, description, timeout = 5000, doTryFindElement = false) {
            const startTime = Date.now();
            let wasVisible = false;

            Logger.info(`⏳ Waiting for '${description}' to disappear`);

            const existsInitially = await $(selector).then(async el => await el.isExisting());

            if (!existsInitially) {
                if (doTryFindElement) {
                    throw new Error(`❌ '${description}' was not found on the page`);
                } else {
                    Logger.warning(`⚠️ '${description}' was not found — skipping wait`);
                    return;
                }
            }

            // first check if it was visible at all
            // @ts-ignore
            wasVisible = await $(selector).then(async el => await el.isDisplayed().catch(() => false));

            await browser.waitUntil(async () => {
                const el = await $(selector);
                const exists = await el.isExisting();
                const visible = exists ? await el.isDisplayed().catch(() => false) : false;
                return wasVisible ? !visible : !exists;
            }, {
                timeout,
                interval: 100,
                timeoutMsg: `⏰ '${description}' did not disappear after ${timeout}ms`
            });

            Logger.info(`✅ '${description}' disappeared as expected`);
        }



        async function clickSafelyElement(elementDescription, { forceClick = false, shouldBeVisible = true, isWaitForClickable = true, timeout = configTimeout } = {}) {
            const element = this;

            await element.waitForExist({ timeout, reverse: false, timeoutMsg: `'${elementDescription}' not found after ${timeout} ms` });

            if (shouldBeVisible == true) {
                await element.waitForDisplayed({ timeout, reverse: false, timeoutMsg: `'${elementDescription}' not diplayed after ${timeout} ms` });
            }

            Logger.info(`Clicking on '${elementDescription}' (locator: ${element.selector})`);

            if (isWaitForClickable) {
                await browser.waitUntil(() => element.isClickable(), { timeout, timeoutMsg: `${elementDescription} was not clickable after ${timeout} ms ` });
            }

            try {
                await element.click();

                return;
            }
            catch (err) {
                Logger.warning(`Click on '${elementDescription}' (locator: ${element.selector}) failed: ${err}. Trying to scroll into view...`);
            }

            await element.moveTo();

            try {
                await element.click();
                Logger.info(`Clicking on '${elementDescription}' (locator: ${element.selector})`);

                return;
            }
            catch (err) {
                Logger.warning(`Clicking after 'moveTo' also failed: ${err}`);
            }

            Logger.info(`Clicking on '${elementDescription}' (locator: ${element.selector})`);

            if (forceClick) {
                Logger.info(`Regular click failed. Forcing click on ${element.selector}`);

                await browser.execute(
                    "arguments[0].click()", element
                );

            }
            else {
                Logger.info(`clickSafely on '${elementDescription}'(${element.selector}) failed with parameters: isWaitForClickable= ${isWaitForClickable}, timeout= ${timeout}, forceClick= ${forceClick}`);

            }
        }

        async function waitForElementElement(selector, description, { shouldBeVisible = true, timeout = configTimeout } = {}) {
            const container = this;

            const element = await container.$(`${selector}`);

            Logger.info(`Searching for element : '${description}' `);

            await element.waitForExist({ timeout, reverse: false, timeoutMsg: `'${description}' not found after ${timeout} ms` });

            if (shouldBeVisible == true) {
                await element.waitForDisplayed({ timeout, reverse: false, timeoutMsg: `'${description}' not diplayed after ${timeout} ms` });
            }

            return await element;
        }

        async function waitForElementsElement(selector, description, { shouldBeVisible = true, timeout = configTimeout } = {}) {
            const container = this;

            Logger.info(`🔍 Searching for elements '${description}' inside ${container.selector}`);

            const toTime = Date.now() + timeout;
            let elements = [];

            while (elements.length === 0 && Date.now() < toTime) {
                await browser.pause(250);
                elements = await container.$$(selector);
            }

            if (elements.length === 0) {
                throw new Error(`❌ '${description}' not found inside ${container.selector} after ${timeout}ms`);
            }

            if (shouldBeVisible) {
                const visibleElements = [];

                for (const el of elements) {
                    const isVisible = await el.isDisplayed();
                    if (isVisible) {
                        visibleElements.push(el);
                    }
                }

                if (visibleElements.length === 0) {
                    throw new Error(`❌ '${description}' elements inside ${container.selector} found, but none are visible after ${timeout}ms`);
                }
            }

            Logger.info(`✅ Found ${elements.length} '${description}' elements inside ${container.selector}`);

            return elements;
        }


        browser.addCommand("clickSafely", clickSafelyElement, true);

        browser.addCommand("waitToDisappear", waitToDisappearBrowser);

        browser.addCommand("waitForElements", waitForElementsBrowser);

        browser.addCommand("waitForElements", waitForElementsElement, true);

        browser.addCommand("waitForElement", waitForElementElement, true);

        browser.addCommand("waitForElement", waitForElementBrowser);
    }
}

export default new CustomCommand;
