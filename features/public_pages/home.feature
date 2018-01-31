Feature: Public Pages - Home

    Scenario Outline: I should be navigated to TechDirect Home page once correct URL was accessed
        Given I accessed the TechDirect Home page using correct url
        Then I should be navigated to the TechDirect Home page
        # And the following elements should be displayed correctly:
        #     | Header                 |
        #     | H1 Header text         |
        #     | Supporting Header text |
        #     | Client Sign Up button  |
        #     | Tech Sign Up button    |
        #     | Footer                 |
        And clicking on the <signUpBtn> button should navigate me to the correct page <pageUrl>

        Examples:
            | signUpBtn      | pageUrl                 |
            | Client Sign Up | {td.client.signup.path} |
            | Tech Sign Up   | {td.tech.signup.path}   |