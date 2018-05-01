Feature: Client Search

    Background:
        Given I am navigated to the Tech Direct Login page {td.login.url}
        And I am successfully logged in as Client kathleen.bartolo+c1@tooltwist.com Logmein+1234
        And I am navigated to the Client Search page {td.client.search.page.path}
        And I entered multiple Skillsets on Skillset Search bar
        And further filtered the results thru Advanced options
        And I clicked on Search button

    @smoketest
    Scenario: Several elements on Tech Profile popover should be displayed on all tabs
        Given I am navigated to the Client Search Results page {td.client.search.results.page.path}
        When one or several Techs that match the set search criteria are listed
        And I click on the View Profile button under the chosen Tech
        And I click on any of the following tabs:
            | Profile             |
            | Work Experiences    |
            | Ratings and Reviews |
        Then the following elements should always be displayed:
            | Tech's First and Last Name |
            | Request button             |
        # | Left and Right Shevron buttons |
        And clicking on the View Profile button again should close the Tech Profile popover

    @smoketest @test
    Scenario: I should be able to get unfiltered search results when I emptied the Skillset search bar and make the Advanced options unfiltered
        Given I am navigated to the Client Search Results page {td.client.search.results.page.path}
        When I leave the Skillset Search bar blank
        And I select Any as option on all the Advanced options dropdowns
        And I click on Refine Search button
        Then unfiltered Tech items should be listed on Search Results page

    @smoketest
    Scenario: Clicking on the desired tech tile should navigate user to the Tech Profile page
        Given I am navigated to the Client Search Results page {td.client.search.results.page.path}
        And one or several Techs that match the set search criteria were listed
        When I click on the chosen Tech tile
        Then I should be navigated to the Tech Profile page {td.client.tech.profile.page.path}
        And the following elements should be visible:
            | Header                      |
            | Tech Profile Image          |
            | Tech Info section           |
            | Tech Overview section       |
            | Work Experience section     |
            | Ratings and Reviews section |
            | Agreement button            |
            | View Resume button          |
            | Request button              |
            | Footer                      |
        And information displayed on the following sections should be the the same as the details displayed on their respective Tech popovers
            | Tech Profile section        |
            | Work Experience section     |
            | Ratings and Reviews section |