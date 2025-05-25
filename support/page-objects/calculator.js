/**
 * Calculator Page Object Model
 */
class CalculatorPage {
  constructor() {
    this.selectors = {
      searchBox: '[name="q"]',
      calculator: '[jsname="j9hDUe"]',
      display: '[jsname="VssY5c"]',
      buttons: {
        zero: '[jsname="bkEvMb"]',
        one: '[jsname="N10B9"]',
      }
    };
  }

  // Method to load the calculator
  visit() {
    cy.visit('/'); // Visit the Google homepage
    cy.get(this.selectors.searchBox).type('calculator{enter}');
    cy.get(this.selectors.calculator).should('be.visible');
  }
}

export default CalculatorPage;