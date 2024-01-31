import { test, expect } from "@playwright/test";
import { baseURL, pages } from "../utils/pages";
import LoginPage from "../pages/login-page";

const userName= process.env.USERNAME!;
const password = process.env.PASSWORD!;
let loginPage: LoginPage;


// test.use({storageState: '.auth/admin.json'});
test.beforeEach(async ({ page }) => {
  await page.goto(pages.profile);
  loginPage = new LoginPage(page);
});

test("Login to bookstore application", async ({ page }) => {
  // await loginPage.doLogin(userName, password);
  await loginPage.checkLoggedIn();
});
