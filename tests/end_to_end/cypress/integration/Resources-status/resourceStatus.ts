import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('a valid centreon user account', () => {
  Cypress.Cookies.debug(true, { verbose: false });
  // Cypress.Cookies.preserveOnce('PHPSESSID');
});

And('there is a page with a list of resources under monitoring', () => {
  return true;
});
And('the user can access this page', () => {
  return true;
});
And('there is a filters menu on this page', () => {
  return true;
});

When('the user accesses the page for the first time', () => {
  cy.log('YES !');
  return true;
});

Then('a default filter is applied', () => {
  return true;
});
