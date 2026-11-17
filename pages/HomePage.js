class HomePage {

    constructor(page) {
        this.page = page;

        // Fulfillment Section
        this.shippingOption = 
            page.locator("//div[contains(@class,'method-option-heading') and normalize-space()='Shipping']")

        this.localDeliveryOption =
            page.getByText('Local Delivery', { exact: true });

        this.pickupOption =
            page.getByText('Pickup', { exact: true });

        // Location Section
        this.pickupFromDropdown =
            page.getByText('Pickup from');

        this.editZipCodeLink =
            page.getByText('Edit Zip Code');

        // Search
        this.searchInput =
            page.locator('input[type="search"]');

        this.searchIcon =
            page.locator('svg').first();

        // Favorites
        this.favoriteIcon =
            page.locator('[aria-label="Favorites"]');

        // Account
        this.accountIcon =
            page.locator('[aria-label="Account"]');

        // Cart
        this.cartIcon =
            page.locator('[aria-label="Cart"]');
    }

    async openHomePage() {
        await this.page.goto('https://www.partycity.com/');
    }

    async selectShipping() {
        await this.shippingOption.click();
    }

    async selectLocalDelivery() {
        await this.localDeliveryOption.click();
    }

    async selectPickup() {
        await this.pickupOption.click();
    }

    async clickEditZipCode() {
        await this.editZipCodeLink.click();
    }
}

module.exports = { HomePage };