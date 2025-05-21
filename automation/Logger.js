
import path from 'path';


class Logger {

    _screenshotsFolderName = "screenshots"

    debug(message) {
        const time = new Date();
        const _message = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()} ${message}`;

        console.debug(_message);
    }

    info(message) {
        const time = new Date();
        const _message = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()} ${message}`;

        console.log(_message);
    }

    warning(message) {
        const time = new Date();
        const _message = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()} !Warning!: ${message}`;

        console.warn(_message)
    }

    fail(message) {
        const time = new Date();
        const _message = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()} !!!Failure!!!: ${message}`;

        console.error(_message)
    }

    async failWithScreenShot(message, test = undefined) {
        this.fail(message);

        await this.screenShot(test, message);
    }

    async screenShot(test = undefined, message) {
        const time = new Date();
        const timestamp = `${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}-${time.getMilliseconds()}`;

        const uniqueFileName = `${message}-${timestamp}.png`;

        const outputFile = path.join(process.cwd(), this._screenshotsFolderName, uniqueFileName);

        try {
            await browser.saveScreenshot(outputFile);
        } catch (e) {
            console.error("❌ Failed to save screenshot:", e.message);
        }
    }
}
export default new Logger();
