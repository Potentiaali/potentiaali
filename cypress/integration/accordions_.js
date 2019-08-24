describe("Subjects page", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000");
      cy.get(`[data-testid="Navigation"]`).contains("fi").click();
      cy.get(`[data-testid="Navigation"]`).contains("Aineiden esittely").click();
    });

    it("there is 47 accordion headers in subjects page", function() {
      cy.get('body').find(`[data-testid="AccordionHeader"]`).should('have.length', 47)
  });

  
    it("accordion can be opened and closed", function() {
        cy.get(`[data-testid="AccordionContent"]`).contains("Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan").should("not.be.visible");
        cy.get(`[data-testid="AccordionContent"]`).contains("Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on tutkija.").should("not.be.visible");
        cy.get(`[data-testid="Subject"]`).contains("Fysiikka").click();

        cy.get(`[data-testid="AccordionContent"]`).contains("Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan").should("be.visible");
        cy.get(`[data-testid="AccordionContent"]`).contains("Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on tutkija.").should("be.not.visible");

        cy.get(`[data-testid="Subject"]`).contains("Fysiikka").click();
        cy.get(`[data-testid="AccordionContent"]`).contains("Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan").should("not.be.visible");
        cy.get(`[data-testid="AccordionContent"]`).contains("Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on tutkija.").should("not.be.visible");
    });

    it("accordion inside accordion can be closed with one click", function() {

        cy.get(`[data-testid="AccordionContent"]`).contains("Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan").should("not.be.visible");
        cy.get(`[data-testid="AccordionContent"]`).contains("Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on tutkija.").should("not.be.visible");
        cy.get(`[data-testid="Subject"]`).contains("Fysiikka").click();
        cy.get(`[data-testid="Subject"]`).contains("Tutkija").click();

        cy.get(`[data-testid="AccordionContent"]`).contains("Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan").should("be.visible");
        cy.get(`[data-testid="AccordionContent"]`).contains("Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on tutkija.").should("be.visible");

        cy.get(`[data-testid="Subject"]`).contains("Fysiikka").click();
        cy.get(`[data-testid="AccordionContent"]`).contains("Fysiikkaa opiskelevat henkilöt opiskelevat hallitsemaan").should("not.be.visible");
        cy.get(`[data-testid="AccordionContent"]`).contains("Luonnollisesti yksi fyysikon koulutuksen antama uravaihtoehto on tutkija.").should("not.be.visible");
      });

  });
