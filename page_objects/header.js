module.exports = {
    url: "/",
    commands: [
        checkElements
    ],
    elements: {
        headerCont: {
            selector: ".//*[@id='app']/nav",
            locateStrategy: 'xpath'
        },
        techDirectLogo: {
            selector: ".//*[@id='app']//img[@class='techD-logo']",
            locateStrategy: 'xpath'
        },
        aboutUsLink: {
            selector: "//*[@class='navbar-start']//*[@href='/about-us']",
            locateStrategy: 'xpath'
        },
        howItWorksLink: {
            selector: "//*[@class='navbar-start']//*[@href='/how-it-works']",
            locateStrategy: 'xpath'
        },
        contactUsLink: {
            selector: "//*[@class='navbar-start']//*[@href='/contact-us']",
            locateStrategy: 'xpath'
        }
    }
}

var checkElements = {
    isElementVisible: function(elementName) {
        let elements = {
            xpath
        }
        switch(elementName) {
            case('Header'):
            case('Header container'):
            xpath = '@headerCont';
            break;
        }
        return this.assert.visible(xpath);
    }
};