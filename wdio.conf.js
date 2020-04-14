const cloneCapabilities = require("./utils")

// process.env.NODE_DEBUG = "request";
const NUM_OF_INSTANCES = process.env.WDIO_CAP_MULTIPLIER || 5;
const baseCapability = {
    platformName: "Android",
    platformVersion: process.env.TESTOBJECT_PLATFORM_VERSION ? process.env.TESTOBJECT_PLATFORM_VERSION : '9',
    testobject_api_key: process.env.TESTOBJECT_API_KEY,
    appiumVersion: process.env.TESTOBJECT_APPIUM_VERSION ? process.env.TESTOBJECT_APPIUM_VERSION : '1.16.0',
    automationName:"uiautomator2",
    autoGrantPermissions: true,
    unicodeKeyboard: true,
    resetKeyboard: true
}

exports.config = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    
    
    specs: [
        './tests/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 20,
    capabilities: cloneCapabilities(baseCapability, NUM_OF_INSTANCES),
    logLevel: 'warn',
    // logLevels: {
        // webdriver: 'info',
        // 'wdio-applitools-service': 'info'
    // },
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    services: ['sauce'],
    framework: 'mocha',
    reporters: [
        'spec'

    ],
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 400000,
        compilers: ['ts:ts-node/register'], 
    },

    before: function (capabilities, specs) {
        require('ts-node').register({ files: true })
    },
}

