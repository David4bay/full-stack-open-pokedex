import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:8080',
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:8080/',
  },
  fullyParallel: false,
  workers: 1,
});