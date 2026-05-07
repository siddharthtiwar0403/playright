const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../testData/loginData');

loginData.forEach((data) => {
  test(`login test with ${data.username} and ${data.password}`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(data.username, data.password);

    await expect(page.locator('#flash')).toContainText(data.expected);
  });
});