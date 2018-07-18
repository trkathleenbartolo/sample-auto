module.exports = {
    url: "/healthcheck",
    elements: {
        jsonStatus: {
            selector: "/html/body/pre",
            locateStrategy: 'xpath'
        }
    }
}