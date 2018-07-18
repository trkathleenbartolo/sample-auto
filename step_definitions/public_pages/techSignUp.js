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

    Given(/^I am navigated to the TechDirect Initial Tech Sign Up page (.*)$/, (url) => {
        return client.assert.urlEquals(URL.getPublicPageUrl(url), 'Successfully navigated to Initial Tech Sign Up page.');
    });

    When(/^all fields on Initial Tech Sign Up form were completely filled-up with correct values (.*) (.*) (.*)$/, (email, firstname, lastname) => {
        let emailAddress = CONFIG.returnConfigData(email);
        return console.log(emailAddress);
        // return initialTechSignUpObjects.waitForElementVisible('@emailField', 3000, () => {
        //     initialTechSignUpObjects.setValue('@emailField', emailAddress);
        // })
    });

    When(/^I tick the I have read and agreed to the Terms and Conditions checkbox$/, () => {
        
    });

    When(/^I tick the I have read and agreed to the Platform and Agency Agreement checkbox$/, () => {
        
    });

    When(/^I click on Continue button$/, () => {
        
    });

    Then(/^initially signing up as Tech should proceed$/, () => {
        
    });

    Then(/^the following success message should be visible in the prompted popup:$/, (message) => {
        
    });

    Then(/^clicking on OK button would close the popup$/, () => {
        
    });

    Then(/^I should be navigated back to the Home page$/, () => {
        
    });

    Then(/^I should receive an email from TechDirect Support that contains a link for password creation$/, () => {
        
    });


    // Given(/^I am navigated to the TechDirect (.*) Sign Up page$/, (userType) => {
    //     const btn = NAV_UTIL.getBtnXpath(userType);

    //     client.click(btn.xpath);
    //     client.waitForElementVisible(btn.waitElement, 3000);
    //     return client.assert.urlEquals(CONFIG.APP_URL + btn.url);
    // });

    // //OLD STEP DEFINITIONS
    // When(/^all fields on Initial Tech Sign Up form were completely filled-up with correct values (.*) (.*) (.*)$/, (email, firstname, lastname) => {
    //     let initialTechSignUpPage = client.page.techSignUp();
    //     let initialTechSignUpForm = initialTechSignUpPage.section.initialForm;

    //     return initialTechSignUpPage.setValue("@emailField", email)
    //     .setValue("@firstNameField", firstname)
    //     .setValue("@lastNameField", lastname);
    // });

    // Then(/^signing up as Tech should proceed$/, () => {

    // });



    // Then(/^I tick the I have read and agreed to the Terms and Conditions checkbox$/, () => {
    //     let initialTechSignUpPage = client.page.techSignUp();
    //     let initialTechSignUpForm = initialTechSignUpPage.section.initialForm;

    //     return initialTechSignUpPage.click("@termsCheckbox");
    // });

    // Then(/^I click on the enabled Continue button$/, () => {
    //     let initialTechSignUpForm = client.page.techSignUp();

    //     initialTechSignUpForm.waitForElementVisible("@captcha", 5000)

    //     return initialTechSignUpForm.click("@continueBtn")
    //     .waitForElementVisible("@captchaValidation", 3000);

    // });

    // Then(/^the following success message should be visible in the prompted popup:$/, (docString, callback) => {
    //     callback(null, 'passed');
    // });

    // Then(/^clicking on OK button would close the popup$/, () => {

    // });

    // Then(/^I should be navigated back to the Home page$/, () => {

    // });

    // Then(/^I should receive an email from TechDirect Support that contains a link for password creation$/, () => {

    // });
});


