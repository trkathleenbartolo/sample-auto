const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    const contactUsObjects = client.page.contactUs();
    const headerObjects = client.page.header();
    //Scenario: Elements on Contact Us page should be displayed correctly
    Given(/^I clicked on Contact Us link on Header$/, () => {
        return headerObjects.click("@contactUsLink");
    });

    Given(/^I am navigated to the TechDirect Contact Us page (.*)$/, (url) => {
        contactUsObjects.waitForElementVisible("@contactUsForm", 3000);
        return client.assert.urlEquals(URL.getPublicPageUrl(url))
    });

    Then(/^Contact Us page should be displayed correctly$/, () => {
        return contactUsObjects.assert.visible('@contactUsForm');
    });

    Then(/^the following sections on Contact Us page should be visible:$/, (datatable) => {
        GLOBAL_CMD.areElementsOnDatatableVisible(datatable, contactUsObjects);

    });

    Then(/^on Contact Information section, the following information should be indicated:$/, (datatable) => {
        GLOBAL_CMD.areElementsOnDatatableVisible(datatable, contactUsObjects);
    });

    Then(/^on Follow Us section, the following elements should be visible:$/, (datatable) => {
        GLOBAL_CMD.areElementsOnDatatableVisible(datatable, contactUsObjects);
    });

    //Scenario Outline: Sending of Contact Us form should proceed when all fields are filled up with correct values and passed the captcha validation
    When(/^all fields on Contact Us form were completely filled-up with correct values (.*) (.*) (.*) (.*)$/, (name, email, phone, msg) => {
        return contactUsObjects.setValue("@nameField", name)
            .setValue("@emailField", email)
            .setValue("@phoneField", phone)
            .setValue("@msgTxtArea", msg);
    });

    Then(/^I passed the captcha validation$/, () => {

    });

    Then(/^I click on Submit button$/, () => {
        contactUsObjects.waitForElementVisible("@captcha", 3000);
        return contactUsObjects
            .click("@submitBtn")
            .assert.visible("@captchaValidation");
    });

    Then(/^sending of form should proceed$/, () => {

    });

    Then(/^form should be sent by support@techdirect.com to this receiver: admin@techdirect.com$/, () => {

    });
});