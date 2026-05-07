import { test, expect } from '@playwright/test';

test('Delete User API', async ({ request }) => {

  const response = await request.delete(
    'https://reqres.in/api/users/2',
    {
      headers: {
        'x-api-key': 'free_user_3DNxH1rSFtHq8BUcZqw3eYeL4XX'
      }
    }
  );

  console.log('STATUS:', response.status());

  expect(response.status()).toBe(204);
});