const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    const contactUsObjects = client.page.contactUs();
    //Scenario: Elements on Contact Us page should be displayed correctly
    Then(/^Contact Us page should be displayed correctly$/, () => {
        return client.assert.visible(XPATH.CONTACT_US_FORM);
    });

    Then(/^the following sections on Contact Us page should be visible:$/, (datatable) => {
        let table = datatable.rawTable;
        let dataSize = table.length;
        let dataItem, element;
        for (let i = 0; i < dataSize; i++) {
            dataItem = table[i][0];
            element = "@" + NAV_UTIL.camelize(dataItem);
            // console.log(element);
            contactUsObjects.assert.visible(element);
        }

    });

    Then(/^on Contact Information section, the following information should be indicated:$/, (datatable) => {
        let table = datatable.rawTable;
        let dataSize = table.length;
        let dataItem, element;
        for (let i = 0; i < dataSize; i++) {
            dataItem = table[i][0];
            element = "@" + NAV_UTIL.camelize(dataItem);
            // console.log(element);
            contactUsObjects.assert.visible(element);
        }
    });

    Then(/^on Follow Us section, the following elements should be visible:$/, (datatable) => {
        let table = datatable.rawTable;
        let dataSize = table.length;
        let dataItem, element;
        for (let i = 0; i < dataSize; i++) {
            dataItem = table[i][0];
            element = "@" + NAV_UTIL.camelize(dataItem);
            // console.log(element);
            contactUsObjects.assert.visible(element);
        }
    });

    //Scenario Outline: Sending of Contact Us form should proceed when all fields are filled up with correct values and passed the captcha validation
    When(/^all fields on Contact Us form were completely filled-up with correct values (.*) (.*) (.*) (.*)$/, (name, email, phone, msg) => {
        let contactUsPage = client.page.contactUs();
        let contactUsForm = contactUsPage.section.form;

        return contactUsForm.setValue("@nameField", name)
            .setValue("@emailField", email)
            .setValue("@phoneField", phone)
            .setValue("@msgTxtArea", msg);
    });

    Then(/^I passed the captcha validation$/, () => {

    });

    Then(/^I click on Submit button$/, () => {
        let contactUsPage = client.page.contactUs();
        // let contactUsForm = contactUsPage.section;

        contactUsPage.waitForElementVisible("@captcha", 3000);
        return contactUsPage
            .click("@submitBtn")
            .assert.visible("@captchaValidation");
    });

    Then(/^sending of form should proceed$/, () => {

    });

    Then(/^form should be sent by support@techdirect.com to this receiver: admin@techdirect.com$/, () => {

    });
});