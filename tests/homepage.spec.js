const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('Select Shipping', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.openHomePage();

    await homePage.selectShipping();
});