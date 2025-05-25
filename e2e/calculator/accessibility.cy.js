import CalculatorPage from '../../support/page-objects/CalculatorPage';

const calculator = new CalculatorPage();

describe('CalculatorSoup - Accessibility Checks', () => {
  beforeEach(() => {
    calculator.visit();
  });

  it('has screen reader labels on display', () => {
    calculator.shouldHaveAccessibilityLabel('number display');
  });

  it('buttons are focusable and clickable', () => {
  calculator.focusButton('1');
  cy.focused().click();
  calculator.shouldDisplayValue('1');
});

});
