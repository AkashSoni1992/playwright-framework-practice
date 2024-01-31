import { Locator, Page } from "@playwright/test";

class MenuPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickMenu(menu: string) {
    await this.page.getByText(menu).click();
  }

  async clickMenuItem(menuItem: string) {
    await this.page.getByText(menuItem).click();
  }
}
