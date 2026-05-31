# 🚀 Інструкція з Запуску TC-07 Automation Tests

## 📦 Передумови

- **Node.js**: >= 18.0.0 (перевірити: `node --version`)
- **npm**: >= 9.0.0 (перевірити: `npm --version`)
- **Internet**: Для завантаження браузерів та залежностей

---

## 🔧 Крок 1: Встановлення Залежностей

### Перейти в папку проєкту
```powershell
cd "d:\Автоматизація\Проєктне завдання\ProjektTask\playwright-tests"
```

### Встановити npm пакети
```powershell
npm install
```

**Очікуваний результат**: Буде створена папка `node_modules/` з усіма залежностями

---

## 🌐 Крок 2: Встановлення Браузерів

### Встановити Chromium браузер
```powershell
npx playwright install chromium
```

**Якщо виникла помилка**, спробуйте:
```powershell
npx playwright install chromium --with-deps
```

**Або встановіть всі браузери**:
```powershell
npx playwright install
```

**Очікуваний результат**: Браузер буде завантажений в `~/.ms-playwright/`

---

## ✅ Крок 3: Запуск Тестів

### Запустити лише TC-07 тести
```powershell
npm run test:tc07
```

### Запустити всі тести з браузером
```powershell
npm run test:headed
```

### Запустити з інтерактивним налагодженням
```powershell
npm run test:debug
```

### Запустити всі тести
```powershell
npm test
```

---

## 📊 Крок 4: Перегляд Результатів

### Переглянути HTML звіт Playwright (автоматично відкриється)
```powershell
npm run report:html
```

### Генерувати та переглянути Allure звіт
```powershell
npm run report
```

**Альтернативно** (якщо `allure open` не працює):
```powershell
allure generate allure-results --clean -o allure-report
```

---

## 🐛 Налагодження

### Якщо браузер не встановлений

**Помилка:**
```
Error: browserType.launch: Executable doesn't exist at
C:\Users\...\ms-playwright\chromium_headless_shell-...\
```

**Рішення:**
```powershell
# Очистити старий кеш
Remove-Item -Recurse "$env:APPDATA\npm-cache"

# Переустановити браузери
npx playwright install --with-deps chromium
```

---

### Якщо не знайтись елементи на сторінці

**Причина**: Селектори потребують оновлення (дизайн сайту змінився)

**Рішення**:
```powershell
# Запустити в режимі debug
npm run test:debug

# Інспектор Playwright дозволить:
# - Пройти кроки вручну
# - Перевірити селектори
# - Оновити локатори в коді
```

---

### Якщо тесты падають з timeout

**Причина**: Вебсайт повільний або немає інтернету

**Рішення**:
```typescript
// Збільшити timeout в тесті
await page.goto('url', { waitUntil: 'domcontentloaded', timeout: 30000 });
```

---

### Якщо немає модального вікна

**Причина**: Селектор для модалі неправильний

**Рішення**:
```powershell
# Запустити debug режим
npm run test:debug

# В інспекторі:
# 1. Натиснути Cancel
# 2. Перевірити CSS селектор модалі
# 3. Оновити ConfirmationModal.ts
```

---

## 📋 Структура Результатів

### После запуска `npm run test:tc07`:

```
playwright-tests/
├── test-results/
│   ├── index.html                    # HTML звіт
│   ├── results.json                  # JSON звіт
│   └── tc-07-*-chromium/
│       ├── test-finished-1.json
│       ├── trace.zip                 # Для debug
│       └── screenshots/ (якщо помилка)
│
├── allure-results/
│   ├── *.json                        # Allure звіти
│
└── allure-report/
    └── index.html                    # Allure UI звіт
```

---

## 💾 Скрипти package.json

| Скрипт | Описання |
|---|---|
| `npm test` | Запустити всі тести |
| `npm run test:tc07` | Запустити лише TC-07 |
| `npm run test:headed` | З видимим браузером |
| `npm run test:debug` | Інтерактивний debug |
| `npm run report:html` | HTML звіт Playwright |
| `npm run report` | Allure звіт |

---

## 🌍 Перевірка Підключення до Сайту

Перед запуском тестів перевірте, що сайт доступний:

```powershell
# Від PowerShell 7+
Invoke-WebRequest -Uri "https://www.greencity.cx.ua/#/greenCity/news" -TimeoutSec 10

# Результат: StatusCode 200
```

---

## 📝 Log Файли

### Переглянути логи тесту
```powershell
cat test-results/results.json | ConvertFrom-Json | ConvertTo-Json
```

### Trace для налагодження
```powershell
npx playwright show-trace test-results/tc-07-*/trace.zip
```

---

## 🔐 Оточення (Env Variables)

Якщо потрібні облікові дані для входу:

1. Створити файл `.env`:
```
ADMIN_EMAIL=test@example.com
ADMIN_PASSWORD=password123
```

2. Оновити тест для використання:
```typescript
import dotenv from 'dotenv';
dotenv.config();

const email = process.env.ADMIN_EMAIL;
```

---

## 🎯 Типові Проблеми та Рішення

### ❌ "npm: terme not found"
```powershell
# Перезавантажити PowerShell як Administrator
# Або використати cmd.exe замість PowerShell
```

### ❌ "Execution policy prevents"
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force
```

### ❌ "Port already in use" (для Allure)
```powershell
# Знайти процес на порту
netstat -ano | findstr :9323

# Вибити процес
taskkill /PID <PID> /F
```

### ❌ "EACCES: permission denied"
```bash
# Запустити як Administrator (Windows)
# Або з sudo (Mac/Linux)
```

---

## 🎓 Наступні Кроки

### 1️⃣ Запустити базовий тест
```powershell
npm run test:tc07
```

### 2️⃣ Переглянути результат
```powershell
npm run report:html
```

### 3️⃣ Якщо сайт змінився, оновити селектори в `src/pages/`

### 4️⃣ Додати нові тест-кейси (TC-08, TC-09 тощо)

---

## 📞 Контакти для Подальшої Допомоги

**Документація**:
- [Playwright Docs](https://playwright.dev)
- [Allure Report](https://docs.qameta.io/allure)
- [TypeScript](https://www.typescriptlang.org)

**GitHub Репозиторій**: (додається пізніше)

**Проєкт**: GreenCity Automation Tests v1.0.0

---

**Успіхів у тестуванні! 🚀**
