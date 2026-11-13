import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'practicesoftware',
      testDir: './practicesoftware/tests',
      use: {
        baseURL: 'https://practicesoftwaretesting.com',
      },
    },
  ],
});
