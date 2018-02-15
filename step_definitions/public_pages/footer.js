const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
    let footerObjects = client.page.footer();
    Then(/^Footer should always be visible at the bottom of the page$/, () => {
        return footerObjects.assert.visible('@footerCont');
    });


    Then(/^the following Footer elements should be displayed correctly:$/, (datatable) => {
        GLOBAL_CMD.areElementsOnDatatableVisible(datatable, footerObjects);
    });

    Then(/^clicking on the (.*) link on Footer should navigate me to the correct page (.*)$/, (footerLink, url) => {
        let elementXpath = footerObjects.getXpath(footerLink);
        let pageUrl = URL.getPublicPageUrl(url);

        // console.log(pageUrl);
        footerObjects.click(elementXpath);
        return client.pause(1000)
            .assert.urlEquals(pageUrl);
    });

});