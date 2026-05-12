import { test, expect } from '@playwright/test';

test('trace demo', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('wrong');

  await page.getByLabel('Password').fill('wrong');

  await page.getByRole('button', { name: 'Login' }).click();

  // Intentional failure
  await expect(page.locator('#flash'))
    .toContainText('SUCCESS LOGIN');
});