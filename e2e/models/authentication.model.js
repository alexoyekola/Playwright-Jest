class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async setUsername(username) {
        await this.page.fill('#username', username);
    }

    async setPassword(password) {
        await this.page.fill('#password', password);
    }

    async clickSignInButton() {
        await this.page.locator('//input[type="submit"]').click();
    }


}

module.exports = LoginPage;