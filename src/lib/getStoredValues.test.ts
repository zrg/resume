import { describe, it, expect, afterEach } from 'vitest';
import { getStoredDarkMode, getStoredFontSizeLevel } from '$lib/getStoredValues';

describe('getStoredDarkMode', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('when value is true', () => {
    localStorage.setItem('darkMode', '1');
    expect(getStoredDarkMode()).toBe(true);
  });
  it('when value is false', () => {
    localStorage.setItem('darkMode', '0');
    expect(getStoredDarkMode()).toBe(false);
  });
  it('when value is missing', () => {
    expect(getStoredDarkMode()).toBe(null);
  });
  it('when value is bad', () => {
    localStorage.setItem('darkMode', 'bad value');
    expect(getStoredDarkMode()).toBe(null);
  });
});

describe('getStoredFontSizeLevel', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("when value is 'small'", () => {
    localStorage.setItem('fontSizeLevel', 'small');
    expect(getStoredFontSizeLevel()).toBe('small');
  });
  it("when value is 'medium'", () => {
    localStorage.setItem('fontSizeLevel', 'medium');
    expect(getStoredFontSizeLevel()).toBe('medium');
  });
  it("when value is 'large'", () => {
    localStorage.setItem('fontSizeLevel', 'large');
    expect(getStoredFontSizeLevel()).toBe('large');
  });
  it('when value is missing', () => {
    expect(getStoredFontSizeLevel()).toBe(null);
  });
  it('when value is bad', () => {
    localStorage.setItem('fontSizeLevel', 'bad value');
    expect(getStoredFontSizeLevel()).toBe(null);
  });
});
