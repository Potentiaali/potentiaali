describe("Navigation in Finnish", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000")
      cy.get(`[data-testid="Navigation"]`).contains("fi").click()
    });
  
    it("front page can be opened", function() {
      cy.get(`[data-testid="MainContent"]`).contains("Mikä on Kumpulan Potentiaali?");
    });
  
    it("registration page can be opened", function() {
      cy.get(`[data-testid="Navigation"]`).contains("Yritysilmoittautuminen").click()
      cy.get(`[data-testid="RegistPage"]`).contains("Sisältö")
    });
  
    it("registration is open", function() {
      cy.get(`[data-testid="Navigation"]`).contains("Yritysilmoittautuminen").click()
      cy.get(`[data-testid="RegistButton"]`).contains("Ilmoittaudu Kumpulan Potentiaaliin nyt!")
    });
  
    it("schedule page can be opened", function() {
      cy.get(`[data-testid="Navigation"]`).contains("Aikataulu").click()
      cy.get("body").contains("Aika")
    });
  
    it("field of studies page can be opened", function() {
      cy.get(`[data-testid="Navigation"]`).contains("Aineiden esittely").click()
      cy.get(`[data-testid="Subject"]`).contains("Fysiikka")
    });
  });