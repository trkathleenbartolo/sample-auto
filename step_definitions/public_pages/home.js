const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const XPATH = require('../../util/xpath');
const CONFIG = require('../../util/config');
const URL = require('../../util/url');
const NAV_UTIL = require('../../util/navigationUtil');
const GLOBAL_CMD = require('../../util/globalCmd');

client.useXpath();

defineSupportCode(({ Given, Then, When }) => {
  homeObjects = client.page.home();
  Given(/^I accessed the TechDirect Home page using correct url (.*)$/, (url) => {
    return client.url(URL.DOMAIN);
  });

  Then(/^I should be navigated to the TechDirect Home page$/, () => {
    return client.assert.urlEquals(URL.DOMAIN + URL.PUBLIC_PAGES.HOME);
  });

  Then(/^the following elements on Home should be displayed correctly:$/, (datatable) => {
    return homeObjects.waitForElementVisible('@techInfoBox', 3000, false, () => {
      GLOBAL_CMD.areElementsOnDatatableVisible(datatable, homeObjects);
    })
  });

  Then(/^on Client Info box, the following elements are present:$/, (datatable) => {
    return homeObjects.waitForElementVisible('@clientInfoBox', 3000, false, () => {
      GLOBAL_CMD.areElementsOnDatatableVisible(datatable, homeObjects);
    })
  });

  Then(/^on Tech Info box, the following elements are present:$/, (datatable) => {
    return homeObjects.waitForElementVisible('@techInfoBox', 3000, false, () => {
      GLOBAL_CMD.areElementsOnDatatableVisible(datatable, homeObjects);
    })
  });

  Then(/^on As a Business divider, client-related icons and text are displayed correctly$/, () => {
    return homeObjects.waitForElementVisible('@asBusinessDiv', 3000, false, () => {
      homeObjects.assert.visible('@asBusinessDiv', 'As a Business divider is visible.');
    })
  });

  Then(/^Join Now for Free divider and Client Sign up button are present$/, () => {
    return homeObjects.waitForElementVisible('@joinBusinessDiv', 3000, false, () => {
      homeObjects.assert.visible('@joinBusinessDiv', 'Join Us for Business divider is visible.');
      homeObjects.assert.visible('@divClientSignUpBtn', 'Business Sign Up button is visible.');
    })
  });

  Then(/^on As a Consultant divider, tech-related icons and text are displayed correctly$/, () => {
    return homeObjects.waitForElementVisible('@asConsultantDiv', 3000, false, () => {
      homeObjects.assert.visible('@asConsultantDiv', 'As a Consultant divider is visible.');
    })
  });

  Then(/^Join Now for Free divider and Tech Sign up button are present$/, () => {
    return homeObjects.waitForElementVisible('@joinConsultantDiv', 3000, false, () => {
      homeObjects.assert.visible('@joinConsultantDiv', 'Join Us for Consultant divider is visible.');
      homeObjects.assert.visible('@divTechSignUpBtn', 'Consultant Sign Up button is visible.');
    })
  });

  Then(/^clicking on the following Sign Up buttons should navigate me to the correct page:$/, (datatable) => {
    return homeObjects.waitForElementVisible('@techInfoSignUpBtn', 3000, false, () => {
      GLOBAL_CMD.areSignUpBtnsOnHomeFunctional(datatable, homeObjects);
    })
  });
});