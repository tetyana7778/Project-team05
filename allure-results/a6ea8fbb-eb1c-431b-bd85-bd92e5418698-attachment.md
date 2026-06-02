# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC03.spec.ts >> TC-03 | Вибір від 1 до 3 тегів, 4-й тег заблокований >> Публікація новини з трьома тегами: News, Events, Education
- Location: tests\TC03.spec.ts:49:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 3
Received: 0
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
                      - generic [ref=e58]: 0/170
                    - textbox [ref=e60]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                  - generic [ref=e61]:
                    - heading "Pick tags for news" [level=3] [ref=e62]
                    - paragraph [ref=e63]: Only 3 tags can be added
                    - generic [ref=e65]:
                      - button "News" [ref=e66] [cursor=pointer]:
                        - generic [ref=e68]: News
                      - button "Events" [ref=e70] [cursor=pointer]:
                        - generic [ref=e72]: Events
                      - button "Education" [ref=e74] [cursor=pointer]:
                        - generic [ref=e76]: Education
                      - button "Initiatives" [ref=e78] [cursor=pointer]:
                        - generic [ref=e80]: Initiatives
                      - button "Ads" [ref=e81] [cursor=pointer]:
                        - generic [ref=e83]: Ads
                  - generic [ref=e84]:
                    - generic [ref=e85]:
                      - heading "Source (optional)" [level=3] [ref=e86]
                      - generic [ref=e87]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e89]:
                      - /placeholder: Link to external source
                  - generic [ref=e90]:
                    - heading "Picture (optional)" [level=3] [ref=e91]
                    - generic [ref=e92]:
                      - generic [ref=e95]:
                        - text: Drop your image here or
                        - generic [ref=e96]: browse
                        - button "browse" [ref=e97]
                      - generic [ref=e98]:
                        - generic "Crop photo" [ref=e102]
                        - generic [ref=e115]:
                          - button "Cancel" [ref=e116] [cursor=pointer]
                          - button "Submit" [ref=e117] [cursor=pointer]
                      - paragraph [ref=e118]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e119]:
                  - generic [ref=e120]:
                    - heading "Content" [level=3] [ref=e121]
                    - paragraph [ref=e122]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e123]:
                    - generic [ref=e124]:
                      - generic [ref=e125]:
                        - button [ref=e126] [cursor=pointer]:
                          - img [ref=e127]
                        - button [ref=e130] [cursor=pointer]:
                          - img [ref=e131]
                        - button [ref=e133] [cursor=pointer]:
                          - img [ref=e134]
                        - button [ref=e137] [cursor=pointer]:
                          - img [ref=e138]
                      - generic [ref=e142]:
                        - button [ref=e143] [cursor=pointer]:
                          - img [ref=e144]
                        - button [ref=e149] [cursor=pointer]:
                          - img [ref=e150]
                      - generic [ref=e154]:
                        - button [ref=e155] [cursor=pointer]:
                          - img [ref=e156]
                        - button [ref=e158] [cursor=pointer]:
                          - img [ref=e159]
                      - generic [ref=e161]:
                        - button [ref=e162] [cursor=pointer]:
                          - img [ref=e163]
                        - button [ref=e167] [cursor=pointer]:
                          - img [ref=e168]
                      - generic [ref=e169]:
                        - button [ref=e170] [cursor=pointer]:
                          - img [ref=e171]
                        - button [ref=e174] [cursor=pointer]:
                          - img [ref=e175]
                      - generic [ref=e178]:
                        - button [ref=e179] [cursor=pointer]:
                          - img [ref=e180]
                        - button [ref=e182] [cursor=pointer]:
                          - img [ref=e183]
                      - button [ref=e186] [cursor=pointer]:
                        - img [ref=e187]
                      - generic [ref=e193]:
                        - button "Normal" [ref=e194] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e195]
                        - text: Small Normal Large Huge
                      - generic [ref=e199]:
                        - button "Normal" [ref=e200] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e201]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e204]:
                        - button [ref=e206] [cursor=pointer]:
                          - img [ref=e207]
                        - button [ref=e210] [cursor=pointer]:
                          - img [ref=e211]
                      - generic [ref=e261]:
                        - button "Sans Serif" [ref=e262] [cursor=pointer]:
                          - text: Sans Serif
                          - img [ref=e263]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e268] [cursor=pointer]:
                        - img [ref=e269]
                      - button [ref=e271] [cursor=pointer]:
                        - img [ref=e272]
                      - generic [ref=e277]:
                        - button [ref=e278] [cursor=pointer]:
                          - img [ref=e279]
                        - button [ref=e283] [cursor=pointer]:
                          - img [ref=e284]
                        - button [ref=e288] [cursor=pointer]:
                          - img [ref=e289]
                      - button [ref=e303] [cursor=pointer]:
                        - img [ref=e304]
                    - generic [ref=e309]:
                      - generic [ref=e310]:
                        - text: e.g. Short description of news, agenda for event
                        - paragraph [ref=e311]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e312]:
                  - paragraph [ref=e313]: "Date: Jun 2, 2026"
                  - paragraph [ref=e314]: "Author: Тестовий юзер"
                - generic [ref=e315]:
                  - button "Cancel" [ref=e316] [cursor=pointer]
                  - button "Preview" [ref=e317] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e318]
          - contentinfo [ref=e320]:
            - generic [ref=e321]:
              - generic [ref=e322]:
                - link "GreenCity home" [ref=e324] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e325]
                - navigation [ref=e326]:
                  - menu [ref=e327]:
                    - listitem [ref=e328]:
                      - link "Eco news" [ref=e329] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e330]:
                      - link "Events" [ref=e331] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e332]:
                      - link "Places" [ref=e333] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e334]:
                      - link "About Us" [ref=e335] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e336]:
                      - link "My Space" [ref=e337] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2637"
                    - listitem [ref=e338]:
                      - link "UBS Courier" [ref=e339] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e340]:
                    - listitem [ref=e341]:
                      - paragraph [ref=e342]: Follow us
                    - listitem [ref=e343]:
                      - link "Twitter link" [ref=e344] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e345]
                      - link "LinkedIn link" [ref=e346] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e347]
                      - link "Facebook link" [ref=e348] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e349]
                      - link "Instagram link" [ref=e350] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e351]
                      - link "YouTube link" [ref=e352] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e353]
              - generic [ref=e354]: © Copyright 2026. Green City.
    - button "chat" [ref=e355] [cursor=pointer]:
      - img "chat" [ref=e356]
  - generic [ref=e357]: Welcome to the search window
```

# Test source

```ts
  1   | import { test, expect, BrowserContext } from '@playwright/test';
  2   | import { CreateNewsPage } from '../pages/CreateNewsPage';
  3   | 
  4   | test.describe('TC-03 | Вибір від 1 до 3 тегів, 4-й тег заблокований', () => {
  5   |   let createNewsPage: CreateNewsPage;
  6   |   let context: BrowserContext;
  7   | 
  8   |   test.beforeEach(async ({ browser }) => {
  9   |     context = await browser.newContext({ storageState: 'auth.json' });
  10  |     const page = await context.newPage();
  11  |     createNewsPage = new CreateNewsPage(page, page.locator('body'));
  12  | 
  13  |     await test.step('Відкрити форму створення новини', async () => {
  14  |       await page.goto('https://www.greencity.cx.ua/#/greenCity/news/create-news');
  15  |       await page.waitForLoadState('networkidle');
  16  |     });
  17  |   });
  18  | 
  19  |   test.afterEach(async () => {
  20  |     await context.close();
  21  |   });
  22  | 
  23  |   test('Публікація новини з одним тегом "News"', async () => {
  24  |     await test.step('Вибрати тег "News"', async () => {
  25  |       await createNewsPage.newsTag.click();
  26  |     });
  27  | 
  28  |     await test.step('Перевірити що тег "News" неактивний', async () => {
  29  |       expect(await createNewsPage.isTagActive(createNewsPage.newsTag)).toBe(false);
  30  |     });
  31  | 
  32  |     await test.step('Перевірити що вибрано рівно 1 тег', async () => {
  33  |       const count = await createNewsPage.getSelectedTagsCount();
  34  |       expect(count).toBe(1);
  35  |     });
  36  | 
  37  |     await test.step('Заповнити обов\'язкові поля', async () => {
  38  |       await createNewsPage.titleInput.fill('TC-03 один тег');
  39  |       await createNewsPage.contentArea.fill('Це тестовий вміст довжиною більше двадцяти символів.');
  40  |     });
  41  | 
  42  |     await test.step('Опублікувати і перевірити редирект', async () => {
  43  |       await expect(createNewsPage.publishButton).toBeEnabled();
  44  |       await createNewsPage.publishButton.click();
  45  |       await expect(createNewsPage.page).toHaveURL(/.*news/);
  46  |     });
  47  |   });
  48  | 
  49  |   test('Публікація новини з трьома тегами: News, Events, Education', async () => {
  50  |     await test.step('Вибрати три теги: News, Events, Education', async () => {
  51  |       await createNewsPage.newsTag.click();
  52  |       await createNewsPage.eventsTag.click();
  53  |       await createNewsPage.educationTag.click();
  54  |     });
  55  | 
  56  |     await test.step('Перевірити що всі три теги неактивні', async () => {
  57  |       expect(await createNewsPage.isTagActive(createNewsPage.newsTag)).toBe(false);
  58  |       expect(await createNewsPage.isTagActive(createNewsPage.eventsTag)).toBe(false);
  59  |       expect(await createNewsPage.isTagActive(createNewsPage.educationTag)).toBe(false);
  60  |     });
  61  | 
  62  |     await test.step('Перевірити що вибрано рівно 3 теги', async () => {
  63  |       const count = await createNewsPage.getSelectedTagsCount();
> 64  |       expect(count).toBe(3);
      |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  65  |     });
  66  | 
  67  |     await test.step('Заповнити обов\'язкові поля і опублікувати', async () => {
  68  |       await createNewsPage.titleInput.fill('TC-03 три теги');
  69  |       await createNewsPage.contentArea.fill('Це тестовий вміст довжиною більше двадцяти символів.');
  70  |       await expect(createNewsPage.publishButton).toBeEnabled();
  71  |       await createNewsPage.publishButton.click();
  72  |       await expect(createNewsPage.page).toHaveURL(/.*news/);
  73  |     });
  74  |   });
  75  | 
  76  |   test('Вибір 4-го тегу неможливий після вибору 3-х', async () => {
  77  |     await test.step('Вибрати три теги: News, Events, Education', async () => {
  78  |       await createNewsPage.newsTag.click();
  79  |       await createNewsPage.eventsTag.click();
  80  |       await createNewsPage.educationTag.click();
  81  |     });
  82  | 
  83  |     await test.step('Перевірити що вибрано 3 теги', async () => {
  84  |       const countBefore = await createNewsPage.getSelectedTagsCount();
  85  |       expect(countBefore).toBe(3);
  86  |     });
  87  | 
  88  |     await test.step('Спробувати вибрати 4-й тег "Initiatives"', async () => {
  89  |       const isDisabled = await createNewsPage.initiativesTag.isDisabled();
  90  | 
  91  |       if (isDisabled) {
  92  |         // Тег заблокований на рівні DOM
  93  |         expect(isDisabled).toBe(true);
  94  |       } else {
  95  |         // Клікаємо і перевіряємо, що кількість активних не збільшилась
  96  |         await createNewsPage.initiativesTag.click({ force: true });
  97  |         const countAfter = await createNewsPage.getSelectedTagsCount();
  98  |         expect(countAfter).toBeLessThanOrEqual(3);
  99  |       }
  100 |     });
  101 |   });
  102 | });
```