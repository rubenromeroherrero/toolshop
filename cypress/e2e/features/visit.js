describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
