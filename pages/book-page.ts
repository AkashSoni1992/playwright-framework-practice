import { Locator, Page, expect } from "@playwright/test";
import { pages } from "../utils/pages";

class BookPage {
  private readonly page: Page;
  private readonly btnAddToCol: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnAddToCol = this.page.getByRole("button", {
      name: "Add To Your Collection",
    });
  }

  async checkBookPage() {
    await expect(this.page).toHaveURL(pages.books);
  }

  async clickOnBook(bookName: string) {
    await this.page.getByRole("link", { name: bookName }).click();
  }

  async isBookDetailsPage() {
    await expect(this.page.getByText("ISBN :")).toBeVisible();
  }

  async clickAddToCollection() {
    await this.btnAddToCol.click();
  }

  async addBookToCollection(bookName: string) {
    await this.clickOnBook(bookName);
    await this.isBookDetailsPage();
    await this.clickAddToCollection();
  }
}

export default BookPage;
