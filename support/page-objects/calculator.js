// This file contains the Page Object Model for the Google Calculator.
/**
 * Calculator Page Object Model - Proper Implementation
 */
class CalculatorPage {
  constructor() {
    // Private selectors - never exposed to tests
    this.selectors = {
      searchBox: '[name="q"]',
      calculator: '[jsname="j9hDUe"]',
      display: '[jsname="VssY5c"]',
      buttons: {
        // Numbers
        zero: '[jsname="bkEvMb"]',
        one: '[jsname="N10B9"]',
        two: '[jsname="lVjWed"]',
        three: '[jsname="KN1kY"]',
        four: '[jsname="xAP7E"]',
        five: '[jsname="Ax5wH"]',
        six: '[jsname="abcgof"]',
        seven: '[jsname="rk7bOd"]',
        eight: '[jsname="T7PMFe"]',
        nine: '[jsname="XoxYJ"]',
        // Operations
        plus: '[jsname="XSr6wc"]',
        minus: '[jsname="pPHzQc"]',
        multiply: '[jsname="YovRWb"]',
        divide: '[jsname="WxTTNd"]',
        equals: '[jsname="qCp9A"]',
        clear: '[jsname="SLn8gc"]',
        clearEntry: '[jsname="H7sWPd"]'
      }
    };

    // Number mapping for dynamic access
    this.numberButtons = {
      0: this.selectors.buttons.zero,
      1: this.selectors.buttons.one,
      2: this.selectors.buttons.two,
      3: this.selectors.buttons.three,
      4: this.selectors.buttons.four,
      5: this.selectors.buttons.five,
      6: this.selectors.buttons.six,
      7: this.selectors.buttons.seven,
      8: this.selectors.buttons.eight,
      9: this.selectors.buttons.nine
    };

    // Operation mapping for dynamic access
    this.operationButtons = {
      '+': this.selectors.buttons.plus,
      '-': this.selectors.buttons.minus,
      '×': this.selectors.buttons.multiply,
      '*': this.selectors.buttons.multiply, // Alternative symbol
      '÷': this.selectors.buttons.divide,
      '/': this.selectors.buttons.divide, // Alternative symbol
      '=': this.selectors.buttons.equals
    };
  }

  // Navigation methods
  visit() {
    cy.visit('/');
    cy.get(this.selectors.searchBox).type('calculator{enter}');
    cy.get(this.selectors.calculator).should('be.visible');
    return this;
  }

  // Basic interaction methods
  clickNumber(number) {
    const selector = this.numberButtons[number];
    if (!selector) {
      throw new Error(`Invalid number: ${number}. Must be 0-9.`);
    }
    cy.get(selector).click();
    return this;
  }

  clickOperation(operation) {
    const selector = this.operationButtons[operation];
    if (!selector) {
      throw new Error(`Invalid operation: ${operation}. Supported: +, -, ×, ÷, =`);
    }
    cy.get(selector).click();
    return this;
  }

  clickEquals() {
    cy.get(this.selectors.buttons.equals).click();
    return this;
  }

  clickClear() {
    cy.get(this.selectors.buttons.clear).click();
    return this;
  }

  clickClearEntry() {
    cy.get(this.selectors.buttons.clearEntry).click();
    return this;
  }

  // High-level methods for complex operations
  enterNumber(number) {
    const digits = number.toString().split('');
    digits.forEach(digit => {
      this.clickNumber(parseInt(digit));
    });
    return this;
  }

  performCalculation(num1, operation, num2) {
    this.enterNumber(num1)
        .clickOperation(operation)
        .enterNumber(num2)
        .clickEquals();
    return this;
  }

  performChainCalculation(operations) {
    // operations = [5, '+', 3, '-', 2, '=']
    operations.forEach(item => {
      if (typeof item === 'number') {
        this.enterNumber(item);
      } else if (typeof item === 'string') {
        this.clickOperation(item);
      }
    });
    return this;
  }

  // Verification methods
  shouldDisplayValue(expectedValue) {
    cy.get(this.selectors.display).should('contain.text', expectedValue.toString());
    return this;
  }

  shouldDisplayError(errorType = 'Infinity') {
    cy.get(this.selectors.display).should('contain.text', errorType);
    return this;
  }

  getDisplayValue() {
    return cy.get(this.selectors.display).invoke('text');
  }

  // Verification that calculator is ready
  shouldBeVisible() {
    cy.get(this.selectors.calculator).should('be.visible');
    cy.get(this.selectors.display).should('be.visible');
    return this;
  }

  // Utility methods for common patterns
  reset() {
    this.clickClear();
    return this;
  }

  // Method for handling multiple sequential operations
  calculate(expression) {
    // Example: calculate("123+456") or calculate("5*3-2")
    const tokens = this.parseExpression(expression);
    tokens.forEach(token => {
      if (this.isNumber(token)) {
        this.enterNumber(parseInt(token));
      } else if (this.isOperation(token)) {
        this.clickOperation(token);
      }
    });
    this.clickEquals();
    return this;
  }

  // Private helper methods
  parseExpression(expression) {
    // Simple parser for expressions like "123+456" or "5*3-2"
    return expression.match(/\d+|[+\-*/÷×]/g) || [];
  }

  isNumber(token) {
    return /^\d+$/.test(token);
  }

  isOperation(token) {
    return ['+', '-', '*', '/', '×', '÷'].includes(token);
  }
}

export default CalculatorPage;