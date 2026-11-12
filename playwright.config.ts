import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3099";

export default defineConfig({
  testDir: "e2e",
  globalSetup: "./e2e/global-setup.ts",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  timeout: 180_000,
  expect: { timeout: 15_000 },
  reporter: [["list"], ["html", { open: "never", outputFolder: "e2e-report" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    /** Off by default so E2E runs without downloading ffmpeg (network/proxy issues). Set PLAYWRIGHT_VIDEO=on to enable. */
    video: process.env.PLAYWRIGHT_VIDEO === "on" ? "retain-on-failure" : "off",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        /** Use system Chrome when Playwright’s Chromium download fails (ECONNRESET / proxy). Override with PLAYWRIGHT_CHANNEL=msedge */
        channel: process.env.PLAYWRIGHT_CHANNEL ?? "chrome",
      },
    },
  ],
  webServer: {
    command: "npm run dev:e2e",
    url: baseURL,
    /** In CI always start a dedicated server — avoids "another next dev already running" lock on the same project dir */
    reuseExistingServer: process.env.CI !== "1",
    timeout: 180_000,
  },
});
