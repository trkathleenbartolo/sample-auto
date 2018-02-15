module.exports = {
    url: "/",
    commands: [
        {
            getXpath: (elementName) => {
                let elements = {
                    xpath: ''
                }
                switch (elementName) {
                    case ('Header'):
                    case ('Header container'):
                        elements.xpath = '@headerCont';
                        break;

                    case ('TechDirect logo'):
                        elements.xpath = '@techDirectLogo';
                        break;

                    case ('About Us link'):
                    case ('About Us'):
                        elements.xpath = '@aboutUsLink';
                        break;

                    case ('How It Works link'):
                    case ('How It Works'):
                        elements.xpath = '@howItWorksLink';
                        break;

                    case ('Contact Us link'):
                    case ('Contact Us'):
                        elements.xpath = '@contactUsLink';
                        break;

                    case ('Log In button'):
                    case ('Log In'):
                    case ('Login'):
                        elements.xpath = '@loginBtn';
                        break;
                }
                return elements.xpath;
            },

            // areElementsVisible: (dataTable) => {
            //     let table = dataTable.rawTable;
            //     let dataSize = table.length;
            //     let element;

            //     for (let i = 0; i < dataSize; i++) {
            //         element = this.getXpath(table[i][0]);
            //         // console.log(element);
            //         this.assert.visible(element);
            //     }
            // }
        }
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
        },
        loginBtn: {
            selector: ".//*[@id='app']//a[@name='login']",
            locateStrategy: 'xpath'
        },
    }
}