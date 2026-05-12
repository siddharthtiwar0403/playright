import { test, expect } from '@playwright/test';

test('built-in fixture example', async ({ page, browser, context, request }) => {

  // page fixture
  await page.goto('https://the-internet.herokuapp.com/login');

  console.log('PAGE TITLE:', await page.title());

  // browser fixture
  console.log('BROWSER OBJECT:', browser);

  // context fixture
  console.log('CONTEXT OBJECT:', context);

  // request fixture
  const response = await request.get(
    'https://reqres.in/api/users?page=2',
    {
      headers: {
        'x-api-key': 'free_user_3DNxH1rSFtHq8BUcZqw3eYeL4XX'
      }
    }
  );

  console.log('API STATUS:', response.status());

  expect(response.status()).toBe(200);
});