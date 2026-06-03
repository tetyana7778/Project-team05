# Project-team05

This repository serves as the **foundational base** for a web application test automation project using Playwright and TypeScript. It establishes the project structure, configuration, and architecture conventions that all further automation work will be built upon — following the **Page Object Model** and **Component-based** patterns.

---

## Tech Stack

- [Playwright](https://playwright.dev/) — cross-browser end-to-end testing
- [TypeScript](https://www.typescriptlang.org/) — type-safe test development
- [dotenv](https://github.com/motdotla/dotenv) — environment variable management

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

# Open the HTML report after a test run
npx playwright show-report
```

---

## Project Structure

```
project-team05/
├── tests/                  # Test files (*.spec.ts)
├── pages/                  # Page Object classes
│   └── base.page.ts        # Abstract base class for all pages
├── components/             # Reusable UI component classes
│   └── base.component.ts   # Abstract base class for all components
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

---
---

## Test Coverage

| TC | Тестувальник | Опис |
|----|---|---|
| TC-01 | Tester 1 | Форма "Create News" містить всі поля у правильному порядку |
| TC-02 | Tester 1 | Валідація поля "Title" (обов'язкове, макс. 170 символів), Publish заблокований |
| TC-03 | Tester 1 | Вибір від 1 до 3 тегів, 4-й тег заблокований |
| TC-04 | Tester 2 | Валідація поля завантаження зображення (PNG/JPG, макс. 10MB) |
| TC-05 | Tester 2 | Валідація поля "Main Text" (мін. 20, макс. 63206 символів) |
| TC-06 | Tester 2 | Валідація поля "Source" (опціональне, валідний URL) |
| TC-07 | QA Engineer | Перевірка кнопки "Cancel" з модальним вікном підтвердження |

---

## Generating Allure Report

```bash
# Запустити тести
npx playwright test

# Згенерувати звіт
npx allure generate allure-results --clean -o allure-report

# Відкрити у браузері
npx allure open allure-report
```

> Встановити Allure CLI: `npm install -g allure-commandline`

---

## Authentication Setup

Тести TC-01–TC-06 використовують збережений стан сесії (`auth.json`).

Щоб отримати `auth.json`, запустіть:

```bash
npx playwright test tests/auth.setup.spec.ts --headed
```

У відкритому браузері вручну залогінтесь на сайті, потім закрийте браузер або натисніть кнопку Resume в Playwright Inspector. Файл `auth.json` буде збережено автоматично.

> `auth.json` додано в `.gitignore` і не потрапляє до репозиторію.
