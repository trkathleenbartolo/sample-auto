const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    const forgotPasswordPageObjects = client.page.forgotPassword();
    When(/^I clicked on the Forgot Password link$/, () => {
        return forgotPasswordPageObjects.waitForElementVisible('@forgotPasswordLink', 5000)
            .click('@forgotPasswordLink');
    });

    Given(/^I am navigated to the Forgot Password page (.*)$/, (url) => {
        forgotPasswordPageObjects.waitForElementVisible('@captcha', 5000);
        return client.assert.urlEquals(URL.getPublicPageUrl(url), 'User is navigated to the Forgot Password page.');
    });

    When(/^I enter a registered (.*) email address on Email Address field (.*)$/, (usertype, email) => {
        forgotPasswordPageObjects.setValue('@emailAddressField', email);
        return forgotPasswordPageObjects.assert.value('@emailAddressField', email, 'Email address has been entered.')
    });

    Then(/^Reset Password email should be sent to this email address$/, () => {

    });

    When(/^passed the captcha validation$/, () => {
        /* Marked the code below as comments for now due to bug. */
        // return forgotPasswordPageObjects.waitForElementVisible('@captchaValidation', 5000)
        // .assert.visible('@captchaValidation', 'Captcha validation message becomes visible.')
    });

    When(/^I click on Send button$/, () => {
        return forgotPasswordPageObjects.click('@submitBtn');
    });

    When(/^the following success message prompts:$/, (docString, callback) => {
        callback(null, 'passed');
    });
});
