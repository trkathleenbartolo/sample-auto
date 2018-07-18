#DEVELOPMENT TEAM
Feature: Health Check

    @smoketest
    Scenario: Servers on TechDirect site should be up and running
        Given I accessed the TechDirect Healthcheck pages {health.check.page}
        Then status of the following servers should be 1, which means these are up and running:
            | API         |
            | DB          |
            | Cloudsearch |
            | Authservice |