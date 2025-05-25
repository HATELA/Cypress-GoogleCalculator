import CalculatorPage from '../../support/page-objects/CalculatorPage';

const calculator = new CalculatorPage();

describe('CalculatorSoup - Keyboard Input Simulation', () => {
  beforeEach(() => {
    calculator.visit();
  });

  it('simulates 12 / 3 = via keyboard input correctly', () => {
  calculator.visit();
  cy.get('#cs_display').click(); // focus

  cy.get('body').type('1');
  cy.get('body').type('2');
  calculator.shouldDisplayValue('12');

  cy.get('body').type('/');
  cy.get('body').type('3');
  cy.get('body').type('=');

  calculator.shouldDisplayValue('4');
});
});
