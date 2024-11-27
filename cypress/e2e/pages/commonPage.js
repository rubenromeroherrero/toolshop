export class CommonPage {
  visitLink(url) {
    cy.visit(url);
  }

  checkEndpointOfUrl(url) {
    cy.url().should("eq", url);
  }

  checkValueOfEndpoint(endpoint) {
    cy.url().should("contains", endpoint);
  }
}
