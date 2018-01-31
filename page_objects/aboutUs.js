module.exports = {
    url: "/about-us",
    elements: {
        headerCont: {
            selector: ".//*[@id='app']/nav",
            locateStrategy: 'xpath'
        },
        headerText: {
            selector: ".//*[@id='app']//h1",
            locateStrategy: 'xpath'
        },
        content: {
            selector: ".//*[@id='app']//div[@class='about-text-container']",
            locateStrategy: 'xpath'
        },
        footerCont: {
            selector: ".//*[@id='app']/footer",
            locateStrategy: 'xpath'
        }
    },
    commands: [
        {
            isElementVisible: function (elementName) {
                let elements = {
                    xpath: ''
                }
                switch (elementName) {
                    case ('Header'):
                    case ('Header container'):
                        elements.xpath = '@headerCont';
                        break;
        
                    case ('About Us headertext'):
                        elements.xpath = '@headerText';
                        break;
        
                    case ('Content'):
                        elements.xpath = '@content'
                        break;
        
                    case ('Footer'):
                    case ('Footer container'):
                        elements.xpath = '@footerCont';
                        break;
                }
                this.assert.visible(elements.xpath);
            }
        }
    ]
}

