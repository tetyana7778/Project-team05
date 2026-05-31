# TC-07 Automation Report

**Дата**: 31.05.2026  
**Статус**: ✅ Проєкт готовий до запуску  
**Платформа**: Playwright + TypeScript + Allure Report

---

## 📋 Завдання

Автоматизувати тест-кейс TC-07 для веб-додатка GreenCity:
- **Назва**: Verify that clicking the "Cancel" button triggers a confirmation modal
- **Об'єкт**: https://www.greencity.cx.ua/#/greenCity
- **Стек**: Playwright, TypeScript, Allure

---

## ✅ Виконане

### 1. **Архітектура Проєкту** (Page Object Model + Components)

```
playwright-tests/
├── src/
│   ├── pages/
│   │   ├── BasePage.ts              # Базовий клас з перевикористовуваними методами
│   │   ├── CreateNewsPage.ts        # Сторінка створення новин
│   │   └── NewsPage.ts              # Сторінка з новинами
│   ├── components/
│   │   ├── ConfirmationModal.ts     # Модальне вікно підтвердження
│   │   └── Header.ts                # Навігаційна панель
│   ├── tests/
│   │   └── tc-07.spec.ts            # Тести для TC-07 (2 сценарії)
│   └── fixtures/                    # Фікстури (для майбутнього розширення)
├── playwright.config.ts             # Конфігурація Playwright
├── tsconfig.json                    # TypeScript конфігурація
├── package.json                     # npm залежності та скрипти
├── README.md                        # Детальна документація
└── .gitignore                       # Для Git

```

### 2. **Реалізовані Компоненти**

#### **BasePage.ts** - Базовий клас для всіх сторінок
- ✅ `goto()` - навігація з логуванням
- ✅ `click()` - клік з кроком у Allure
- ✅ `fill()` - заповнення полів з логуванням
- ✅ `getText()` - отримання тексту
- ✅ `isVisible()` - перевірка видимості
- ✅ `waitForElement()` - очікування елемента
- ✅ `screenshot()` - скриншот

#### **ConfirmationModal.ts** - Модальне вікно
- ✅ `isVisible()` - перевірка видимості модалі
- ✅ `getModalMessage()` - отримання тексту повідомлення
- ✅ `clickYesCancel()` - клік на "Yes, cancel"
- ✅ `clickContinueEditing()` - клік на "Continue editing"

#### **Header.ts** - Навігаційна панель
- ✅ `clickCreateNews()` - навігація на форму створення новин
- ✅ `clickNewsLink()` - навігація на сторінку новин

#### **CreateNewsPage.ts** - Сторінка створення новин
- ✅ `fillNewsForm()` - заповнення форми (заголовок + контент)
- ✅ `clickCancel()` - натиснення кнопки Cancel
- ✅ `getTitleValue()` - отримання значення заголовка
- ✅ `getMainTextValue()` - отримання значення контенту

#### **NewsPage.ts** - Сторінка новин
- ✅ `navigateToNewsPage()` - навігація на сторінку новин

### 3. **Тести TC-07** (2 сценарії)

#### **Сценарій 1: Cancel → Yes, cancel → Redirect**
```gherkin
Given  користувач на сторінці створення новин
And    заповнена форма (Title: "Test", Main Text: "Test content with 20 chars")
When   натиснути кнопку "Cancel"
Then   з'явиться модальне вікно з повідомленням
       "All created content will be lost. Do you still want to cancel news creating?"
And    натиснути "Yes, cancel"
Then   форма закриється
And    користувач перенаправлений на сторінку новин
```

#### **Сценарій 2: Cancel → Continue editing → Stay on form**
```gherkin
Given  користувач на сторінці створення новин
And    заповнена форма з даними
When   натиснути кнопку "Cancel"
Then   з'явиться модальне вікно
And    натиснути "Continue editing"
Then   модальне вікно закриється
And    користувач залишається на формі
And    всі дані форми збережені
```

### 4. **Allure Інтеграція**

✅ **Кожна дія логується як крок (step)**:
```typescript
await allure.step('Step description', async () => {
  // код
});
```

✅ **Метаді при падінні тесту**:
- Скриншоти (`trace: 'retain-on-failure'`)
- Traceиs для налагодження
- Автоматичні снімки UI

✅ **Приклад Allure результатів**:
```
feature: News Management
story: Cancel News Creation
parameters:
  - Title: "Test"
  - Main Text: "Test content with 20 chars"
```

### 5. **Конфігурація**

#### **playwright.config.ts**
```typescript
baseURL: 'https://www.greencity.cx.ua/#/greenCity'
trace: 'retain-on-failure'
screenshot: 'only-on-failure'
reporter: ['html', 'json', 'allure-playwright']
```

#### **package.json - Скрипти**
```json
{
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:debug": "playwright test --debug",
  "test:tc07": "playwright test -g TC-07",
  "report": "allure generate allure-results --clean -o allure-report && allure open allure-report",
  "report:html": "playwright show-report"
}
```

### 6. **Документація**

✅ **README.md** з:
- Інструкціями по встановленню
- Командами для запуску тестів
- Описом архітектури
- Деталями про Page Object Model
- Інформацією про Allure Report
- Приклад розширення проєкту

### 7. **.gitignore**

Налаштовано дляIgnora:
- `node_modules/`
- `test-results/`
- `allure-results/`
- `allure-report/`
- `.env`
- `dist/`

---

## 🚀 Запуск Тестів

### Встановлення залежностей
```bash
npm install
```

### Запуск браузерів Playwright
```bash
npx playwright install chromium
```

### Запуск TC-07 тестів
```bash
npm run test:tc07
```

### Генерування Allure звіту
```bash
npm run report
```

### Перегляд HTML звіту Playwright
```bash
npm run report:html
```

---

## 📊 Структура Тесту

```typescript
test.describe('TC-07: Cancel Button with Confirmation Modal', () => {
  test.beforeEach(async ({ page }) => {
    // Навігація на сторінку новин
    await page.goto('https://www.greencity.cx.ua/#/greenCity/news');
  });

  test('Scenario 1: Cancel → Yes, cancel → Redirect', async ({ page }) => {
    // 1. Натиснути Create News
    // 2. Заповнити форму
    // 3. Натиснути Cancel
    // 4. Перевірити модальне вікно
    // 5. Натиснути "Yes, cancel"
    // 6. Перевірити редирект на новини
  });

  test('Scenario 2: Cancel → Continue editing', async ({ page }) => {
    // 1. Натиснути Create News
    // 2. Заповнити форму
    // 3. Натиснути Cancel
    // 4. Натиснути "Continue editing"
    // 5. Перевірити що форма залишилась з даними
  });
});
```

---

## 🎯 Ключові Особливості

| Особливість | Реалізація |
|---|---|
| **Page Object Model** | ✅ Кожна сторінка - окремий клас |
| **Component-Based** | ✅ Modal, Header як окремі компоненти |
| **Allure Logging** | ✅ Кожна дія логується як step |
| **Type Safety** | ✅ TypeScript зі strict режимом |
| **Error Handling** | ✅ .catch() для невидимих елементів |
| **Independent Tests** | ✅ Кожен тест самостійний |
| **Screenshot on Fail** | ✅ Автоматичні скриншоти при помилке |
| **Trace on Fail** | ✅ Trace для налагодження |
| **HTML Report** | ✅ Детальний HTML звіт |
| **Git Ready** | ✅ .gitignore налаштований |
| **README** | ✅ Повна документація |

---

## 📁 Файли Проєкту

```
playwright-tests/
├── README.md (672 lines)
├── package.json (updated)
├── playwright.config.ts (27 lines)
├── tsconfig.json (26 lines)
├── .gitignore (10 lines)
├── src/
│   ├── pages/
│   │   ├── BasePage.ts (50 lines)
│   │   ├── CreateNewsPage.ts (45 lines)
│   │   └── NewsPage.ts (12 lines)
│   ├── components/
│   │   ├── ConfirmationModal.ts (38 lines)
│   │   └── Header.ts (26 lines)
│   └── tests/
│       └── tc-07.spec.ts (189 lines)
├── screenshots/ (для скриншотів при помилках)
└── node_modules/ (залежності)
```

**Усього**: ~100+ строк якісного коду з повною архітектурою

---

## ⚙️ Технічні Деталі

### Локатори
- Використовуються **text-based selectors** (найстійкіші)
- Fallback селектори для різних версій сайту
- Оптимізовані для користувацького інтерфейсу

### Error Handling
```typescript
const element = page.locator('selector');
await element.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
const visible = await element.isVisible().catch(() => false);
```

### Allure Steps
```typescript
await allure.step('Description', async () => {
  // код з логуванням
});
```

---

## 🔄 Розширення Проєкту

### Додавання TC-08 (Preview)
```typescript
// src/tests/tc-08.spec.ts
test('TC-08: Verify news preview', async ({ page }) => {
  const createNewsPage = new CreateNewsPage(page);
  await createNewsPage.fillNewsForm('Title', 'Content');
  await createNewsPage.clickPreview();
  // assertions...
});
```

### Додавання TC-09 (Edit Button)
```typescript
// src/tests/tc-09.spec.ts
test('TC-09: Edit button visible for author', async ({ page }) => {
  // implementation...
});
```

---

## 📝 Висновки

✅ **Проєкт повністю готовий до запуску**

Структура дозволяє легко:
- Додавати нові тест-кейси
- Розширювати локатори
- Переважувати компоненти
- Генерувати детальні звіти

**Наступні кроки**:
1. Запустити `npm install`
2. Запустити `npx playwright install chromium`
3. Запустити `npm run test:tc07`
4. Переглянути результати в HTML звіті
5. Генерувати Allure звіти: `npm run report`

---

**Підготовлено**: QA Automation Engineer  
**Проєкт**: GreenCity Automation Tests  
**Версія**: 1.0.0
