import { test, expect } from '@playwright/test';

test('mock API response', async ({ page }) => {

  // Intercept request
  await page.route('https://reqres.in/api/users?page=2', async (route) => {

    console.log('REQUEST INTERCEPTED');

    // Fake response
    await route.fulfill({

      status: 200,

      contentType: 'application/json',

      body: JSON.stringify({
        page: 2,
        data: [
          {
            first_name: 'Siddharth',
            email: 'siddharth@test.com'
          }
        ]
      })

    });

  });

  // Browser makes request
  const response = await page.evaluate(async () => {

    const res = await fetch('https://reqres.in/api/users?page=2');

    return await res.json();
  });

  console.log(response);

  expect(response.data[0].first_name).toBe('Siddharth');
});