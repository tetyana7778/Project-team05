# Project-team05

This repository serves as the **foundational base** for a web application test automation project using Playwright and TypeScript. It establishes the project structure, configuration, and architecture conventions that all further automation work will be built upon — following the **Page Object Model** and **Component-based** patterns.

---

## Tech Stack

- [Playwright](https://playwright.dev/) — cross-browser end-to-end testing
- [TypeScript](https://www.typescriptlang.org/) — type-safe test development
- [dotenv](https://github.com/motdotla/dotenv) — environment variable management
- [Allure Report](https://docs.qameta.io/allure) — detailed test reporting

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
npx playwright install
```

### Environment Configuration

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable   | Description                        | Default                  |
|------------|------------------------------------|--------------------------|
| `BASE_URL` | URL of the application under test  | `https://www.greencity.cx.ua/#/greenCity`  |
| `HEADLESS` | Run browsers in headless mode      | `true`                   |
| `RETRIES`  | Number of test retry attempts      | `0`                      |
| `TIMEOUT`  | Action timeout in milliseconds     | `30000`                  |

> **Note:** `.env` is listed in `.gitignore` and should never be committed to the repository. Use `.env.example` as the source of truth for required variables.

---

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/example.spec.ts

# Run tests in a specific browser
npx playwright test --project=chromium

# Run only TC-07 tests
npx playwright test tests/tc-07.spec.ts

# Open the HTML report after a test run
npx playwright show-report
```

---

## Project Structure

```
project-team05/
├── tests/                  # Test files (*.spec.ts)
│   ├── tc-07.spec.ts       # TC-07: Cancel button with confirmation modal
│   └── ...                 # Other test files (TC-01 through TC-06)
├── pages/                  # Page Object classes
│   ├── base.page.ts        # Abstract base class for all pages
│   ├── CreateNewsPage.ts   # Create news form page (used by TC-07)
│   ├── NewsPage.ts         # News listing page (used by TC-07)
│   └── ...                 # Other page objects
├── components/             # Reusable UI component classes
│   ├── base.component.ts   # Abstract base class for all components
│   ├── ConfirmationModal.ts # Confirmation modal component (used by TC-07)
│   ├── Header.ts           # Header component
│   └── ...                 # Other components
├── fixtures/               # Custom Playwright fixtures
├── utils/                  # Utility helpers
│   └── env.ts              # Environment variable loader
├── .env                    # Local environment config (not committed)
├── .env.example            # Environment variable template
├── playwright.config.ts    # Playwright configuration
├── package.json
└── README.md
```

---

## Architecture Overview

This project follows the **Page Object Model (POM)** pattern combined with a **Component-based** approach:

- **Pages** (`pages/`) — represent full application pages. Each page class extends `BasePage` and exposes actions and assertions relevant to that page.
- **Components** (`components/`) — represent reusable UI elements (e.g. header, modal, form). Each component class extends `BaseComponent`.
- **Fixtures** (`fixtures/`) — custom Playwright fixtures for shared setup and teardown logic across tests.
- **Utils** (`utils/`) — shared helper functions, including environment variable access via `env.ts`.

### Allure Report Integration

- Each key action is logged as a step via `allure.step()`
- Screenshots and traces are automatically collected on test failure
- Detailed reports with steps, screenshots, and error information are generated

---

## Test Coverage

| TC | Тестувальник | Опис |
|----|---|---|
| TC-01 | Tester 1 | Форма "Create News" містить всі поля у правильному порядку |
| TC-02 | Tester 1 | Валідація поля "Title" (обов'язкове, макс. 170 символів), Publish заблокований |
| TC-03 | Tester 1 | Вибір від 1 до 3 тегів, 4-й тег заблокований |
| TC-04 | Tester 2 | Валідація поля завантаження зображення (PNG/JPG, макс. 10MB) |
| TC-05 | Tester 3 | Валідація поля "Main Text" (мін. 20, макс. 63206 символів) |
| TC-06 | Tester 3 | Валідація поля "Source" (опціональне, валідний URL) |
| TC-07 | QA Engineer | Перевірка кнопки "Cancel" з модальним вікном підтвердження |

### TC-07: Перевірка кнопки "Cancel" з модальним вікном підтвердження

**Два сценарії:**

1. **Успішне закриття форми**
   - Натиснути "Cancel"
   - Перевірити, що з'являється модальне вікно з повідомленням
   - Натиснути "Yes, cancel"
   - Перевірити закриття форми та перенаправлення на сторінку новин

2. **Продовження редагування**
   - Натиснути "Cancel"
   - Перевірити модальне вікно
   - Натиснути "Continue editing"
   - Перевірити, що форма залишається відкритою з збереженими даними

---

## Playwright Configuration

```typescript
// playwright.config.ts
{
  baseURL: 'https://www.greencity.cx.ua/#/greenCity',
  trace: 'retain-on-failure',      // Collect trace on test failure
  screenshot: 'only-on-failure',   // Screenshot only on error
}
```

---

## Generating Allure Report

```bash
# Run tests
npx playwright test

# Generate report
npx allure generate allure-results --clean -o allure-report

# Open in browser
npx allure open allure-report
```

> Install Allure CLI: `npm install -g allure-commandline`

---

## Authentication Setup

Tests TC-01–TC-07 use stored session state (`auth.json`).

To generate `auth.json`, run:

```bash
npx playwright test tests/auth.setup.spec.ts --headed
```

Manually log in on the site in the opened browser, then close the browser or click Resume in Playwright Inspector. The `auth.json` file will be saved automatically.

> `auth.json` is listed in `.gitignore` and is not committed to the repository.

---

## Test Results

After running tests, results are available in:
- HTML report: `test-results/index.html`
- JSON report: `test-results/results.json`
- Allure report: `allure-report/index.html`
- Screenshots: `test-results/`
- Traces: `test-results/`

---

## Debugging

```bash
# Run tests in debug mode with Playwright Inspector
npx playwright test --debug
```

In the Playwright Inspector, you can:
- Step through tests line by line
- Verify element locators
- Modify tests in real-time

---

## Notes

- All tests are independent from each other
- Tests are cleaned up in `afterEach`
- Locators are optimized for text-based selection (most stable approach)
- All page methods are logged in Allure reports
- TC-07 tests are stored in `tests/tc-07.spec.ts`
- Page objects and components for TC-07 extend the base classes properly

---

## References

- [Playwright Documentation](https://playwright.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Allure Report](https://docs.qameta.io/allure)
- [GreenCity Platform](https://www.greencity.cx.ua)

---

## Contributing

When adding new tests:
1. Create a new test file: `tests/tc-XX.spec.ts`
2. Use existing Page Objects or create new ones in `pages/`
3. Add logging via `allure.step()`
4. Run tests: `npx playwright test`
5. Ensure all tests are independent
6. Update this README with test coverage information
