# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC02.spec.ts >> TC02 — Валідація поля "Title" >> Валідний заголовок "Test News": лічильник "9/170", рамка нормальна
- Location: tests\TC02.spec.ts:69:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body').locator('h3:has-text("Title") ~ span, h3:has-text("Title") + span').or(locator('body').locator('div:has(h3:has-text("Title")) span').last()).or(locator('body').locator('span').filter({ hasText: /^\d+\/170$/ }))
Expected substring: "9/170"
Error: strict mode violation: locator('body').locator('h3:has-text("Title") ~ span, h3:has-text("Title") + span').or(locator('body').locator('div:has(h3:has-text("Title")) span').last()).or(locator('body').locator('span').filter({ hasText: /^\d+\/170$/ })) resolved to 2 elements:
    1) <span class="field-info" _ngcontent-ng-c890437260=""> 9/170 </span> aka getByText('/170')
    2) <span _ngcontent-ng-c2941512051="">Follow us</span> aka getByText('Follow us')

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body').locator('h3:has-text("Title") ~ span, h3:has-text("Title") + span').or(locator('body').locator('div:has(h3:has-text("Title")) span').last()).or(locator('body').locator('span').filter({ hasText: /^\d+\/170$/ }))

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - link "skip to the main content" [ref=e6] [cursor=pointer]:
        - /url: .main-content
      - banner "Welcome to header" [ref=e7]:
        - generic [ref=e9]:
          - link "Image green city logo" [ref=e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link "Image green city logo" [ref=e11]
          - generic [ref=e12]:
            - navigation [ref=e13]:
              - tablist [ref=e14]:
                - listitem [ref=e15]:
                  - link "Eco news" [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=e17]:
                  - link "Events" [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=e19]:
                  - link "Places" [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=e21]:
                  - link "About us" [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=e23]:
                  - link "My space" [ref=e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=e25]:
                  - link "UBS courier" [ref=e26] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=e28]:
              - listitem "site bookmark" [ref=e29] [cursor=pointer]:
                - img [ref=e30]
              - listitem "site notification" [ref=e31] [cursor=pointer]:
                - img [ref=e32]
              - search "site search" [ref=e33] [cursor=pointer]:
                - img [ref=e34]
              - menu "language switcher" [ref=e35]:
                - option "english" [ref=e36] [cursor=pointer]:
                  - generic [ref=e37]: En
                  - img [ref=e38]
              - menu "profile options collapsed" [ref=e39]:
                - listitem [ref=e40] [cursor=pointer]: Тестовий юзер
      - generic [ref=e41]:
        - generic "Tab To Main"
        - generic [ref=e42]:
          - main [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e48]:
                - heading "Create news" [level=2] [ref=e49]
                - paragraph [ref=e51]: Please provide as many details as you can - place and time of the event, the goal of gathering, etc. You can come back and update news anytime after publishing.
              - generic [ref=e53]:
                - generic [ref=e54]:
                  - generic [ref=e55]:
                    - generic [ref=e56]:
                      - heading "Title" [level=3] [ref=e57]
                      - generic [ref=e58]: 9/170
                    - textbox [active] [ref=e60]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                      - text: Test News
                  - generic [ref=e61]:
                    - heading "Pick tags for news" [level=3] [ref=e62]
                    - paragraph [ref=e63]: Only 3 tags can be added
                    - generic [ref=e65]:
                      - button "News" [ref=e66] [cursor=pointer]:
                        - generic [ref=e68]: News
                      - button "Events" [ref=e69] [cursor=pointer]:
                        - generic [ref=e71]: Events
                      - button "Education" [ref=e72] [cursor=pointer]:
                        - generic [ref=e74]: Education
                      - button "Initiatives" [ref=e75] [cursor=pointer]:
                        - generic [ref=e77]: Initiatives
                      - button "Ads" [ref=e78] [cursor=pointer]:
                        - generic [ref=e80]: Ads
                  - generic [ref=e81]:
                    - generic [ref=e82]:
                      - heading "Source (optional)" [level=3] [ref=e83]
                      - generic [ref=e84]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e86]:
                      - /placeholder: Link to external source
                  - generic [ref=e87]:
                    - heading "Picture (optional)" [level=3] [ref=e88]
                    - generic [ref=e89]:
                      - generic [ref=e92]:
                        - text: Drop your image here or
                        - generic [ref=e93]: browse
                        - button "browse" [ref=e94]
                      - generic [ref=e95]:
                        - generic "Crop photo" [ref=e99]
                        - generic [ref=e112]:
                          - button "Cancel" [ref=e113] [cursor=pointer]
                          - button "Submit" [ref=e114] [cursor=pointer]
                      - paragraph [ref=e115]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e116]:
                  - generic [ref=e117]:
                    - heading "Content" [level=3] [ref=e118]
                    - paragraph [ref=e119]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e120]:
                    - generic [ref=e121]:
                      - generic [ref=e122]:
                        - button [ref=e123] [cursor=pointer]:
                          - img [ref=e124]
                        - button [ref=e127] [cursor=pointer]:
                          - img [ref=e128]
                        - button [ref=e130] [cursor=pointer]:
                          - img [ref=e131]
                        - button [ref=e134] [cursor=pointer]:
                          - img [ref=e135]
                      - generic [ref=e139]:
                        - button [ref=e140] [cursor=pointer]:
                          - img [ref=e141]
                        - button [ref=e146] [cursor=pointer]:
                          - img [ref=e147]
                      - generic [ref=e151]:
                        - button [ref=e152] [cursor=pointer]:
                          - img [ref=e153]
                        - button [ref=e155] [cursor=pointer]:
                          - img [ref=e156]
                      - generic [ref=e158]:
                        - button [ref=e159] [cursor=pointer]:
                          - img [ref=e160]
                        - button [ref=e164] [cursor=pointer]:
                          - img [ref=e165]
                      - generic [ref=e166]:
                        - button [ref=e167] [cursor=pointer]:
                          - img [ref=e168]
                        - button [ref=e171] [cursor=pointer]:
                          - img [ref=e172]
                      - generic [ref=e175]:
                        - button [ref=e176] [cursor=pointer]:
                          - img [ref=e177]
                        - button [ref=e179] [cursor=pointer]:
                          - img [ref=e180]
                      - button [ref=e183] [cursor=pointer]:
                        - img [ref=e184]
                      - generic [ref=e190]:
                        - button "Normal" [ref=e191] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e192]
                        - text: Small Normal Large Huge
                      - generic [ref=e196]:
                        - button "Normal" [ref=e197] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e198]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e201]:
                        - button [ref=e203] [cursor=pointer]:
                          - img [ref=e204]
                        - button [ref=e207] [cursor=pointer]:
                          - img [ref=e208]
                      - generic [ref=e258]:
                        - button "Sans Serif" [ref=e259] [cursor=pointer]:
                          - text: Sans Serif
                          - img [ref=e260]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e265] [cursor=pointer]:
                        - img [ref=e266]
                      - button [ref=e268] [cursor=pointer]:
                        - img [ref=e269]
                      - generic [ref=e274]:
                        - button [ref=e275] [cursor=pointer]:
                          - img [ref=e276]
                        - button [ref=e280] [cursor=pointer]:
                          - img [ref=e281]
                        - button [ref=e285] [cursor=pointer]:
                          - img [ref=e286]
                      - button [ref=e300] [cursor=pointer]:
                        - img [ref=e301]
                    - generic [ref=e306]:
                      - generic [ref=e307]:
                        - text: e.g. Short description of news, agenda for event
                        - paragraph [ref=e308]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e309]:
                  - paragraph [ref=e310]: "Date: Jun 2, 2026"
                  - paragraph [ref=e311]: "Author: Тестовий юзер"
                - generic [ref=e312]:
                  - button "Cancel" [ref=e313] [cursor=pointer]
                  - button "Preview" [ref=e314] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e315]
          - contentinfo [ref=e317]:
            - generic [ref=e318]:
              - generic [ref=e319]:
                - link "GreenCity home" [ref=e321] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e322]
                - navigation [ref=e323]:
                  - menu [ref=e324]:
                    - listitem [ref=e325]:
                      - link "Eco news" [ref=e326] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e327]:
                      - link "Events" [ref=e328] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e329]:
                      - link "Places" [ref=e330] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e331]:
                      - link "About Us" [ref=e332] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e333]:
                      - link "My Space" [ref=e334] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2637"
                    - listitem [ref=e335]:
                      - link "UBS Courier" [ref=e336] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e337]:
                    - listitem [ref=e338]:
                      - paragraph [ref=e339]: Follow us
                    - listitem [ref=e340]:
                      - link "Twitter link" [ref=e341] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e342]
                      - link "LinkedIn link" [ref=e343] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e344]
                      - link "Facebook link" [ref=e345] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e346]
                      - link "Instagram link" [ref=e347] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e348]
                      - link "YouTube link" [ref=e349] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e350]
              - generic [ref=e351]: © Copyright 2026. Green City.
    - button "chat" [ref=e352] [cursor=pointer]:
      - img "chat" [ref=e353]
  - generic [ref=e354]: Welcome to the search window
```

# Test source

```ts
  1   | import { test, expect, BrowserContext, Page } from '@playwright/test';
  2   | import { CreateNewsPage } from '../pages/CreateNewsPage';
  3   | 
  4   | test.describe('TC02 — Валідація поля "Title"', () => {
  5   |   let createNewsPage: CreateNewsPage;
  6   |   let context: BrowserContext;
  7   |   let page: Page;
  8   | 
  9   |   test.beforeEach(async ({ browser }) => {
  10  |     context = await browser.newContext({ storageState: 'auth.json' });
  11  |     page = await context.newPage();
  12  |     createNewsPage = new CreateNewsPage(page, page.locator('body'));
  13  | 
  14  |     await test.step('Відкрити форму створення новини', async () => {
  15  |       await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
  16  |       await page.waitForLoadState('networkidle');
  17  |     });
  18  |   });
  19  | 
  20  |   test.afterEach(async () => {
  21  |     await context.close();
  22  |   });
  23  | 
  24  |   // ─── Тест 1: Початковий стан — порожнє поле ──────────────────────────────
  25  | 
  26  |   test('Порожнє поле Title: червона рамка, лічильник "0/170", Publish заблокований', async () => {
  27  |     await test.step('Клікнути на поле Title і покинути його (спровокувати стан "touched")', async () => {
  28  |       await createNewsPage.titleInput.click();
  29  |       // Клік на нейтральній зоні (contentArea) дає focus-out на titleInput
  30  |       await createNewsPage.contentArea.click();
  31  |     });
  32  | 
  33  |     await test.step('Перевірити, що рамка поля Title підсвічена червоним (клас ng-invalid)', async () => {
  34  |       await expect(createNewsPage.titleInput).toHaveClass(/ng-invalid/);
  35  |     });
  36  | 
  37  |     await test.step('Перевірити, що кнопка "Publish" заблокована', async () => {
  38  |       await expect(createNewsPage.publishButton).toBeDisabled();
  39  |     });
  40  | 
  41  |     await test.step('Перевірити, що лічильник відображає "0/170"', async () => {
  42  |       await expect(createNewsPage.titleCounter).toContainText('0/170');
  43  |     });
  44  |   });
  45  | 
  46  |   // ─── Тест 2: Введення 171 символу — обрізання до 170 ─────────────────────
  47  | 
  48  |   test('Введення 171 символу: текст обрізається до 170, лічильник підсвічений червоним', async () => {
  49  |     const stringOver171 = 'A'.repeat(171);
  50  | 
  51  |     await test.step('Ввести рядок з 171 символів у поле Title', async () => {
  52  |       await createNewsPage.titleInput.fill(stringOver171);
  53  |     });
  54  | 
  55  |     await test.step('Перевірити, що значення поля містить рівно 170 символів (обрізання)', async () => {
  56  |       const value = await createNewsPage.titleInput.inputValue();
  57  |       expect(value.length).toBe(170);
  58  |     });
  59  | 
  60  |     await test.step('Перевірити, що лічильник підсвічений червоним при перевищенні ліміту', async () => {
  61  |       // Після набору максимуму сайт додає клас на лічильник або показує 170/170
  62  |       await expect(createNewsPage.titleCounter).toContainText('170/170');
  63  |       await expect(createNewsPage.titleCounter).toHaveClass(/ng-invalid|warning|exceeded/i);
  64  |     });
  65  |   });
  66  | 
  67  |   // ─── Тест 3: Валідний заголовок — нормальний стан ────────────────────────
  68  | 
  69  |   test('Валідний заголовок "Test News": лічильник "9/170", рамка нормальна', async () => {
  70  |     await test.step('Ввести валідний заголовок "Test News" (9 символів)', async () => {
  71  |       await createNewsPage.titleInput.fill('Test News');
  72  |     });
  73  | 
  74  |     await test.step('Перевірити, що лічильник відображає "9/170"', async () => {
> 75  |       await expect(createNewsPage.titleCounter).toContainText('9/170');
      |                                                 ^ Error: expect(locator).toContainText(expected) failed
  76  |     });
  77  | 
  78  |     await test.step('Перевірити, що рамка поля Title не червона (ng-valid)', async () => {
  79  |       await expect(createNewsPage.titleInput).not.toHaveClass(/ng-invalid/);
  80  |     });
  81  |   });
  82  | 
  83  |   // ─── Тест 4: Publish стає активним після заповнення всіх обов'язкових полів
  84  | 
  85  |   test('Publish заблокований до заповнення Title + тегу + Main Text, потім стає активним', async () => {
  86  |     await test.step('Ввести валідний заголовок', async () => {
  87  |       await createNewsPage.titleInput.fill('Test News TC02');
  88  |     });
  89  | 
  90  |     await test.step('Перевірити, що Publish заблокований (тег і Main Text відсутні)', async () => {
  91  |       await expect(createNewsPage.publishButton).toBeDisabled();
  92  |     });
  93  | 
  94  |     await test.step('Вибрати тег "News"', async () => {
  95  |       await createNewsPage.newsTag.click();
  96  |     });
  97  | 
  98  |     await test.step('Перевірити, що Publish все ще заблокований (Main Text відсутній)', async () => {
  99  |       await expect(createNewsPage.publishButton).toBeDisabled();
  100 |     });
  101 | 
  102 |     await test.step('Ввести валідний текст у поле Main Text (більше 20 символів)', async () => {
  103 |       await createNewsPage.contentArea.click();
  104 |       await createNewsPage.contentArea.fill('Це достатньо довгий тестовий текст для валідної публікації.');
  105 |     });
  106 | 
  107 |     await test.step('Перевірити, що кнопка Publish стала активною', async () => {
  108 |       await expect(createNewsPage.publishButton).toBeEnabled({ timeout: 5000 });
  109 |     });
  110 |   });
  111 | });
```