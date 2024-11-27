export class CommonPage {
  visitLink(url) {
    cy.visit(url);
  }

  checkValueOfEndpoint(inspectProperty, endpoint) {
    cy.url().should(inspectProperty, endpoint);
  }
}
