describe("Recetas App - Pruebas E2E reales", () => {

    // 1. La página principal carga correctamente
    it("Carga la página principal y muestra el título", () => {
      cy.visit("/");
      cy.contains("Recetas App").should("be.visible");
    });
  
    // 2. Muestra las cards de recetas
    it("Muestra al menos una receta", () => {
      cy.visit("/");
      cy.get("[data-testid='recipe-card']").should("have.length.at.least", 1);
    });
  
    // 3. Permite abrir los detalles de una receta
    it("Permite abrir los detalles de una receta", () => {
      cy.visit("/");
  
      cy.get("[data-testid='recipe-card']").first().click();
  
      cy.contains("Ingredientes").should("be.visible");
      cy.contains("Preparación").should("be.visible");
    });
  
    // 4. Permite volver al home desde el header
    it("Permite volver al home", () => {
      cy.visit("/");
  
      cy.get("[data-testid='recipe-card']").first().click();
  
      cy.contains("Recetas App").click();
  
      cy.contains("Recetas App").should("be.visible");
      cy.get("[data-testid='recipe-card']").should("exist");
    });
  
  });
  