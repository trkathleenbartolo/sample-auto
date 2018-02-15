const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../util/config');
const URL = require('../util/url');

module.exports = {
    areElementsOnDatatableVisible
}

function areElementsOnDatatableVisible(dataTable, objectList) {
    let table = dataTable.rawTable;
    let rowSize = table.length;
    let element;
    for (let i = 0; i < rowSize; i++) {
        element = objectList.getXpath(table[i][0]);
        objectList.assert.visible(element);
    }
}