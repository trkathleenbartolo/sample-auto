const TEST_DATA = require('../test-data');

module.exports = {
  APP_URL: TEST_DATA.GET_ENVI().domain,

  TECH_REG_EMAIL: TEST_DATA.GET_ENVI().tech.regEmail,
  TECH_USERNAME: TEST_DATA.GET_ENVI().tech.email,
  TECH_PASSWORD: TEST_DATA.GET_ENVI().tech.password,

  CLIENT_REG_EMAIL: TEST_DATA.GET_ENVI().client.regEmail,
  CLIENT_USERNAME: TEST_DATA.GET_ENVI().client.email,
  CLIENT_PASSWORD: TEST_DATA.GET_ENVI().client.password,
  
  //MODULES AND FUNCTIONS
  returnConfigData
};

function returnConfigData(testDataName) {
  let objName;

  switch (testDataName) {
    case ('{td.tech.email.new}'):
    objName = this.TECH_REG_EMAIL;
    break;
  }
  return objName;
}