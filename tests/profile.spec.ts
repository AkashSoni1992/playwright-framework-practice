import { test } from "@playwright/test";
import ProfilePage from "../pages/profile-page";
import { pages } from "../utils/pages";

let profilePage: ProfilePage;

// test.use({storageState: '.auth/user.json'})
test.beforeEach(async ({ page }) => {
  await page.goto(pages.profile);
  profilePage = new ProfilePage(page);
});
test("Profile - Storage State", async ({ page }) => {
  await profilePage.checkLoggedIn();
});
