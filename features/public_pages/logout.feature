Feature: Logout

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on Login button on Header
        And I am navigated to the TechDirect Login page {td.login.page.path}

    @smoketest @test
    Scenario Outline: I should be logged out successfully when I click on Logout link from the User dropdown
        Given I log in as <userType> using correct credentials <email> <pass>
        When I hover my mouse pointer on the <dropdownName> dropdown
        And I click on the Logout link
        Then I should be successfully logged out as <userType>
        And I should be navigated back to TechDirect Home page
        And <userType> Header should transform back to Public Header
        And <dropdownName> dropdown should transform back to Login button
        And I am able to navigate again to the following pages:
            | Home page                 |
            | Initial Tech Sign up page |
            | Client Sign Up page       |
        And <userType> pages should not be navigable anymore

        Examples:

            | userType | email                             | pass         | dropdownName              |
            | Tech     | kathleen.bartolo+t1@tooltwist.com | Logmein+1234 | Hi Tester Kath!           |
            | Client   | kathleen.bartolo+c1@tooltwist.com | Logmein+1234 | Hi Twist Resources, Inc.! |