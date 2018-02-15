module.exports = {
    commands: [
        {
            getXpath: function(elementName) {
                let elements = {
                    xpath: ''
                }
                switch(elementName) {
                    case('Footer'):
                    case('Footer container'):
                    elements.xpath = '@footerCont';
                    break;
                    
                    case('Copyright text'):
                    case('"Tech Direct" text'):
                    case("Release version text"):
                    elements.xpath = '@versionText';
                    break;
                    
                    case('"All Rights Reserved" text'):
                    elements.xpath = '@allRightsText';
                    break;

                    case('Privacy Policy'):
                    case('Privacy Policy link'):
                    elements.xpath = '@privacyPolicyLink';
                    break;
                }
                return elements.xpath;
            }
        }
    ],
    elements: {
        footerCont: {
            selector: ".//*[@id='app']/footer",
            locateStrategy: 'xpath'
        },
        versionText: {
            selector: ".//*[@id='app']//span[@class='copyright']",
            locateStrategy: 'xpath'
        },
        allRightsText: {
            selector: ".//*[@id='app']//span[contains(@class,'version')]",
            locateStrategy: 'xpath'
        },
        privacyPolicyLink: {
            selector: ".//*[@id='app']//a[.='Privacy Policy']",
            locateStrategy: 'xpath'
        },
        socialMediaIcons: {
            selector: ".//*[@id='app']//span[@class='icon']",
            locateStrategy: 'xpath'
        }
    }
}