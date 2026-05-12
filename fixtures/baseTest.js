import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Create custom fixture
export const test = base.extend({

  loginPage: async ({ page }, use) => {

    // Create LoginPage object
    const loginPage = new LoginPage(page);

    // Automatically open login page
    await loginPage.goto();

    // Give loginPage to test
    await use(loginPage);
  }

});

// Export expect also
export { expect } from '@playwright/test';