import { test, expect } from '@playwright/test';

test('Create User API', async ({ request }) => {

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      headers: {
        'x-api-key': 'free_user_3DNxH1rSFtHq8BUcZqw3eYeL4XX'
      },

      data: {
        name: 'Siddharth',
        job: 'QA Engineer'
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  console.log(body);

  expect(body.name).toBe('Siddharth');
  expect(body.job).toBe('QA Engineer');
});