module.exports = {
    url: "/client",
    commands: [
        {}
    ],
    elements: {
        searchBox: {
            selector: ".//*[@id='app']//div[@class='box search-tech']",
            locateStrategy: 'xpath'
        }
    }
}