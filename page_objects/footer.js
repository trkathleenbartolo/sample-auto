module.exports = {
    commands: [
        {
            isElementVisible: function(elementName) {
                let elements = {
                    xpath
                }
                switch(elementName) {
                    case('Footer'):
                    case('Footer container'):
                    xpath = '@footerCont';
                    break;
                    
                    case('Copyright text'):
                    xpath = '@copyrightText'
                    break;

                    case('"Tech Direct" text'):
                    case("Release version text"):
                    xpath = '@versionText'
                    break;
                    
                    case('All Rights Reserved" text'):
                    xpath = ''
                    break;

                    case('Privacy Policy link'):
                    xpath = '@privacyPolicyLink'

                }
                return this.assert.visible(xpath);
            }
        }
    ],
    elements: {
        footerCont: {
            selector: ".//*[@id='app']/footer",
            locateStrategy: 'xpath'
        },
        copyrightText: {
            selector: ".//*[@id='app']//span[@class='copyright']",
            locateStrategy: 'xpath'
        },
        versionText: {
            selector: ".//*[@id='app']//span[contains(@class, version)]",
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