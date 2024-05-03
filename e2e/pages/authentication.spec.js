// @ts-check
const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/authentication.helper');
const LoginPage = require('../models/authentication.model');

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
});

test('page loads', async ({ page }) => {
  await expect(page).toHaveTitle('Login Page');
});

test("User login - Success", async ({ page }) => {
  await login(page, 'tomsmith', 'SuperSecretPassword!');
});

test("User login - Invalid username", async ({ page }) => {
  await login(page, 'invalidusername', 'SuperSecretPassword!');
});

test("User login - Invalid password", async ({ page }) => {
  await login(page, 'tomsmith', 'invalidpassword');
});

