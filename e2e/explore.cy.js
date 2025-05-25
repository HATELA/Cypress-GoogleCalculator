describe('Google Calculator Exploration', () => {
  it('should load calculator and inspect elements', () => {
    cy.visit('https://www.google.com');
    cy.get('[name="q"]').type('calculator{enter}');
    cy.wait(2000);
    
    // Use VS Code debugger to inspect elements
    cy.get('[role="application"]').should('be.visible');
    
    // Log elements for VS Code console inspection
    cy.get('*').each(($el) => {
      if ($el.attr('jsname')) {
        cy.log(`Element: ${$el.prop('tagName')}, jsname: ${$el.attr('jsname')}`);
      }
    });
  });
});