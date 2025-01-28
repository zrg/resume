import { type RandomFont, getRandomFont } from '$lib/fontRandom';
import { describe, it, expect, expectTypeOf } from 'vitest';

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
