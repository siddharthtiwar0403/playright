import { test, expect } from '@playwright/test';

test('network interception example', async ({ page }) => {

  // Intercept API request
  await page.route('**/api/users?page=2', async (route) => {

    console.log('Request Intercepted');

    // Continue original request
    await route.continue();
  });

  // Open page
  await page.goto('https://reqres.in');

});