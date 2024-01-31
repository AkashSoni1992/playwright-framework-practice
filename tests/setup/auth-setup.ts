import { test as setup, FullConfig, chromium, Page } from "@playwright/test";
import LoginPage from "../../pages/login-page";
import { pages } from "../../utils/pages";

const adminFile = ".auth/admin.json";
const userFile = ".auth/user.json";

setup("authenticate as admin", async ({ page }) => {
  const user = process.env.USERNAME_ADMIN!;
  const pass = process.env.PASSWORD!;
  await doLogin(page, user, pass);

  await page.context().storageState({ path: adminFile });
});

setup("authenticate as user", async ({ page }) => {
  const user = process.env.USERNAME!;
  const pass = process.env.PASSWORD!;
  await doLogin(page, user, pass);

  await page.context().storageState({ path: userFile });
});

async function doLogin(page: Page, user: string, pass: string) {
  const loginPage = new LoginPage(page);

  await page.goto(pages.login);
  await loginPage.doLogin(user, pass);
  await page.waitForURL(pages.login);
  await loginPage.checkLoggedIn();
}
