export const config = {
  runner: 'local',
  specs: ['./tests/order-sainty.js'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    acceptInsecureCerts: true,
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
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
  services: [], // <- הכי חשוב! לא להוסיף chromedriver ולא selenium
};
