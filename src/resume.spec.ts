import { describe, it, expect, expectTypeOf, afterEach } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { getStoredDarkMode, getStoredFontSizeLevel } from '$lib/getStoredValues';
import { formatDate } from '$lib/formatDate';
import { type RandomFont, getRandomFont } from '$lib/fontRandom';
import Mailto from './routes/Mailto.svelte';
import { mailtoValue } from '$lib/mailto';

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

describe('formatDate', () => {
  it("has a year and month'", () => {
    const testValue = '2001-11';
    expect(formatDate(testValue)).toBe('Nov 2001');
  });
});

describe('getRandomFont', () => {
  const testFont = {
    fontFamily: "'8-bit-lim O'",
    active: true,
    filename: '8bitlimo',
    fontSize: 'min(107px, 2.1em, calc(16vw - calc(40px * 0.16)))',
    lineHeight: '',
  };
  const testFontColor = 'green';

  it("gets random font object'", () => {
    const testRandomFont = getRandomFont(testFont.filename, testFontColor);
    console.log(testRandomFont);

    expectTypeOf(testRandomFont).toMatchTypeOf<RandomFont>();
    expect(testRandomFont).not.toBe(testFont.filename);
    expect(testRandomFont.colorFamily?.name).not.toBe(testFontColor);
  });
});

describe('mailto', () => {
  it('changes the mailto property', async () => {
    // why oh why doesn't children work here
    const result = render(Mailto, { props: { children: () => '', 'data-testid': 'test' } });
    const element = result.getByTestId('test');

    expect(element.getAttribute('href')).toBe('#');
    await fireEvent(element, new Event('focus'));
    expect(element.getAttribute('href')).toBe(mailtoValue);
  });
});
