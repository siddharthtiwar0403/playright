import { test, expect } from '../fixtures/baseTest';

test('custom fixture login test', async ({ loginPage, page }) => {

  await loginPage.login(
    'tomsmith',
    'SuperSecretPassword!'
  );

  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area!');
});