module.exports = {
    commands: [
        {
            getXpath: function (elementName) {
                let elements = {
                    xpath: ''
                }
                switch(elementName) {
                    case('Profile'): 
                    elements.xpath = '@profileTab';
                    break;

                    case('Work Experiences'):
                    elements.xpath = '@workExpTab';
                    break;

                    case('Ratings and Reviews'):
                    elements.xpath = '@ratingsTab';
                    break;

                    // case("Tech's First and Last Name"):
                    // elements.xpath = '@profileContTechName';
                    // break;

                    // case("Request button"):
                    // elements.xpath = '@profileContRequestBtn';
                    // break;
                }
                return elements.xpath;
            }
        }
    ],
    elements: {
        refineSearchBtn: {
            selector: "//*[@id='app']/section/div[2]/div[12]/button",
            locateStrategy: 'xpath'
        },
        firstTechTile: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li",
            locateStrategy: 'xpath'
        },
        firstTechFirstName: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li/div/div[2]/div/h1",
            locateStrategy: 'xpath'
        },
        viewProfileBtn: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li/div/footer/a[1]",
            locateStrategy: 'xpath'
        },
        viewAgreementsBtn: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li/div/footer/a[2]",
            locateStrategy: 'xpath'
        },
        newRequestBtn: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li/div/footer/a[3]",
            locateStrategy: 'xpath'
        },
        techProfileCont: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]",
            locateStrategy: 'xpath'
        },
        profileTab: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]/div/nav/ul/li[1]/a",
            locateStrategy: 'xpath'
        },
        workExpTab: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]/div/nav/ul/li[2]/a",
            locateStrategy: 'xpath'
        },
        ratingsTab: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]/div/nav/ul/li[3]/a",
            locateStrategy: 'xpath'
        },
        profileContTechName0: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]/div/section/div[1]/div/div[1]/div[1]/h1",
            locateStrategy: 'xpath'
        },
        profileContTechName1: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[3]/div/section/div[2]/div/div[1]/div[1]/h1",
            locateStrategy: 'xpath'
        },
        profileContTechName2: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[3]/div/section/div[3]/div/h1[1]",
            locateStrategy: 'xpath'
        },
        profileContRequestBtn0: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]/div/section/div[1]/div/div[2]/div[3]/button",
            locateStrategy: 'xpath'
        },
        profileContRequestBtn1: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]/div/section/div[2]/div/div[2]/button",
            locateStrategy: 'xpath'
        },
        profileContRequestBtn2: {
            selector: "//*[@id='app']/section/div[3]/div[2]/ul/li[2]/div/section/div[3]/div/div[2]/button[2]",
            locateStrategy: 'xpath'
        },
        pagination: {
            selector: "//*[@id='app']/section/div[4]/ul/li",
            locateStrategy: 'xpath'
        },
        // leftShevronBtn: {
        //     selector: "",
        //     locateStrategy: ''
        // },
        // rightShevronBtn: {
        //     selector: "",
        //     locateStrategy: ''
        // }
        refineSkillsetField: {
            selector: "//*[@id='app']/section/div[2]/div[1]/div/div/input",
            locateStrategy: 'xpath'
        },
        refineIndustryExpField: {
            selector: "//*[@id='app']/section/div[2]/div[2]/div/div/div/div/div/div",
            locateStrategy: 'xpath'
        },
        refineCitySuburbField: {
            selector: "//*[@id='app']/section/div[2]/div[3]/div/div/div[1]/input",
            locateStrategy: 'xpath'
        },
        refineStateDropdown: {
            selector: "//*[@id='app']/section/div[2]/div[4]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        refinePostcodeDropdown: {
            selector: "//*[@id='app']/section/div[2]/div[5]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        refineEnglishProfDropdown: {
            selector: "//*[@id='app']/section/div[2]/div[6]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        refineStartDate: {
            selector: "//*[@id='app']/section/div[2]/div[7]/div/div/div/div[1]/div/input",
            locateStrategy: 'xpath'
        },
        refineEndDate: {
            selector: "//*[@id='app']/section/div[2]/div[8]/div/div/div/div[1]/div/input",
            locateStrategy: 'xpath'
        },
        refineMinRateDropdown: {
            selector: "//*[@id='app']/section/div[2]/div[9]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        refineMaxRateDropdown: {
            selector: "//*[@id='app']/section/div[2]/div[10]/div/div/div/div/button",
            locateStrategy: 'xpath'
        },
        refineRemoteWork: {
            selector: "//*[@id='app']/section/div[2]/div[11]/div/label[2]/input",
            locateStrategy: 'xpath'
        },
        refineSearchBtn: {
            selector: "//*[@id='app']/section/div[2]/div[12]/button",
            locateStrategy: 'xpath'
        }
    }
}