Feature: Client Search

    Background:
        Given I am navigated to the Tech Direct Login page {td.login.url}
        And I am successfully logged in as Client kathleen.bartolo+c1@tooltwist.com Logmein+1234

    @smoketest
    Scenario Outline: I should be able to get filtered search results when Skillsets are enumerated on Skillset Search bar and the Advanced options is filtered
        Given I am navigated to the Client Search page {td.client.search.page.path}
        When I enter multiple Skillsets on Skillset Search bar <skill1>, <skill2>, <skill3>
        And select one or multiple options other than Any option on Industry Experience dropdown <indExp1>, <indExp2>, <indExp3>
        And I click on Advanced options link
        And I select desired option from each of the dropdown <citysuburb>, <state>, <postcode>, <startDate>, <endDate>, <level>, <minRate>, <maxRate>
        And I click on Search button
        Then Techs that matches the filtered parameters should be listed on Search Results page <techFirstName>

        Examples:
            | techFirstName | citysuburb | skill1 | skill2 | skill3   | state      | postcode | startDate   | endDate     | level    | minRate | maxRate | indExp1     | indExp2   | indExp3 |
            | Alexis        | Paluma     | Visual | Oracle | Dynamics | Queensland | 4816     | 01-Mar-2018 | 31-Mar-2018 | Advanced | 0       | 25      | Agriculture | Education | Other   |