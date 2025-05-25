class CalculatorPage {
  constructor() {
    this.selectors = {
      display: '#cs_display',
      buttons: {
        '0': 'button[name="cs_zero"]',
        '1': 'button[name="cs_one"]',
        '2': 'button[name="cs_two"]',
        '3': 'button[name="cs_three"]',
        '4': 'button[name="cs_four"]',
        '5': 'button[name="cs_five"]',
        '6': 'button[name="cs_six"]',
        '7': 'button[name="cs_seven"]',
        '8': 'button[name="cs_eight"]',
        '9': 'button[name="cs_nine"]',
        '.': 'button[name="cs_decimal"]',
        '+': 'button[name="cs_add"]',
        '-': 'button[name="cs_subtract"]',
        '×': 'button[name="cs_multiply"]',
        '÷': 'button[name="cs_divide"]',
        '=': 'button[name="cs_equal"]',
        'AC': 'button[name="cs_clear_display"]',
        'CE': 'button[name="cs_backspace"]'
      }
    };
  }

  visit() {
    cy.visit('https://www.calculatorsoup.com/calculators/math/basic.php');
    //cy.get(this.selectors.display).should('exist');
    return this;
  }

  clickButton(label) {
    cy.get(this.selectors.buttons[label]).click();
    return this;
  }

  enterNumber(num) {
    num.toString().split('').forEach(d => this.clickButton(d));
    return this;
  }

  performCalculation(a, op, b) {
    this.enterNumber(a).clickButton(op).enterNumber(b).clickButton('=');
    return this;
  }

  clickClear() {
    return this.clickButton('AC');
  }

  clickClearEntry() {
    return this.clickButton('CE');
  }

  shouldDisplayValue(value) {
    cy.get(this.selectors.display).should('have.value', value.toString());
    return this;
  }

  getDisplayValue() {
    return cy.get(this.selectors.display).invoke('val');
  }
}

export default CalculatorPage;
