#GENERAL USER
Feature: Public Pages - Home

    @smoketest
    Scenario: I should be navigated to TechDirect Home page once correct URL was accessed
        Given I accessed the TechDirect Home page using correct url {td.home.url}
        Then I should be navigated to the TechDirect Home page
        And the following elements on Home should be displayed correctly:
            | Public Header           |
            | Client Info box         |
            | Tech Info box           |
            | Headline text           |
            | Subheadline text        |
            | Tech Direct logo        |
            | As a Business divider   |
            | As a Consultant divider |
            | Footer                  |
        And on Client Info box, the following elements are present:
            | If you’re HIRING header text                    |
            | Find a skilled IT consultant now subheader text |
            | Client Sign up button                                  |
        And on Tech Info box, the following elements are present:
            | If you’re an IT CONSULTANT header text             |
            | Join up and get approached for work subheader text |
            | Tech Sign up button                                     |
        And on As a Business divider, client-related icons and text are displayed correctly
        And Join Now for Free divider and Client Sign up button are present
        And on As a Consultant divider, tech-related icons and text are displayed correctly
        And Join Now for Free divider and Tech Sign up button are present
        And clicking on the following Sign Up buttons should navigate me to the correct page:
            | Client Info box > Sign Up         | {td.client.signup.path} |
            | Tech Info box > Sign Up           | {td.tech.signup.path}   |
            | As a Business divider > Sign Up   | {td.client.signup.path} |
            | As a Consultant divider > Sign Up | {td.tech.signup.path}   |
