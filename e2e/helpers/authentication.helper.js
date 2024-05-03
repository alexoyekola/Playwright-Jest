const LoginPage = require("../models/authentication.model");

  async function login(page, username, password) {
    await LoginPage.setUsername(username);
    await LoginPage.setPassword(password);
    await LoginPage.clickSignInButton();
}

  module.exports = {
    login
  };