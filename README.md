# GreenCity Automation Tests

Автоматизовані тести для веб-додатка GreenCity з використанням Playwright, TypeScript та Allure Report.

## 📋 Вимоги

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

## 🚀 Встановлення та Запуск

### 1. Встановлення залежностей

```bash
npm install
```

### 2. Запуск тестів

#### Запустити всі тести
```bash
npm test
```

#### Запустити тести в режимі браузера (headed)
```bash
npm run test:headed
```

#### Запустити тести в режимі налагодження
```bash
npm run test:debug
```

#### Запустити тільки TC-07
```bash
npm run test:tc07
```

### 3. Генерування Allure звіту

```bash
npm run report
```

Це автоматично:
- Генерує звіт з результатів тестування
- Очищує попередні результати
- Відкриває звіт у браузері

## 📁 Структура Проєкту

```
src/
├── pages/              # Page Object Models
│   ├── BasePage.ts     # Базовий клас для всіх сторінок
│   ├── CreateNewsPage.ts
│   └── NewsPage.ts
├── components/         # Переможні компоненти
│   ├── ConfirmationModal.ts
│   └── Header.ts
├── tests/              # Тест-файли
│   └── tc-07.spec.ts
└── fixtures/           # Фікстури для тестів
playwright.config.ts   # Конфігурація Playwright
tsconfig.json          # Конфігурація TypeScript
```

## 🏗️ Архітектура

### Page Object Model (POM)
Кожна сторінка веб-додатка представлена окремим класом, який містить:
- Локатори для елементів сторінки
- Методи для взаємодії з елементами
- Логування через Allure steps

### Компонентний підхід
Переповторювані елементи (Header, Modal тощо) винесені в окремі компоненти та перевикористовуються в сторінках.

### Allure Report
- Кожна ключова дія логується як крок (step)
- При падінні тесту автоматично збирається скриншот та trace
- Генеруються детальні звіти з кроками, скриншотами та інформацією про помилки

## 🧪 Тест-кейси

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

## 📊 Результати тестування

После запуска тестов:
- HTML звіт: `test-results/index.html`
- JSON звіт: `test-results/results.json`
- Allure звіт: `allure-report/index.html`
- Скриншоти помилок: `test-results/`
- Traceиs: `test-results/`

## ⚙️ Конфігурація

### playwright.config.ts
```typescript
- baseURL: https://www.greencity.cx.ua/#/greenCity
- trace: 'retain-on-failure' - Збирає trace при падінні тесту
- screenshot: 'only-on-failure' - Скриншот тільки при помилці
```

## 🔧 Розширення

### Додавання нового тесту

1. Створити файл `src/tests/tc-XX.spec.ts`
2. Використовувати існуючі Page Objects або створити нові в `src/pages/`
3. Додати logування через `allure.step()`
4. Запустити тест через `npm test`

## 🐛 Налагодження

```bash
npm run test:debug
```

Це запустить Playwright Inspector, де можна:
- Пройти тест крок за кроком
- Перевірити локатори
- Модифікувати тест в реальному часі

## 📝 Примітки

- Всі тести незалежні один від одного
- Тести очищуються в `afterEach`
- Локатори оптимізовані для вибору елементів за текстом (найстійкіші)
- Всі методи сторінок логуються в Allure

## 🔗 Посилання

- [Playwright Документація](https://playwright.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Allure Report](https://docs.qameta.io/allure)
- [GreenCity Platform](https://www.greencity.cx.ua)

## 👨‍💻 Автор

QA Automation Engineer
