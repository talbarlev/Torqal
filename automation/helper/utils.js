
import Logger from "../Logger.js"; // עדכן את הנתיב לפי הצורך

/**
 * Waits for a list of elements to reach a minimum length.
 *
 * @param {string} locator - CSS selector or test ID to locate the elements.
 * @param {Object} [options={}] - Options object.
 * @param {string} [options.description="list"] - Description used in logs and error messages.
 * @param {number} [options.minLength=0] - Minimum number of elements expected.
 * @param {number} [options.timeout=3000] - Max time to wait in milliseconds.
 */
export async function waitForListToReachLength(locator, { description = "list", minLength = 1, timeout = 3000 } = {}) {
    await browser.waitUntil(async () => {
        const elements = await browser.waitForElements(locator);
        Logger.info(`length ${elements.length}, expected at least: ${minLength}`);
        return elements.length >= minLength;
    }, {
        timeout,
        timeoutMsg: `After ${timeout}ms, "${description}" did not reach minimum length of ${minLength}`
    });
}
