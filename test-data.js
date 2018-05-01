module.exports = {
    //Set the environment that should be accessed. Options: dev, stage, uat, prod
    environment: "dev",
    
    //Test data
    dev: {
        domain: "http://dev.tech-direct.com",
        tech: {
            email: "kathleen.bartolo+t1@tooltwist.com",
            password: "Logmein+1234"
        },
        client: {
            email: "kathleen.bartolo+c1@tooltwist.com",
            password: "Logmein+1234",
            filteredSearchResults: "GP%20Dynamics%3B%20&industry_experience=1,5,13&state=Queensland&postcode=4816&english_proficiency=Advanced&city=Paluma&rate_range_min=0&rate_range_max=25"
        }
    },

    stage: {
        domain: ""
    },

    uat: {

    },

    production: {
        domain: "https://www.tech-direct.com"
    }
}