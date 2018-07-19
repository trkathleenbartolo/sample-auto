const URL = require('../util/url');

module.exports = {
    url: URL.getTechPageUrl('Tech Dashboard'),
    commands: [
        {
            getXpath: function (elementName) {
                let elements = {
                    xpath: ''
                }
                switch(elementName) {
                    case ('Tech Header'):
                    elements.xpath = '@';
                    break;
                }
            }
        }
    ],
    elements: {
        techHeader: {
            selector: '//*[@id="app"]/nav',
            locateStrategy: 'xpath'
        },
        profileViewsCont: {
            selector: '//*[@id="app"]/section/div/div/div[1]/div/div[1]',
            locateStrategy: 'xpath'
        },
        calendarCont: {
            selector: '//*[@id="app"]/section/div/div/div[1]/div/div[2]',
            locateStrategy: 'xpath'
        },
        scheduleBox: {
            selector: '//*[@id="app"]/section/div/div/div[1]/div/div[3]',
            locateStrategy: 'xpath'
        },
        pendingRequestsCont: {
            selector: '//*[@id="app"]/section/div/div/div[2]/div[1]/div/div/div',
            locateStrategy: 'xpath'
        },
        currentEngagementsCont: {
            selector: '//*[@id="app"]/section/div/div/div[2]/div[2]/div/div/div',
            locateStrategy: 'xpath'
        }
    }
}