const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');
const CLIENT_SIGN_UP_OBJECTS = require('../../step_definitions/public_pages/clientSignUp')

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    let clientSignUpElements = client.page.clientSignUp();
    When(/^I fill up all the required fields with valid values (.*) (.*) (.*) (.*) (.*) (.*) (.*) (.*) (.*) (.*)$/, (company, abn, address, citysuburb, state, postcode, phone, mobile, contactname, email) => {
        let locator = {
            stateOptionXpath: clientSignUpElements.getSpecificXpath('@stateOptions', state),
            citySuburbOptionXpath: clientSignUpElements.getSpecificXpath('@citySuburbSuggestive', citysuburb),
            postcodeOptionXpath: clientSignUpElements.getSpecificXpath('@postcodeSuggestive', postcode)
        }

        clientSignUpElements.setValue("@companyNameField", company)
            .setValue("@abnField", abn)
            .setValue("@companyAddressField", address)
            .setValue("@citySuburbField", citysuburb);
        client.waitForElementVisible(locator.citySuburbOptionXpath, 3000)
            // .moveTo(locator.citySuburbOptionXpath)
            .click(locator.citySuburbOptionXpath);
        clientSignUpElements.click("@stateDropdown");
        client.waitForElementVisible(locator.stateOptionXpath, 3000)
            .click(locator.stateOptionXpath);
        clientSignUpElements.setValue("@postcodeField", postcode);
        client.waitForElementVisible(locator.postcodeOptionXpath, 3000)
            // .moveTo(locator.postcodeOptionXpath)
            .click(locator.postcodeOptionXpath);
        clientSignUpElements.setValue("@stateDropdown", state)
            .setValue("@companyPhoneField", phone)
            .setValue("@companyMobileField", mobile)
            .setValue("@contactNameField", contactname)
            .setValue("@emailAddressField", email);

    });

    Then(/^signing up as Client should proceed$/, () => {

    });

    Then(/^I clicked on Client Sign Up button$/, () => {

    });

    Then(/^I tick the I have read and agreed to the Terms and Conditions" checkbox$/, () => {
        clientSignUpElements.click("@termsCheckbox");
    });

    Then(/^I click on the Sign Up button$/, () => {
        return clientSignUpElements.click("@signUpBtn")
            .waitForElementVisible("@captchaValidation", 3000);
    });
});