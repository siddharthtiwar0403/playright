import { test, expect } from '@playwright/test';

test('GET users API', async ({ request }) => {

  const response = await request.get(
    'https://reqres.in/api/users?page=2',
    {
      headers: {
        'x-api-key': 'free_user_3DNxH1rSFtHq8BUcZqw3eYeL4XX'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.page).toBe(2);

  expect(body.data[0].first_name).toBe('Michael');

  expect(body.data[0].email).toContain('@reqres.in');
});
