# TECH USER
Feature: Tech Dashboard

    Background:
        Given I am successfully logged in as Tech {td.tech.email} {td.tech.pass}

    @smoketest @test
    Scenario: Elements on Tech Dashboard should be available
        Given I am navigated to the Tech Dashboard {td.tech.dashboard.path}
        Then the following elements on Dashboard should be available:
            | Tech Header                     |
            | Who's viewed my profile section |
            | Mini Calendar                   |
            | Today's Schedule widget         |
            | Pending Requests accordion      |
            | Current Engagements accordion   |
            | Footer                          |
        And all profile view counts should be displayed on Who's viewed my profile section
        And all events and agreements should be plotted on the Mini Calendar
        And all events scheduled today should be listed on Today's Schedule widget
        And all pending requests are listed on Pending Requests accordion
        And all accepted requests should be listed on Current Engagement accordion