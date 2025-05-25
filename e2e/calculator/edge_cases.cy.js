import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Edge Cases', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('ignores leading zeros in number input', () => {
  calculator.enterNumber('007');
  calculator.clickButton('+');
  calculator.enterNumber('3');
  calculator.clickButton('=');
  calculator.shouldDisplayValue('10');
  });

  it('division by zero shows error or infinity or not a number', () => {
    calculator.performCalculation(5, '÷', 0).shouldDisplayValue('NaN');
  });

  it('handles multiple decimal points correctly', () => {
    calculator.enterNumber('3.1.4').shouldDisplayValue('3.14');
  });

  it('should handle clear after partial input', () => {
    calculator.enterNumber(12).clickClear().shouldDisplayValue('0');
  });

  it('should reset after equals and new entry', () => {
    calculator.performCalculation(2, '+', 3).shouldDisplayValue('5');
    calculator.enterNumber(7).shouldDisplayValue('7');
  });
});