Feature: Public Pages - Home

    @smoketest @test
    Scenario Outline: I should be navigated to TechDirect Home page once correct URL was accessed
        Given I accessed the TechDirect Home page using correct url
        Then I should be navigated to the TechDirect Home page
        And the following elements on Home should be displayed correctly:
            | Header                 |
            | H1 Header text         |
            | Supporting Header text |
            | Client Sign Up button  |
            | Tech Sign Up button    |
            | Footer                 |
        And clicking on the <userType> Sign Up button should navigate me to the correct Sign Up page <pageUrl>

        Examples:
            | userType | pageUrl                 |
            | Client   | {td.client.signup.path} |
            | Tech     | {td.tech.signup.path}   |