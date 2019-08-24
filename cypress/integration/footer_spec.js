describe("Footer", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000");
    });

    it("footer contains email-address", function () {
        cy.get(`[data-testid="contact-email"]`).should("have.attr", "href", "mailto:info@potentiaali.com")
    })
});
