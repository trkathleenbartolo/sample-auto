module.exports = {
    elements: {
        headerUserName: {
            selector: ".//*[@id='app']//span[@class='user-name']",
            locateStrategy: 'xpath'
        },
        userDropdownCont: {
            selector: ".//*[@id='app']/nav//div[contains(@class,'navbar-dropdown')]",
            locateStrategy: 'xpath'
        },
        logoutLink: {
            selector: ".//*[@id='app']/nav//a[.='Log Out']",
            locateStrategy: 'xpath'
        }
    }

}