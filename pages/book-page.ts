import { Page, expect } from "@playwright/test";
import { pages } from "../utils/pages";

class BookPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

export default BookPage;
