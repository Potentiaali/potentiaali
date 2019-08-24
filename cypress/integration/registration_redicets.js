describe("Registration button redirects to correct address", function () {

  it("navigation to google forms is working", function () {
    cy.visit("http://localhost:3000");
    cy.get(`[data-testid="Navigation"]`).contains("Registration for companies").click();
    cy.get(`[data-testid="RegistButton"]`).should("have.attr", "href", "https://forms.gle/kVcR1KDStVy2UhzB9")
    .should("have.attr", "target", "_blank")
    .should("have.attr", "rel", "noreferrer noopener");
  });
});