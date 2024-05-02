async function fillYourDetails(page, firstName, lastName, email) {
    // Your details section
    await page.locator('.MuiInputBase-input >> nth=0').fill(firstName);
    await page.locator('.MuiInputBase-input >> nth=1').fill(lastName);
    await page.locator('//input[@type="email"]').first().fill(email);
  }

async function fillTicketHolderDetails(page, firstName, lastName, email) {
    // Your details section
    await page.locator('.MuiInputBase-input >> nth=3').fill(firstName);
    await page.locator('.MuiInputBase-input >> nth=4').fill(lastName);
    await page.locator('//input[@type="email"] >> nth=1').fill(email);
  }

  async function clickAllCheckboxes(page) {
    const checkboxes = await page.locator('input[type="checkbox"]');
    if (checkboxes.length === 0) {
      console.log("No checkboxes found on the page.");
      return;
    }
    for (const checkbox of checkboxes) {
      await checkbox.check();
    }
  }

  async function addBankDetails(page, firstName, lastName, email) {
    // Your details section
    const iframeInput = await page.frameLocator('iFrame').locator('//input[@title="Secure expiration date input frame"]')
    await page.locator('.MuiButton-label >> nth=0').click()
    await page.getByPlaceholder('1234 1234 1234 1234').fill('4242 4242 4242 4242')
    
    await page.locator('.MuiInputBase-input >> nth=1').fill(lastName);
    await page.locator('//input[@type="email"]').first().fill(email);
  }

  

  module.exports = {
    fillYourDetails,
    fillTicketHolderDetails,
    clickAllCheckboxes
  };