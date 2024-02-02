import { test } from "@playwright/test";
import ProfilePage from "../pages/profile-page";
import { pages } from "../utils/pages";
import BookPage from "../pages/book-page";

let profilePage: ProfilePage;
let bookPage: BookPage;

test.use({storageState: '.auth/user.json'})
test.beforeEach(async ({ page }) => {
  await page.goto(pages.profile);
  profilePage = new ProfilePage(page);
  bookPage = new BookPage(page);
});

test("Profile - Storage State", async ({ page }) => {
  await profilePage.checkLoggedIn();
});

test("Delete particular book from collection", async({page})=> {
  const bookName = 'Speaking JavaScript';
  await page.goto(pages.books);
  await bookPage.addBookToCollection(bookName);
  await page.goto(pages.profile);
  await profilePage.deleteBookFromCollection(bookName);
})

test("Delete all books from collection", async () => {
  await profilePage.deleteAllBooksFromCollection();
  await profilePage.isCollectionEmpty();
});
