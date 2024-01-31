import { FullConfig, chromium } from "@playwright/test";
import LoginPage from "../../pages/login-page";
import { pages } from "../../utils/pages";


async function globalSetup(config: FullConfig){
  const user = process.env.USERNAME!;
  const pass = process.env.PASSWORD!;
  const {baseURL, storageState} = config.projects[0].use;
  const browser = await chromium.launch({headless: true, timeout: 10000});
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);

  await page.goto(pages.login);
  await loginPage.doLogin(user, pass);
  await loginPage.checkLoggedIn();
  await page.context().storageState({path: storageState as string});
  await browser.close();
}

export default globalSetup;