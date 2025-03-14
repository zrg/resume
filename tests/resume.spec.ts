import { test, expect } from '@playwright/test';
import { availability, jobs, schools, title } from '../src/lib/constants';

test('Page has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(title);
});

test('Page has name', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Zev Goldberg');
});

test('Page may or may not have availability', async ({ page }) => {
  await page.goto('/');

  if (availability) {
    await expect(page.getByTestId('availability')).toBeVisible();
  } else {
    await expect(page.getByTestId('availability')).toBeVisible();
  }

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Page has subheaders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('subheaders')).toBeVisible();
});

test('Page has summary', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'Summary' })).toBeVisible();
});

test('Page has core skills', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'Core Skills' })).toBeVisible();
});

test('Page has experience', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'Experience' })).toBeVisible();
});

test('Page has education', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'Education' })).toBeVisible();
});
