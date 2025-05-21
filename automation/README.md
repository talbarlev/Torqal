# 🍽️ Wolt Discovery Automation Project

This project is an end-to-end automation suite for testing the Wolt Discovery page, built with [WebdriverIO v9](https://webdriver.io/) and the Mocha framework.

---

## 🛠️ Installation

Follow these steps to get the project running on your machine:

### 1. Clone the repository


### 2. Install dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

---

## ▶️ Running Tests

To execute all test suites, run:

```bash
npm test
```

This uses the WebdriverIO CLI and runs the tests defined in `wdio.conf.js`.

---

## 🧪 Tech Stack

- [Node.js](https://nodejs.org/)
- [WebdriverIO v9](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
## 📌 Notes

- Screenshots and logs will be saved to `/screenshots/` if configured.
- Default timeout for list load waits is `3000ms` – configurable in helper methods.

---

## 🧼 Git Ignore

These are already ignored:

```
node_modules/
screenshots/
```

## ✅ To Do

- [ ] Add test coverage for filters widget
- [ ] Improve locator reliability
- [ ] Handle modals/popups gracefully

---