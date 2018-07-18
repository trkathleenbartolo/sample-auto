module.exports = {
    //Set the environment that should be accessed. Options: dev, stage, uat, prod
    ENVI: 'dev',

    DEV: {
        domain: "https://dev.tech-direct.com",
        tech: {
            regEmail: 'kathleen.bartolo+tech_smoke_v0.0_mmdd@tooltwist.com',
            email: "kathleen.bartolo+t1@tooltwist.com",
            password: "Logmein+1234"
        },
        client: {
            regEmail: 'kathleen.bartolo+client_smoke_v0.0_mmdd@tooltwist.com',
            email: "kathleen.bartolo+c1@tooltwist.com",
            password: "Logmein+1234",
            filteredSearchResults: "GP%20Dynamics%3B%20&industry_experience=1,5,13&state=Queensland&postcode=4816&english_proficiency=Advanced&city=Paluma&rate_range_min=0&rate_range_max=25"
        },
        admin: {
            email: "kathleen.bartolo+admin@tooltwist.com",
            password: "Epi123??"
        }
    },

    UAT: {
        domain: "https://uat.tech-direct.com",
        tech: {
            regEmail: 'kathleen.bartolo+tech_smoke_v0.0_mmdd@tooltwist.com',
            email: "kathleen.bartolo+t1@tooltwist.com",
            password: "Logmein+1234"
        },
        client: {
            regEmail: 'kathleen.bartolo+client_smoke_v0.0_mmdd@tooltwist.com',
            email: "kathleen.bartolo+c1@tooltwist.com",
            password: "Logmein+1234",
            filteredSearchResults: "GP%20Dynamics%3B%20&industry_experience=1,5,13&state=Queensland&postcode=4816&english_proficiency=Advanced&city=Paluma&rate_range_min=0&rate_range_max=25"
        },
        admin: {
            email: "kevin.batongbakal+admin@tooltwist.com",
            password: "Epi123??"
        }

    },

    PROD: {
        domain: "https://www.tech-direct.com",
        tech: {
            email: "kathleen.bartolo+t1@tooltwist.com",
            password: "Logmein+1234"
        },
        client: {
            email: "kathleen.bartolo+c1@tooltwist.com",
            password: "Logmein+1234",
            filteredSearchResults: "GP%20Dynamics%3B%20&industry_experience=1,5,13&state=Queensland&postcode=4816&english_proficiency=Advanced&city=Paluma&rate_range_min=0&rate_range_max=25"
        },
        admin: {
            email: "kevin.batongbakal+admin@tooltwist.com",
            password: "Epi123??"
        }
    },

    //Functions and Modules
    GET_ENVI
};

function GET_ENVI() {
    switch (this.ENVI) {
        case ('dev'):
            return this.DEV;
            break;

        case ('sit'):
        case ('stage'):
            return this.DEV;
            break;

        case ('prodtest'):
        case ('uat'):
            return this.UAT;
            break;

        case ('prod'):
            return this.PROD;
            break;
    }
}