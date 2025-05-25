import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Display Tests', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('should display each number when clicked', () => {
    for (let i = 0; i <= 9; i++) {
      calculator.clickButton(i.toString()).shouldDisplayValue(i.toString());
      calculator.clickClear();
    }
  });

  it('should display decimal correctly', () => {
    calculator.enterNumber('3.14').shouldDisplayValue('3.14');
  });
});