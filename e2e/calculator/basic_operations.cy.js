import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Basic Arithmetic', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('adds numbers', () => {
    calculator.performCalculation(7, '+', 5).shouldDisplayValue('12');
  });

  it('subtracts numbers', () => {
    calculator.performCalculation(9, '-', 4).shouldDisplayValue('5');
  });

  it('multiplies numbers', () => {
    calculator.performCalculation(6, '×', 3).shouldDisplayValue('18');
  });

  it('divides numbers', () => {
    calculator.performCalculation(8, '÷', 2).shouldDisplayValue('4');
  });

  it('displays negative result correctly', () => {
    calculator.performCalculation(5, '-', 10).shouldDisplayValue('-5');
  });
});