const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../util/config');
const URL = require('../util/url');

module.exports = {
    areElementsOnDatatableVisible,
    arePublicPagesNavigable,
    areTechProfileTabsFunctional,
    searchFromSuggestiveSearch,
    areSignUpBtnsOnHomeFunctional
}

function areElementsOnDatatableVisible(dataTable, objectList) {
    let table = dataTable.rawTable;
    let rowSize = table.length;
    let element;
    for (let i = 0; i < rowSize; i++) {
        element = objectList.getXpath(table[i][0]);
        objectList.waitForElementVisible(element, 3000, false);
        objectList.assert.visible(element, element + " is visible and available.");
    }
};

function arePublicPagesNavigable(dataTable, objectList) {
    let table = dataTable.rawTable;
    let rowSize = table.length;
    let elementToClick, elementToWait, url, itemName;
    for (let i = 0; i < rowSize; i++) {
        itemName = table[i][0];
        url = URL.getPublicPageUrl(itemName);
        elementToClick = objectList.getXpathToNavigateToPublicPages(itemName).xpath;
        elementToWait = objectList.getXpathToNavigateToPublicPages(itemName).toWait;
        objectList.click(elementToClick).waitForElementVisible(elementToWait, 5000);
        client.assert.urlEquals(url, 'User is navigated to ' + itemName + '.');
        client.url(URL.DOMAIN);
    }
};

function areSignUpBtnsOnHomeFunctional(dataTable, objectList) {
    let table = dataTable.rawTable;
    let rowSize = table.length;
    let elementToClick, elementToWait, url, btnName;
    for (let i = 0; i < rowSize; i++) {
        btnName = table[i][0];
        urlName = table[i][1];
        url = URL.getPublicPageUrl(urlName);
        elementToClick = objectList.clickSignUpBtnsOnHome(btnName).xpath;
        elementToWait = objectList.clickSignUpBtnsOnHome(btnName).toWait;
        objectList.click(elementToClick).waitForElementVisible(elementToWait, 5000);
        client.assert.urlEquals(url, 'Clicking on ' + btnName + ' navigated me to the correct page.');
        client.url(URL.DOMAIN);
    }
};

function areTechProfileTabsFunctional(dataTable, commonElemDataTable, objectList) {
    let table = dataTable.rawTable;
    let rowSize = table.length;
    let element;
    for (let i = 0; i < rowSize; i++) {
        element = objectList.getXpath(table[i][0]);
        objectList.click(element)
            .waitForElementVisible("@profileContRequestBtn", 5000);

        this.areElementsOnDatatableVisible(commonElemDataTable, objectList);
    }
};

function searchFromSuggestiveSearch(objectList, fieldPath, keyword, suggestionPath) {
    objectList.setValue(fieldElem, skillset)
        .click(suggestElem);
    return true;
};