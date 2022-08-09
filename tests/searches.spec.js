// @ts-check
const { test, expect } = require("@playwright/test");
import { Shared } from './shared';

test("Blog homepage has articles", async ({ page }) => {

  const shared = new Shared(page);
  await shared.goto("https://pushstart.com.br/pt-BR/blog");

  await page.textContent("article");

});

test("Search find results", async ({ page }) => {

  const shared = new Shared(page);
  await shared.goto("https://pushstart.com.br/pt-BR/blog");

  await shared.searchBar("São Paulo");
  await shared.foundResults();

});

test("Search doesn't find results", async ({ page }) => {

  const shared = new Shared(page);
  await shared.goto("https://pushstart.com.br/pt-BR/blog");

  await shared.searchBar("Campinas");
  await shared.noResults();

});

test.only("Categories shows right articles", async ({ page }) => {
  
  const shared = new Shared(page);
  await shared.goto("https://pushstart.com.br/pt-BR/blog");

  await shared.rightCategories("Engajamento");

});