import { Page, expect } from "@playwright/test";
import { pages } from "../utils/pages";

class ProfilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkLoggedIn() {
    await expect(this.page).toHaveURL(pages.profile);
    await expect(this.page).toHaveTitle("DEMOQA");
  }
}

export default ProfilePage;
