describe("Potentiaali web page", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000")
  });

  it("front page can be opened", function() {
    cy.contains("KUMPULAN POTENTIAALI")
  });

  it("registration page can be opened", function() {
    cy.contains("REGISTRATION")
      .click()
  });
});