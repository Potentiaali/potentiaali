describe("Navigation in English", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000")
  });

  it("front page can be opened", function() {
    cy.get(`[data-testid="MainContent"]`).contains("What is Kumpula's Potential?");
  });

  it("registration page can be opened", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Registration for companies").click();
    cy.get("body").contains("Kumpula's Potential is a work-life and recruitment event organized by the students of the Faculty of Science");
  });

  it("registration is open", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Registration for companies").click();
    cy.get("body").contains("Register to Kumpula's Potential now!");
  });

  it("schedule page can be opened", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Schedule").click();
    cy.get("body").contains("Time");
  });

  it("field of studies page can be opened", function() {
    cy.get(`[data-testid="Navigation"]`).contains("Fields of studies").click();
    cy.get("body").contains("Aineiden esittely");
  });
});