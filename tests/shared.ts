import { expect, Locator, Page } from '@playwright/test';

export class Shared {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Getting started' });
    this.pomLink = page.locator('li', { hasText: 'Playwright Test' }).locator('a', { hasText: 'Page Object Model' });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto(link) {
    await this.page.goto(link);
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }

  async searchBar(text:string){
    const search =  this.page.locator("input");
    await search.fill(text);
    await search.press("Enter");
  }

  async foundResults(){
    const result = await this.page.textContent("article");
  }

  async noResults(){
    const result = this.page.locator("text=Oops");
  }

  async rightCategories(category:string) {
    await this.page.locator("a:near(svg)", {hasText: category}).first().click();
    await this.page.waitForURL('https://pushstart.com.br/pt-BR/blog/category/engajamento');

    const results = this.page.locator("article");
    const rCount = await results.count();

    for (let i = 0; i < rCount; i++) {
      const element = results.nth(i);
      await expect(element).toContainText(category);
    }
  }
}