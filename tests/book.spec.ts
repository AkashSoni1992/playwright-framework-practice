import { test } from "@playwright/test";
import { pages } from "../utils/pages";
import BookPage from "../pages/book-page";
import ProfilePage from "../pages/profile-page";

let bookPage: BookPage;
let profilePage: ProfilePage;

test.use({ storageState: ".auth/user.json" });
test.beforeEach(async ({ page }) => {
  await page.goto(pages.books);
  bookPage = new BookPage(page);
  profilePage = new ProfilePage(page);
});

test("Verify book page", async () => {
  await bookPage.checkBookPage();
});

test("Click on book to add to collection", async () => {
  const bookName = "Understanding ECMAScript 6";
  await bookPage.clickOnBook(bookName);
  await bookPage.isBookDetailsPage();
});

test("Add book to collection", async ({page}) => {
  const bookName = "You Don't Know JS";
  await bookPage.addBookToCollection(bookName);
  await page.goto(pages.profile);
  await profilePage.isBookAddedToCollection(bookName);
});