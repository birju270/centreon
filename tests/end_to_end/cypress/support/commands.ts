Cypress.Commands.add('dockerStart', () => {
  return cy
    .exec(`npx wait-on ${Cypress.env('DOCKER_URL')}`)
    .then(() =>
      cy.log(`Docker Centreon started on : ${Cypress.env('DOCKER_URL')}`),
    );
});

Cypress.Commands.add('visitCentreon', (url) => {
  cy.visit(`${Cypress.env('DOCKER_URL')}${url}`, {
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('loginForm', () => {
  cy.visit(Cypress.env('DOCKER_URL'));

  cy.fixture('users/admin.json')
    .as('user')
    .then((user) => {
      cy.get('input[name=useralias]').type(user.login);
      cy.get('input[name=password]').type(user.password);
    });

  return cy.get('form').submit();
});
