import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Clear Button Tests', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('clears display with AC', () => {
    calculator.enterNumber(456).clickClear().shouldDisplayValue('0');
  });
});