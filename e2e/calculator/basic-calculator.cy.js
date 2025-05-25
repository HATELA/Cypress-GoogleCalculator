import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Basic Tests', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('should display calculator interface', () => {
    cy.get(calculator.selectors.display).should('be.visible');
  });

  it('should display number 1 when clicked', () => {
    calculator.clickButton('1').shouldDisplayValue('1');
  });

  it('should display a multi-digit number', () => {
    calculator.enterNumber(123).shouldDisplayValue('123');
  });
});
