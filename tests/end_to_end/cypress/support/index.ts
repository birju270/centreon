import './commands';

before(() => cy.dockerStart().then(() => cy.loginForm()));

beforeEach(() => {
  Cypress.Cookies.preserveOnce('PHPSESSID');
});
