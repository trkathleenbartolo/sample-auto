const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    let homeObjects = client.page.home();
    let initialTechSignUpObjects = client.page.techSignUp();

    // BACKGROUND
    Given(/^I am navigated to the TechDirect Home page$/, () => {
        return client.url(URL.DOMAIN);
    });

    Then(/^I clicked on Tech Sign Up button$/, () => {
        return homeObjects.waitForElementVisible('@techInfoSignUpBtn', 3000, () => {
            homeObjects.click('@techInfoSignUpBtn');
            homeObjects.waitForElementVisible('@captcha', 3000);
        })
    });

    // Scenario Outline: Signing up as Tech should proceed when all fields are filled up with correct values and passed the captcha validation
    Given(/^I am navigated to the TechDirect Initial Tech Sign Up page (.*)$/, (url) => {
        return client.assert.urlEquals(URL.getPublicPageUrl(url), 'Successfully navigated to Initial Tech Sign Up page.');
    });

    When(/^all fields on Initial Tech Sign Up form were completely filled-up with correct values (.*) (.*) (.*)$/, (email, firstname, lastname) => {
        let emailAddress = CONFIG.returnConfigData(email);
        // return console.log(emailAddress);
        return initialTechSignUpObjects.waitForElementVisible('@emailField', 3000, () => {
            initialTechSignUpObjects.setValue('@emailField', emailAddress)
                .setValue('@firstNameField', firstname)
                .setValue('@lastNameField', lastname);
        })
    });

    When(/^I tick the I have read and agreed to the Terms and Conditions checkbox$/, () => {
        return initialTechSignUpObjects.waitForElementVisible('@termsCheckbox', 3000, () => {
            initialTechSignUpObjects.click("@termsCheckbox")
                .expect.element('@termsValidation').to.be.selected;
        })

    });

    When(/^I tick the I have read and agreed to the Platform and Agency Agreement checkbox$/, () => {
        return initialTechSignUpObjects.waitForElementVisible('@pAgreementCheckbox', 3000, () => {
            initialTechSignUpObjects.click("@pAgreementCheckbox")
                .expect.element('@pAgreementValidation').to.be.selected;
            // client.pause(10000);
        })

    });

    When(/^I click on Continue button$/, () => {
        return initialTechSignUpObjects.waitForElementVisible('@continueBtn', 3000, () => {
            initialTechSignUpObjects.click('@continueBtn')
                .waitForElementVisible('@captchaValidation', 3000)
                .assert.visible('@captchaValidation', 'Captcha is blocking the Tech Sign Up process.');
        })
    });

    Then(/^initially signing up as Tech should proceed$/, () => {

    });

    Then(/^the following success message should be visible in the prompted popup:$/, (docString) => {

    });

    Then(/^clicking on OK button would close the popup$/, () => {

    });

    Then(/^I should be navigated back to the Home page$/, () => {

    });

    Then(/^I should receive an email from TechDirect Support that contains a link for password creation$/, () => {

    });
});


