# 📁 Структура Проєкту GreenCity Automation Tests

## 📂 Директорія: playwright-tests/

```
playwright-tests/
│
├── 📄 package.json                    # npm залежності та скрипти
├── 📄 tsconfig.json                   # TypeScript конфігурація
├── 📄 playwright.config.ts            # Конфігурація Playwright (baseURL, reporters)
├── 📄 README.md                       # Детальна документація проєкту
├── 📄 .gitignore                      # Ігнорування для Git
│
├── 📁 src/                            # Вихідний код
│   │
│   ├── 📁 pages/                      # Page Object Model (POM)
│   │   ├── BasePage.ts                # Базовий клас для всіх сторінок
│   │   ├── CreateNewsPage.ts          # Сторінка створення новин
│   │   └── NewsPage.ts                # Сторінка перегляду новин
│   │
│   ├── 📁 components/                 # Переважні компоненти UI
│   │   ├── ConfirmationModal.ts       # Модальне вікно підтвердження
│   │   └── Header.ts                  # Навігаційна панель сайту
│   │
│   ├── 📁 tests/                      # Тест-файли
│   │   └── tc-07.spec.ts              # Тести для TC-07 (2 сценарії)
│   │
│   └── 📁 fixtures/                   # Фікстури для тестів (розширення в майбутньому)
│
├── 📁 screenshots/                    # Скриншоти при помилках тестів
│
├── 📁 test-results/                   # Результати тестування
│   ├── index.html                     # HTML звіт
│   └── results.json                   # JSON звіти
│
├── 📁 allure-results/                 # Результати для Allure Report
│
├── 📁 allure-report/                  # Генерований Allure звіт
│
└── 📁 node_modules/                   # npm залежності (у .gitignore)
```

---

## 📄 Опис Файлів

### 🎯 Кореневі Конфігураційні Файли

#### **package.json**
```json
{
  "name": "greencity-tests",
  "version": "1.0.0",
  "scripts": {
    "test": "playwright test",
    "test:tc07": "playwright test -g TC-07",
    "report": "allure generate allure-results -o allure-report && allure open allure-report"
  }
}
```
- Описує npm залежності
- Визначає команди для запуску тестів
- Налаштовує Playwright, TypeScript, Allure

#### **tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true
  }
}
```
- Конфігурація TypeScript компілятора
- Використання ES2020 і common.js модулів
- Strict mode для безпеки типів

#### **playwright.config.ts**
```typescript
export default defineConfig({
  testDir: './src/tests',
  use: {
    baseURL: 'https://www.greencity.cx.ua/#/greenCity',
    trace: 'retain-on-failure'
  }
})
```
- Базовий URL для всіх тестів
- Налаштування браузерів
- Кількість воркерів і retries
- Reporters (HTML, JSON, Allure)

#### **.gitignore**
```
node_modules/
test-results/
allure-results/
allure-report/
.env
```
- Файли, які не потрібні в Git репозиторії

---

## 📂 src/pages/ - Page Object Model (POM)

### **BasePage.ts** (50 рядків)
Базовий клас для всіх сторінок з перевикористовуваними методами:

```typescript
export class BasePage {
  constructor(page: Page) { }
  
  async goto(url: string): Promise<void>           // Навігація з логуванням
  async click(locator: Locator, desc: string)      // Клік з кроком
  async fill(locator: Locator, text: string)       // Заповнення поля
  async getText(locator: Locator): Promise<string> // Отримати текст
  async isVisible(locator: Locator): Promise<bool> // Перевірка видимості
  async waitForElement(locator: Locator)           // Очікування елемента
  async screenshot(name: string)                   // Скриншот
}
```

**Використання**:
```typescript
const page = new CreateNewsPage(browser.page);
await page.click(element, 'Click button');
await page.fill(element, 'Text', 'Fill field');
```

---

### **CreateNewsPage.ts** (45 рядків)
Сторінка створення новин (наслідує BasePage):

```typescript
export class CreateNewsPage extends BasePage {
  readonly titleField: Locator
  readonly mainTextField: Locator
  readonly cancelButton: Locator
  readonly confirmationModal: ConfirmationModal
  
  async fillNewsForm(title: string, mainText: string)
  async clickCancel(): Promise<void>
  async getTitleValue(): Promise<string>
  async getMainTextValue(): Promise<string>
}
```

**Локатори**:
- `input[placeholder*="Title"]` - Поле заголовка
- `textarea[placeholder*="Main Text"]` - Поле контенту
- `button:has-text("Cancel")` - Кнопка Cancel
- `[role="dialog"]` - Модальне вікно

**Приклад використання**:
```typescript
const newsPage = new CreateNewsPage(page);
await newsPage.fillNewsForm('Test', 'Test content with 20 chars');
await newsPage.clickCancel();
```

---

### **NewsPage.ts** (12 рядків)
Сторінка перегляду новин:

```typescript
export class NewsPage extends BasePage {
  readonly header: Header
  
  async navigateToNewsPage(): Promise<void>
}
```

**Використання**:
```typescript
const newsPage = new NewsPage(page);
await newsPage.navigateToNewsPage();
```

---

## 📂 src/components/ - Компоненти UI

### **ConfirmationModal.ts** (38 рядків)
Модальне вікно підтвердження:

```typescript
export class ConfirmationModal {
  readonly page: Page
  readonly modal: Locator
  readonly messageText: Locator
  readonly yesButton: Locator
  readonly continueEditingButton: Locator
  
  async isVisible(): Promise<boolean>
  async getModalMessage(): Promise<string>
  async clickYesCancel(): Promise<void>
  async clickContinueEditing(): Promise<void>
}
```

**Локатори**:
- `[role="dialog"]` - Модальне вікно
- `button:has-text("Yes, cancel")` - Кнопка підтвердження
- `button:has-text("Continue editing")` - Кнопка продовження

**Приклад використання**:
```typescript
const modal = new ConfirmationModal(page);
if (await modal.isVisible()) {
  const message = await modal.getModalMessage();
  await modal.clickYesCancel();
}
```

---

### **Header.ts** (26 рядків)
Навігаційна панель сайту:

```typescript
export class Header {
  readonly page: Page
  readonly createNewsButton: Locator
  readonly newsLink: Locator
  
  async clickCreateNews(): Promise<void>
  async clickNewsLink(): Promise<void>
}
```

**Локатори**:
- `a:has-text("Create News")` - Посилання на створення новин
- `a[href*="news"]` - Посилання на новини

**Приклад використання**:
```typescript
const header = new Header(page);
await header.clickCreateNews();
```

---

## 📂 src/tests/ - Тести

### **tc-07.spec.ts** (189 рядків)

#### Тест 1: Cancel → Yes → Redirect
```gherkin
Given   користувач на формі створення новин
And     заповлені поля (Title: "Test", Content: "Test content with 20 chars")
When    натиснути "Cancel"
Then    модальне вікно з'явиться
And     натиснути "Yes, cancel"
Then    форма закриється
And     редирект на сторінку новин
```

#### Тест 2: Cancel → Continue → Stay
```gherkin
Given   користувач на формі створення новин
And     заповлені поля
When    натиснути "Cancel"
And     натиснути "Continue editing"
Then    форма залишається відкритою
And     дані збережені
```

**Використані компоненти**:
- BasePage (для базових операцій)
- CreateNewsPage (заповнення форми)
- ConfirmationModal (перевірка модалі)
- Allure (логування кроків)

---

## 📂 src/fixtures/ (Розширення)

Для майбутнього розширення проєкту можна додати фікстури:
- Дефолтні користувачі
- Передумови для тестів
- Mock дані

```typescript
// example.fixture.ts
export const testUser = {
  email: 'test@example.com',
  password: 'password123'
};
```

---

## 🔗 Залежності (package.json)

```json
{
  "devDependencies": {
    "@playwright/test": "^1.44.0",
    "@types/node": "^20.10.0",
    "allure-playwright": "^2.13.0",
    "typescript": "^5.3.3",
    "ts-node": "^10.9.2",
    "@types/dotenv": "^6.1.1",
    "dotenv": "^17.4.2"
  }
}
```

---

## 📊 Результати Тестування

### **test-results/** - HTML Звіти Playwright
```
test-results/
├── index.html                     # Основний звіт
├── results.json                   # JSON результати
└── tc-07-*-chromium/
    ├── trace.zip                  # Для debug
    └── screenshots/               # При помилках
```

### **allure-results/** - Дані для Allure
```
allure-results/
├── 1234-result.json              # Результат тесту 1
├── 5678-result.json              # Результат тесту 2
└── history/                      # Історія тестів
```

### **allure-report/** - Веб-звіт Allure
```
allure-report/
├── index.html                    # Головна сторінка
├── status.json                   # Статус звіту
└── data/                         # Дані звіту
```

---

## 🔄 Робочий Процес

```
┌─────────────────────┐
│ npm install         │ Встановити залежності
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ playwright install  │ Завантажити браузери
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ npm run test:tc07   │ Запустити тести
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ npm run report      │ Генерувати звіти
└─────────────────────┘
```

---

## 🎯 Розширення Проєкту

### Додати TC-08 (Preview)
1. Створити `src/tests/tc-08.spec.ts`
2. Додати методи в `CreateNewsPage.ts`:
   - `async clickPreview()`
   - `async verifyPreview()`
3. Додати компонент `PreviewModal.ts`

### Додати TC-09 (Edit Button)
1. Створити `src/tests/tc-09.spec.ts`
2. Оновити `NewsPage.ts` для видимості Edit кнопки
3. Створити `EditNewsPage.ts`

### Додати Login
1. Створити `LoginPage.ts` в `src/pages/`
2. Додати фікстуру користувача в `src/fixtures/`
3. Використати в `beforeEach` хуку

---

## 📝 Файли на Git

```bash
# Додати до репозиторію
git add -A

# Файли що буде закомічено:
- src/
- playwright.config.ts
- tsconfig.json
- package.json
- README.md
- .gitignore

# Файли що ігноруються:
- node_modules/
- test-results/
- allure-results/
- allure-report/
- .env
```

---

## 🚀 Запуск Проєкту

```powershell
# Перейти до папки
cd playwright-tests

# Встановити залежності
npm install

# Встановити браузери
npx playwright install

# Запустити TC-07
npm run test:tc07

# Переглянути звіти
npm run report
```

---

**Остання оновлення**: 31.05.2026  
**Версія**: 1.0.0  
**Статус**: ✅ Готовий до запуску
