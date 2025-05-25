# 🧪 Calculator E2E Testing with Cypress

This project demonstrates a complete end-to-end testing suite using **Cypress** for a calculator UI. Since Google Search calculator cannot be automated due to CAPTCHA protection, the publicly available [CalculatorSoup Basic Calculator](https://www.calculatorsoup.com/calculators/math/basic.php) was used to simulate user interactions.

---

## ✅ Features Covered

- Number input & display verification (0-9, decimal)
- Basic arithmetic operations (`+`, `-`, `×`, `÷`)
- Multi-digit & chained operations
- Clear functions (`AC`, `CE`)
- Negative numbers & leading zero handling
- Large number & scientific notation formatting
- Accessibility checks (focus, ARIA labels)
- Visual regression (screenshots before/after)
- Edge Cases (Ignoring leading zeros, Handling multiple decimal points etc)
- Page Object Model (POM) implementation

---

## 🗂 Project Structure

```
/e2e
  ├── accessibility.cy.js
  ├── display.cy.js
  ├── basic_operations.cy.js
  ├── clear_buttons.cy.js
  ├── equals.cy.js
  ├── chaining_bodmas.cy.js
  ├── edge_cases.cy.js
  ├── large_number_formatting.cy.js
  ├── keyboard_input.cy.js
  ├── accessibility.cy.js
  └── visual_regression.cy.js

/support/page-objects/
  └── CalculatorPage.js

cypress.config.js
package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npx http-server . -p 8080
npx cypress open
```

---

## ⚙️ GitHub Actions CI

This project includes a GitHub Actions workflow in `.github/workflows/cypress.yml` that:

- Installs dependencies
- Serves the calculator locally
- Runs Cypress test suite on push or PR

---

## 🔧 Rationale for Tools & Architecture

- **Cypress**: Chosen for its simplicity, browser-based execution, and automatic retrying of commands.
- **Page Object Model**: Makes test scripts cleaner and more maintainable by separating UI logic from test logic.
- **CalculatorSoup**: Used as a substitute for the Google calculator due to CAPTCHA restrictions.
- **GitHub Actions**: Automates test execution on every push/PR.

---

## 📄 License

MIT


