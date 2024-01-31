import { Locator, Page, expect } from "@playwright/test";
import { pages } from "../utils/pages";

class LoginPage {
  private readonly page: Page;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly loginBtn: Locator;

  constructor(page: Page){
    this.page = page;
    this.userName = page.getByPlaceholder('UserName');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async fillUserName(userName: string){
    await this.userName.fill(userName);
  }

  async fillPassword(password: string){
    await this.password.fill(password);
  }

  async doLogin(userName: string, password: string){
    await this.fillUserName(userName);
    await this.fillPassword(password);
    await this.loginBtn.click();
  }

  async checkLoggedIn(){
    await expect(this.page).toHaveURL(pages.profile);
    await expect(this.page).toHaveTitle('DEMOQA');
  }
}

export default LoginPage;
