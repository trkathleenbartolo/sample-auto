module.exports = {
    elements: {
        techHeaderLink: {
            selector: ".//*[@id='app']//a[@name='tech']",
            locateStrategy: 'xpath'
        },
        requestsHeaderLink: {
            selector: ".//*[@id='app']//a[@name='request']",
            locateStrategy: 'xpath'
        },
        agreementsHeaderLink: {
            selector: ".//*[@id='app']//a[@name='agreements']",
            locateStrategy: 'xpath'
        }
    }
}