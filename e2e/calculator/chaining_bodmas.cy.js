import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Chaining and BODMAS Simulation', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('handles sequential operations: 1 + 2 + 3', () => {
    calculator.clickButton('1').clickButton('+').clickButton('2').clickButton('+').clickButton('3').clickButton('=');
    calculator.shouldDisplayValue('6');
  });

  it('handles mixed ops: 10 - 2 × 3', () => {
    calculator.clickButton('1').clickButton('0')
      .clickButton('-')
      .clickButton('2')
      .clickButton('×')
      .clickButton('3')
      .clickButton('=');
    calculator.shouldDisplayValue('24'); // Not real BODMAS, flat left-to-right
  });

  it('handles simulated BODMAS: (2 + 3) × 4', () => {
    calculator.clickButton('2').clickButton('+').clickButton('3').clickButton('=').shouldDisplayValue('5');
    calculator.clickButton('×').clickButton('4').clickButton('=').shouldDisplayValue('20');
  });
});