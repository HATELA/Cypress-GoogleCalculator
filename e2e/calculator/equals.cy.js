import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Equals Button', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('computes result on pressing =', () => {
    calculator.performCalculation(2, '+', 3).shouldDisplayValue('5');
  });

  it('pressing = repeatedly keeps result', () => {
    calculator.performCalculation(4, '×', 5);
    calculator.clickButton('=').clickButton('=').shouldDisplayValue('500');
    //Since this is not programmable calculator - it does 20*25 on pressing = again
  });
});