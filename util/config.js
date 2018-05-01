const TEST_DATA = require('../test-data');

module.exports = {
  //Modules to get environment and user credentials
  getEnvironment,
  getUserTypeData,

  // APP_URL: this.getEnvironment().domain
  APP_URL: "http://dev.tech-direct.com"
};

function getEnvironment() {
  return JSON.parse(TEST_DATA.environment);
};

function getUserTypeData(userType) {
  return this.getEnvironment.userType;
};