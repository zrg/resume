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

test('Page has subheader', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('subheader')).toBeVisible();
});

test('Page has summary', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'summary' })).toBeVisible();
});

test('Page has specialties', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'Specialties' })).toBeVisible();
});

test('Page has experience', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'Experience' })).toBeVisible();
});

test('Page has education', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 2, name: 'Education' })).toBeVisible();
});
