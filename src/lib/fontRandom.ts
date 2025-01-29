import { fonts, type RandomFont, colorFamilies } from '$lib/constants';

export const getRandomFont = (currentFontFilename: string | null, currentColor: string | null) => {
  const fontSet = fonts.filter((font) => font.active && font.filename !== currentFontFilename);
  const randomFontNumber = Math.floor(Math.random() * fontSet.length);
  const randomFont: RandomFont = fontSet[randomFontNumber];

  const colorFamiliesSet = colorFamilies.filter((color) => color.name !== currentColor);
  const randomColorNumber = Math.floor(Math.random() * colorFamiliesSet.length);
  const randomColor = colorFamiliesSet[randomColorNumber];

  randomFont.colorFamily = randomColor;

  return randomFont;
};
