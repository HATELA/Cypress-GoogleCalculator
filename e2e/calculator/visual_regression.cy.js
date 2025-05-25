import CalculatorPage from '../../support/page-objects/CalculatorPage';

const calculator = new CalculatorPage();

describe('CalculatorSoup - Visual Regression Sanity Check', () => {
  beforeEach(() => {
    calculator.visit();
  });

  it('captures screenshot of initial load', () => {
    calculator.takeScreenshot('calculator-initial');
  });

  it('captures screenshot after calculation', () => {
    calculator.clickButton('2');
    calculator.clickButton('+');
    calculator.clickButton('3');
    calculator.clickButton('=');
    calculator.takeScreenshot('calculator-after-addition');
  });
});
