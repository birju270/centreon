Feature: The Centreon homepage

  I want to open centreon homepage

  Background:
    Given a valid centreon user account
    And there is a page with a list of resources under monitoring
    And the user can access this page

  @focus
  Scenario: login with valid credentials
    Given I am on the login page
    When I type the user credentials
    And I press "Connect"
    Then I should see the Header