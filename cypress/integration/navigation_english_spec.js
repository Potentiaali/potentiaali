describe("Navigation in English", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000")
  });

  it("front page can be opened", function() {
    cy.get(`[data-testid="MainContent"]`).contains("What is Kumpula's Potential?");
  });

  it("registration page can be opened", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Registration for companies").click();
    cy.get(`[data-testid="RegistPage"]`).contains("The event includes");
  });

  it("registration is open", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Registration for companies").click();
    cy.get(`[data-testid="RegistButton"]`).contains("Register to Kumpula's Potential now!");
  });

  it("schedule page can be opened", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Schedule").click();
    cy.get("body").contains("Time");
  });

  it("field of studies page can be opened", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Fields of studies").click();
    cy.get(`[data-testid="Subject"]`).contains("Fysiikka");
  });
});