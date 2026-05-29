import { defineConfig, devices } from '@playwright/test';
import { env } from './utils/env';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : env.RETRIES,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
        baseURL: env.BASE_URL,
    headless: env.HEADLESS,
    actionTimeout: env.TIMEOUT,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome', // <--- Додайте цей рядок сюди
      },
    },
   
  ],
});