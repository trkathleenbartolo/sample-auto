Feature: Login

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on Login button on Header

    @smoketest
    Scenario Outline: I should be able to log in as Tech or Client User using correct credentials
        Given I am navigated to the TechDirect Login page
        When I log in as <userType> using correct credentials <email> <pass>
        And I click on Login button
        Then I should be successfully logged in as <userType>
        And I should be navigated to <userPage> <url>
        And Login button should transform into a Hi, <userType> dropdown
        And clicking on TechDirect logo should always navigate me to <userPage> <url>

        Examples:

            | userType    | email                               | pass         | userPage           | url              |
            | Tech User   | kathleen.bartolo@twistresources.com | Logmein+1234 | Tech Dashboard     | TECH_DASHBOARD   |
            | Client User | kathleen.bartolo@twistpartners.com  | Logmein+1234 | Client Search page | CLIENT_DASHBOARD |