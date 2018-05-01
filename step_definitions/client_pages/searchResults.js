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
    let setTabTable;

    //Scenario: Several elements on Tech Profile popover should be displayed on all tabs
    When(/^I entered multiple Skillsets on Skillset Search bar$/, () => {
        client.resizeWindow(2000, 1600);
    });

    When(/^further filtered the results thru Advanced options$/, () => {

    });

    When(/^I clicked on Search button$/, () => {

    });

    Given(/^I am navigated to the Client Search Results page (.*)$/, (url) => {
        client.url(URL.getClientPageUrl(url));
        return clientSearchResultsPageObjects.waitForElementVisible("@firstTechTile", 5000);
    });

    When(/^one or several Techs that match the set search criteria are listed$/, () => {
        return clientSearchResultsPageObjects.assert.visible("@firstTechTile", "Techs that match the given paramaters are listed.");
    });

    When(/^I click on the View Profile button under the chosen Tech$/, () => {
        return clientSearchResultsPageObjects.click("@viewProfileBtn")
            .waitForElementVisible("@techProfileCont", 5000)
            .assert.visible("@techProfileCont", "Tech Profile Container has prompted after clicking on View Profile button.");
    });

    When(/^I click on any of the following tabs:$/, (datatable) => {
        setTabTable = datatable;
    });

    Then(/^the following elements should always be displayed:$/, (datatable) => {
        let table = setTabTable.rawTable;
        let rowSize = table.length;
        let element;
        for (let i = 0; i < rowSize; i++) {
            element = clientSearchResultsPageObjects.getXpath(table[i][0]);
            clientSearchResultsPageObjects.click(element)
                .click('@pagination')
                .waitForElementVisible("@profileContRequestBtn" + i, 10000)
                .assert.visible("@profileContRequestBtn" + i, "Request button on " + table[i][0] + " tab is visible.")
                .assert.visible("@profileContRequestBtn" + i, "Tech's Full name on " + table[i][0] + " tab is visible.");
        }
        return true;
    });

    Then(/^clicking on the View Profile button again should close the Tech Profile popover$/, () => {
        return clientSearchResultsPageObjects.click("@viewProfileBtn")
            .waitForElementNotPresent("@techProfileCont", 5000)
            .assert.elementNotPresent("@techProfileCont", "Tech Profile Container has been closed after clicking on View Profile button.");
    });

    //Scenario: I should be able to get unfiltered search results when I emptied the Skillset search bar and make the Advanced options unfiltered
    When(/^I leave the Skillset Search bar blank$/, () => {
        return clientSearchPageObjects.assert.visible("@refineSkillsetField", "Skillset field on Refine Search section is available.")
        .clearValue("@refineSkillsetField");
    });

    When(/^I select Any as option on all the Advanced options dropdowns$/, () => {
        return clientSearchPageObjects.assert.visible("@refineIndustryExpField", "Industry Experience field on Refine Search section is available.")
        .assert.visible("@refineCitySuburbField", "City/Suburb field on Refine Search section is available.")
        .assert.visible("@refineStateDropdown", "State dropdown on Refine Search section is available.")
        .assert.visible("@refinePostcodeDropdown", "Postcode dropdown on Refine Search section is available.")
        .assert.visible("@refineEnglishProfDropdown", "English Proficiency dropdown on Refine Search section is available.")
        .assert.visible("@refineStartDate", "Start datepicker on Refine Search section is available.")
        .assert.visible("@refineEndDate", "End datepicker dropdown on Refine Search section is available.")
        .assert.visible("@refineMinRateDropdown", "Minimum Rate dropdown on Refine Search section is available.")
        .assert.visible("@refineMaxRateDropdown", "Maximum Rate dropdown on Refine Search section is available.")
        .assert.visible("@refineRemoteWork", "Remote Work checkbox on Refine Search section is available.");
    });

    When(/^I click on Refine Search button$/, () => {
        return clientSearchPageObjects.assert.visible("@refineSearchBtn", "Refine Search button on Refine Search section is available.")
        .click("@refineSearchBtn");
    });

    Then(/^unfiltered Tech items should be listed on Search Results page$/, () => {
        //This is a workaround since automation tools cannot extract options from the dropdowns found on Client Search. Url with correct parameters will be used.
        client.url(URL.getClientPageUrl("{td.client.unfiltered.search.results.path}"));
        return clientSearchResultsPageObjects.waitForElementVisible("@refineSearchBtn", 5000);
    });

    //Scenario: Clicking on the desired tech tile should navigate user to the Tech Profile page
    When(/^I click on the chosen Tech tile$/, () => {

    });

    Then(/^I should be navigated to the Tech Profile page {td.client.tech.profile.page.path}$/, () => {

    });

    Then(/^the following elements should be visible:$/, (datatable) => {

    });

    Then(/^information displayed on the following sections should be the the same as the details displayed on their respective Tech popovers$/, (datatable) => {

    });
});