#Feature and step definition - still incomplete, contents not yet provided by the PO
Feature: Public Pages - How It Works

    Background:
        Given I am navigated to any TechDirect Public page
        And I clicked on How It Works link on Header

    Scenario: Elements on How It Works page should be displayed correctly
        Given I am navigated to the TechDirect How It Works page {td.how.it.works.path}
        Then How It Works page should be displayed correctly
        # And the following elements should be visible:
        #     | Header  |
        #     | Content |
        #     | Footer  |