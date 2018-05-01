module.exports = {
    elements: {
        techHeader: {
            selector: "//*[@id='app']/nav",
            locateStrategy: 'xpath'
        },
        profileImg: {
            selector: "//*[@id='app']/section/div/div[2]/div/aside/div/div/figure/img",
            locateStrategy: 'xpath'
        },
        techInfoCont: {
            selector: "//*[@id='app']/section/div/div[2]/div/div/div[1]",
            locateStrategy: 'xpath'
        },
        overviewCont: {
            selector: "//*[@id='app']/section/div/div[2]/div/div/div[3]/div[1]",
            locateStrategy: 'xpath'
        },
        workHistoryCont: {
            selector: "//*[@id='app']/section/div/div[2]/div/div/div[3]/div[2]",
            locateStrategy: 'xpath'
        },
        ratingsReviewsCont: {
            selector: "//*[@id='app']/section/div/div[2]/div/div/div[3]/div[3]",
            locateStrategy: 'xpath'
        },
        resumeBtn: {
            selector: "//*[@id='app']/section/div/div[2]/div/div/div[3]/div[4]/div/a",
            locateStrategy: 'xpath'
        },
        viewAgreementsBtn: {
            selector: "//*[@id='app']/section/div/div[2]/div/div/div[3]/div[4]/div/button[1]",
            locateStrategy: 'xpath'
        },
        requestBtn: {
            selector: "//*[@id='app']/section/div/div[2]/div/div/div[3]/div[4]/div/button[2]",
            locateStrategy: 'xpath'
        },
        footerCont: {
            selector: ".//*[@id='app']/footer",
            locateStrategy: 'xpath'
        }
    }
}