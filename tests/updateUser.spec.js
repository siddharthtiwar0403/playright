import { test, expect } from '@playwright/test';

test('Update User API', async ({ request }) => {

  const response = await request.patch(
    'https://reqres.in/api/users/2',
    {
      headers: {
        'x-api-key': 'free_user_3DNxH1rSFtHq8BUcZqw3eYeL4XX'
      },

      data: {
        job: 'Developer'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.job).toBe('Developer');
});