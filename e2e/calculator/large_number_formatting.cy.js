import CalculatorPage from '../../support/page-objects/CalculatorPage';

describe('CalculatorSoup - Edge Cases', () => {
  const calculator = new CalculatorPage();

  beforeEach(() => {
    calculator.visit();
  });

  it('formats large results in scientific notation or readable form', () => {
  calculator.enterNumber('999999999');
  calculator.clickButton('×');
  calculator.enterNumber('999999999');
  calculator.clickButton('=');
  
  calculator.getDisplayValue().then(val => {
    // Accept scientific notation or very large value
    expect(val).to.match(/e\+|[0-9]{9,}/);
  });
});

});