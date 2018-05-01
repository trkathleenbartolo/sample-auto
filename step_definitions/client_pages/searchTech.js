const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const GLOBAL_CMD = require('../../util/globalCmd');
const TEST_DATA = require('../../test-data');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    let loginPageObjects = client.page.login();
    let clientSearchPageObjects = client.page.clientSearch();
    let clientSearchResultsPageObjects = client.page.clientSearchResults();

    Given(/^I am navigated to the Tech Direct Login page (.*)$/, (url) => {
        return client.url(URL.getPublicPageUrl(url));
    });
    Given(/^I am successfully logged in as Client (.*) (.*)$/, (email, pass) => {
        return loginPageObjects.waitForElementVisible("@emailAddressField", 3000)
            .setValue("@emailAddressField", email)
            .setValue("@passwordField", pass)
            .click("@formLoginBtn");
    });

    Given(/^I am navigated to the Client Search page (.*)$/, (url) => {
        clientSearchPageObjects.waitForElementVisible("@searchField", 15000);
        return client.assert.urlEquals(URL.getClientPageUrl(url), "User is navigated to the Client Search page.");
    });

    When(/^I enter multiple Skillsets on Skillset Search bar (.*), (.*), (.*)$/, (skill1, skill2, skill3) => {
        clientSearchPageObjects.setValue("@searchField", skill1)
        .waitForElementVisible("@suggestedSkillset", 5000)
        .click("@suggestedSkillset");

        clientSearchPageObjects.setValue("@searchField", skill2)
        .waitForElementVisible("@suggestedSkillset", 5000)
        .click("@suggestedSkillset");

        return clientSearchPageObjects.setValue("@searchField", skill3)
        .waitForElementVisible("@suggestedSkillset", 5000)
        .click("@suggestedSkillset");
    });

    When(/^select one or multiple options other than Any option on Industry Experience dropdown (.*), (.*), (.*)$/, (indexp1, indexp2, indexp3) => {
       return clientSearchPageObjects.click("@industryExpDropdown")
        .waitForElementVisible("@industryExpOptionsList", 5000)
        .assert.visible("@industryExpOptionsList", "Industry Experience dropdown is prompted.");
        // return client.elements('xpath', ".//*[@id='app']/section/div/div[2]/div[1]/div/div/div/div/div[1]/div[2]//label", function (elements){
        //     let listofelements = elements.value;
        //     console.log(listofelements);
        // });
    });

    When(/^I click on Advanced options link$/, () => {
        return clientSearchPageObjects.click("@advancedOptions")
        .waitForElementVisible("@englishProfDropdown", 5000)
        .assert.visible("@stateDropdown", "State dropdown is visible.")
        .assert.visible("@postcodeDropdown", "Postcode dropdown is visible.")
        .assert.visible("@startDateDropdown", "Start Date dropdown is visible.")
        .assert.visible("@endDateDropdown", "End Date dropdown is visible.")
        .assert.visible("@englishProfDropdown", "English Proficiency dropdown is visible.");
    });

    When(/^I select desired option from each of the dropdown (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)$/, (citysuburb, state, postcode, startdate, enddate, level, minrate, maxrate) => {
        //Checking if City/Suburb suggestive search is functional.
        return clientSearchPageObjects.setValue("@searchCitySuburb", citysuburb)
        .waitForElementVisible("@suggestedCitySuburb", 5000)
        .assert.visible("@suggestedCitySuburb", "City/Suburb suggestions are being provided.")
        .click("@suggestedCitySuburb")
        //Checking if Min. Rate dropdown is functional.
        .click("@minRateDropdown")
        .waitForElementVisible("@minRateCont", 5000)
        .assert.visible("@minRateCont", "Min. Rate dropdown is clicked and its options container is visible.")
        //Checking if Max. Rate dropdown is functional.
        .click("@maxRateDropdown")
        .waitForElementVisible("@maxRateCont", 5000)
        .assert.visible("@maxRateCont", "Max. Rate dropdown is clicked and its options container is visible.")
        //Checking if Remote Only checkbox is available.
        .assert.visible("@remoteOnlyCheckbox", "Remote Only checkbox is available.")
        //Checking if State dropdown is functional.
        .click("@stateDropdown")
        .waitForElementVisible("@stateCont", 5000)
        .assert.visible("@stateCont", "State dropdown is clicked and its options container is visible.")
        //Checking if Postcode dropdown is functional.
        .click("@postcodeDropdown")
        .waitForElementVisible("@postcodeCont", 5000)
        .assert.visible("@postcodeCont", "Postcode dropdown is clicked and its options container is visible.")
        //To skip Start and End date dropdowns, not yet functional
        //Checking if English Proficiency dropdown is functional.
        .click("@englishProfDropdown")
        .waitForElementVisible("@englishProfCont", 5000)
        .assert.visible("@englishProfCont", "English Proficiency dropdown is clicked and its options container is visible.");

    });

    When(/^I click on Search button$/, () => {
        clientSearchPageObjects.assert.visible("@searchBtn", "Search button is available.")
        .click("@searchBtn");
        return clientSearchResultsPageObjects.waitForElementVisible("@refineSearchBtn", 5000);
    });

    Then(/^Techs that matches the filtered parameters should be listed on Search Results page (.*)$/, (techFirstName) => {
        //This is a workaround since automation tools cannot extract options from the dropdowns found on Client Search. Url with correct parameters will be used.
        client.url(URL.getClientPageUrl("{td.client.search.results.path}"));
        return clientSearchResultsPageObjects.waitForElementVisible("@refineSearchBtn", 5000)
        .assert.visible("@firstTechTile", "Techs that match the given paramaters are listed.")
        .assert.containsText("@firstTechFirstName", techFirstName, "Tech with the closest match to the given paramaters is listed.");
    });
    
});