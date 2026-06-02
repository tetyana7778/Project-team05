# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC02.spec.ts >> TC-03 | Вибір від 1 до 3 тегів, 4-й тег заблокований >> Публікація новини з одним тегом "News"
- Location: tests\TC02.spec.ts:23:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
                      - button "Education" [ref=e73] [cursor=pointer]:
                        - generic [ref=e75]: Education
                      - button "Initiatives" [ref=e76] [cursor=pointer]:
                        - generic [ref=e78]: Initiatives
                      - button "Ads" [ref=e79] [cursor=pointer]:
                        - generic [ref=e81]: Ads
                  - generic [ref=e82]:
                    - generic [ref=e83]:
                      - heading "Source (optional)" [level=3] [ref=e84]
                      - generic [ref=e85]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e87]:
                      - /placeholder: Link to external source
                  - generic [ref=e88]:
                    - heading "Picture (optional)" [level=3] [ref=e89]
                    - generic [ref=e90]:
                      - generic [ref=e93]:
                        - text: Drop your image here or
                        - generic [ref=e94]: browse
                        - button "browse" [ref=e95]
                      - generic [ref=e96]:
                        - generic "Crop photo" [ref=e100]
                        - generic [ref=e113]:
                          - button "Cancel" [ref=e114] [cursor=pointer]
                          - button "Submit" [ref=e115] [cursor=pointer]
                      - paragraph [ref=e116]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e117]:
                  - generic [ref=e118]:
                    - heading "Content" [level=3] [ref=e119]
                    - paragraph [ref=e120]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e121]:
                    - generic [ref=e122]:
                      - generic [ref=e123]:
                        - button [ref=e124] [cursor=pointer]:
                          - img [ref=e125]
                        - button [ref=e128] [cursor=pointer]:
                          - img [ref=e129]
                        - button [ref=e131] [cursor=pointer]:
                          - img [ref=e132]
                        - button [ref=e135] [cursor=pointer]:
                          - img [ref=e136]
                      - generic [ref=e140]:
                        - button [ref=e141] [cursor=pointer]:
                          - img [ref=e142]
                        - button [ref=e147] [cursor=pointer]:
                          - img [ref=e148]
                      - generic [ref=e152]:
                        - button [ref=e153] [cursor=pointer]:
                          - img [ref=e154]
                        - button [ref=e156] [cursor=pointer]:
                          - img [ref=e157]
                      - generic [ref=e159]:
                        - button [ref=e160] [cursor=pointer]:
                          - img [ref=e161]
                        - button [ref=e165] [cursor=pointer]:
                          - img [ref=e166]
                      - generic [ref=e167]:
                        - button [ref=e168] [cursor=pointer]:
                          - img [ref=e169]
                        - button [ref=e172] [cursor=pointer]:
                          - img [ref=e173]
                      - generic [ref=e176]:
                        - button [ref=e177] [cursor=pointer]:
                          - img [ref=e178]
                        - button [ref=e180] [cursor=pointer]:
                          - img [ref=e181]
                      - button [ref=e184] [cursor=pointer]:
                        - img [ref=e185]
                      - generic [ref=e191]:
                        - button "Normal" [ref=e192] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e193]
                        - text: Small Normal Large Huge
                      - generic [ref=e197]:
                        - button "Normal" [ref=e198] [cursor=pointer]:
                          - text: Normal
                          - img [ref=e199]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e202]:
                        - button [ref=e204] [cursor=pointer]:
                          - img [ref=e205]
                        - button [ref=e208] [cursor=pointer]:
                          - img [ref=e209]
                      - generic [ref=e259]:
                        - button "Sans Serif" [ref=e260] [cursor=pointer]:
                          - text: Sans Serif
                          - img [ref=e261]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e266] [cursor=pointer]:
                        - img [ref=e267]
                      - button [ref=e269] [cursor=pointer]:
                        - img [ref=e270]
                      - generic [ref=e275]:
                        - button [ref=e276] [cursor=pointer]:
                          - img [ref=e277]
                        - button [ref=e281] [cursor=pointer]:
                          - img [ref=e282]
                        - button [ref=e286] [cursor=pointer]:
                          - img [ref=e287]
                      - button [ref=e301] [cursor=pointer]:
                        - img [ref=e302]
                    - generic [ref=e307]:
                      - generic [ref=e308]:
                        - text: e.g. Short description of news, agenda for event
                        - paragraph [ref=e309]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e310]:
                  - paragraph [ref=e311]: "Date: Jun 2, 2026"
                  - paragraph [ref=e312]: "Author: Тестовий юзер"
                - generic [ref=e313]:
                  - button "Cancel" [ref=e314] [cursor=pointer]
                  - button "Preview" [ref=e315] [cursor=pointer]
                  - button "Publish" [disabled] [ref=e316]
          - contentinfo [ref=e318]:
            - generic [ref=e319]:
              - generic [ref=e320]:
                - link "GreenCity home" [ref=e322] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e323]
                - navigation [ref=e324]:
                  - menu [ref=e325]:
                    - listitem [ref=e326]:
                      - link "Eco news" [ref=e327] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e328]:
                      - link "Events" [ref=e329] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e330]:
                      - link "Places" [ref=e331] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e332]:
                      - link "About Us" [ref=e333] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e334]:
                      - link "My Space" [ref=e335] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2637"
                    - listitem [ref=e336]:
                      - link "UBS Courier" [ref=e337] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e338]:
                    - listitem [ref=e339]:
                      - paragraph [ref=e340]: Follow us
                    - listitem [ref=e341]:
                      - link "Twitter link" [ref=e342] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e343]
                      - link "LinkedIn link" [ref=e344] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e345]
                      - link "Facebook link" [ref=e346] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e347]
                      - link "Instagram link" [ref=e348] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e349]
                      - link "YouTube link" [ref=e350] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e351]
              - generic [ref=e352]: © Copyright 2026. Green City.
    - button "chat" [ref=e353] [cursor=pointer]:
      - img "chat" [ref=e354]
  - generic [ref=e355]: Welcome to the search window
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
  28  |     await test.step('Перевірити що тег "News" активний', async () => {
> 29  |       expect(await createNewsPage.isTagActive(createNewsPage.newsTag)).toBe(true);
      |                                                                        ^ Error: expect(received).toBe(expected) // Object.is equality
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
  56  |     await test.step('Перевірити що всі три теги активні', async () => {
  57  |       expect(await createNewsPage.isTagActive(createNewsPage.newsTag)).toBe(true);
  58  |       expect(await createNewsPage.isTagActive(createNewsPage.eventsTag)).toBe(true);
  59  |       expect(await createNewsPage.isTagActive(createNewsPage.educationTag)).toBe(true);
  60  |     });
  61  | 
  62  |     await test.step('Перевірити що вибрано рівно 3 теги', async () => {
  63  |       const count = await createNewsPage.getSelectedTagsCount();
  64  |       expect(count).toBe(3);
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
  88  |     await test.step('Спробувати вибрати 4-й тег "Initiatives" і перевірити блокування', async () => {
  89  |       const countBefore = await createNewsPage.getSelectedTagsCount();
  90  | 
  91  |       // Клікаємо на 4-й тег
  92  |       await createNewsPage.initiativesTag.click();
  93  | 
  94  |       const countAfter = await createNewsPage.getSelectedTagsCount();
  95  |       // Кількість активних тегів не повинна перевищити 3
  96  |       expect(countAfter).toBeLessThanOrEqual(3);
  97  |       // І повинна залишитись рівно такою самою — тег не додався
  98  |       expect(countAfter).toBe(countBefore);
  99  |     });
  100 |   });
  101 | });
```