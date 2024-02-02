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

  async isBookAddedToCollection(bookName: string) {
    await expect(this.page.getByRole("link", { name: bookName })).toBeVisible();
  }

  async deleteBookFromCollection(bookName: string) {
    await this.page.getByRole('row', { name: bookName }).locator('svg').click();
  }

  async deleteAllBooksFromCollection() {
    await this.page.getByRole("button", { name: "Delete All Books" }).click();
    await this.page.getByRole("button", { name: "OK" }).click();
  }

  async isCollectionEmpty(){
    await expect(this.page.getByText('No rows found')).toBeVisible();
  }
}

export default ProfilePage;
