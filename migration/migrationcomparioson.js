const { test, expect } = require('@playwright/test'); // 1

test.describe('angularjs homepage todo list', () => {
  test('should add a todo', async ({ page }) => { // 2, 3
    await page.goto('https://angularjs.org'); // 4

    await page.locator('[ng-model="todoList.todoText"]').fill('first test');
    await page.locator('[value="add"]').click();

    const todoList = page.locator('[ng-repeat="todo in todoList.todos"]'); // 5
    await expect(todoList).toHaveCount(3);
    await expect(todoList.nth(2)).toHaveText('first test', {
      useInnerText: true,
    });

    // You wrote your first test, cross it off the list
    await todoList.nth(2).getByRole('textbox').click();
    const completedAmount = page.locator('.done-true');
    await expect(completedAmount).toHaveCount(2);
  });
});