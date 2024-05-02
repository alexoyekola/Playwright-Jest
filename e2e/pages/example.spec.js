// @ts-check
const { test, expect } = require('@playwright/test');
const { fillYourDetails, fillTicketHolderDetails, clickAllCheckboxes } = require('../helpers/example.helper');

test.beforeEach(async ({ page }) => {
  await page.goto('https://interview.staging.beaconforms.com/form/09620748');
});

test('page loads', async ({ page }) => {
  await expect(page).toHaveTitle(/Interview \- Event Registrar/);
});

test("buy one ticket - contact consent", async ({ page }) => {
  // Adding one adult ticket
  await page.locator('.MuiFab-label >> nth=1').click();
  // Your details section
  await fillYourDetails(page, 'Test', 'Person', 'test@test.com');
  // Ticket holder details section
  await fillTicketHolderDetails(page, 'Test1', 'Person1', 'test1@test.com')
});

