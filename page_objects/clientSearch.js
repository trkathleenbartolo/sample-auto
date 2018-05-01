module.exports = {
    url: "/client",
    commands: [
        {}
    ],
    elements: {
        searchBox: {
            selector: ".//*[@id='app']//div[@class='box search-tech']",
            locateStrategy: 'xpath'
        },
        searchField: {
            selector: "//*[@id='app']//input[@placeholder='Search for skillsets']",
            locateStrategy: 'xpath'
        },
        suggestedSkillset: {
            selector: "//*[@id='app']/section/div/div[1]/div/form/div/div/div/div/span",
            locateStrategy: 'xpath'
        },
        industryExpDropdown: {
            selector: "//*[@id='app']/section//div[@class='vue-treeselect__arrow-wrapper']",
            locateStrategy: 'xpath'
        },
        industryExpOptionsList: {
            selector: "//*[@id='app']/section//div[@class='vue-treeselect__menu']",
            locateStrategy: 'xpath'
        },
        industryExpOptions: {
            selector: ".//*[@id='app']/section/div/div[2]/div[1]/div/div/div/div/div[1]/div[2]//label",
            locateStrategy: 'xpath'
        },
        industryExpCheckboxes: {
            selector: ".//*[@id='app']/section/div/div[2]/div[1]/div/div/div/div/div[1]/div[2]//div/span/span",
            locateStrategy: 'xpath'
        },
        searchCitySuburb: {
            selector: "//*[@id='app']/section/div/div[2]/div[2]/div/div/div[1]/input",
            locateStrategy: 'xpath'
        },
        suggestedCitySuburb: {
            selector: "//*[@id='app']/section/div/div[2]/div[2]/div/div/div[2]/div/a",
            locateStrategy: 'xpath'
        },
        minRateDropdown: {
            selector: "//*[@id='app']/section/div/div[2]/div[3]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        minRateCont: {
            selector: "//*[@id='app']/section/div/div[2]/div[3]/div/div/div/div/div/ul",
            locateStrategy: 'xpath'
        },
        minRateOptions: {
            selector: "//*[@id='app']/section/div/div[2]/div[3]/div/div/div/div/div/ul/li",
            locateStrategy: 'xpath'
        },
        maxRateDropdown: {
            selector: "//*[@id='app']/section/div/div[2]/div[4]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        maxRateCont: {
            selector: "//*[@id='app']/section/div/div[2]/div[4]/div/div/div/div/div/ul",
            locateStrategy: 'xpath'
        },
        maxRateOptions: {
            selector: "//*[@id='app']/section/div/div[2]/div[4]/div/div/div/div/div/ul/li",
            locateStrategy: 'xpath'
        },
        remoteOnlyCheckbox: {
            selector: "//*[@id='app']/section/div/div[3]/div/div[1]/label/input",
            locateStrategy: 'xpath'
        },
        advancedOptions: {
            selector: "//*[@id='app']/section/div/div[3]/div/div[2]/a",
            locateStrategy: 'xpath'
        },
        stateDropdown: {
            selector: "//*[@id='app']/section/div/div[4]/div[1]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        stateCont: {
            selector: "//*[@id='app']/section/div/div[4]/div[1]/div/div/div/div/div/ul",
            locateStrategy: 'xpath'
        },
        stateOptions: {
            selector: "//*[@id='app']/section/div/div[4]/div[1]/div/div/div/div/div/ul/li",
            locateStrategy: 'xpath'
        },
        postcodeDropdown: {
            selector: "//*[@id='app']/section/div/div[4]/div[2]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        postcodeCont: {
            selector: "//*[@id='app']/section/div/div[4]/div[2]/div/div/div/div/div/ul",
            locateStrategy: 'xpath'
        },
        postcodeOptions: {
            selector: "//*[@id='app']/section/div/div[4]/div[2]/div/div/div/div/div/ul/li",
            locateStrategy: 'xpath'
        },
        startDateDropdown: {
            selector: "//*[@id='app']/section/div/div[4]/div[3]/div/div/div/div[1]/div/input",
            locateStrategy: 'xpath'
        },
        endDateDropdown: {
            selector: "//*[@id='app']/section/div/div[4]/div[4]/div/div/div/div[1]/div/input",
            locateStrategy: 'xpath'
        },
        englishProfDropdown: {
            selector: "//*[@id='app']/section/div/div[4]/div[5]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        englishProfCont: {
            selector: "//*[@id='app']/section/div/div[4]/div[5]/div/div/div/div/div/ul",
            locateStrategy: 'xpath'
        },
        englishProfOptions: {
            selector: "//*[@id='app']/section/div/div[4]/div[5]/div/div/div/div/div/ul/li",
            locateStrategy: 'xpath'
        },
        searchBtn: {
            selector: "//*[@id='app']/section/div/div[1]/div/form/button",
            locateStrategy: 'xpath'
        }
    }
}