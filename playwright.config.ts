import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: false
  },
  projects: [
    {
      name: 'practicesoftware',
      testDir: './practicesoftwaretesting/tests',
      use: {
        baseURL: 'https://practicesoftwaretesting.com',
      },
    },
  ],
});
