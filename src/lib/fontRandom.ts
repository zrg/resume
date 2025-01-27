type ColorFamily = {
  name: string | null;
  shades: string[];
};

export interface RandomFont {
  fontFamily: string;
  active: boolean;
  filename: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  colorFamily?: ColorFamily;
}

/**
 * font-size is the smallest of 3 numbers
 *  - the 1st number is the largest number in px where the heading doesn't break
 *    in size Large at 740px viewport width
 *  - the 2nd number is the relative font-size to be even with the professional title underneath
 *  - the 3rd number is targeted to take up 100% of the space and
 *    grow at the same rate as the viewport when viewport width is less than 740px
 *
 *    without padding that would be
 *      [number]vw
 *    translated to pseudo code
 *      [number]% * viewport width
 *    take into account the container padding
 *      [numner]% * ( viewport width - container padding )
 *    is the same as
 *      ( viewport width * [numner]% ) - ( container padding * [numner]% )
 *    is the same as
 *      calc( [number]vw - calc( 40px * [number / 100] ) )
 *  */

const fonts = [
  {
    fontFamily: "'8-bit-lim O'",
    active: true,
    filename: '8bitlimo',
    fontSize: 'min(107px, 2.1em, calc(16vw - calc(40px * 0.16)))',
    lineHeight: '',
  },
  {
    fontFamily: "'Crackman'",
    active: true,
    filename: 'Crackman',
    fontSize: 'min(87px, 1.71em, calc(13.2vw - calc(40px * 0.132)))',
    lineHeight: '',
  },
  {
    fontFamily: "'EXE Pixel Perfect'",
    active: true,
    filename: 'EXEPixelPerfect',
    textTransform: 'uppercase',
    fontSize: 'min(150px, 2.97em, calc(22.74vw - calc(40px * 0.2274)))',
    lineHeight: '0.6',
  },
  {
    fontFamily: "'Karma Future'",
    active: true,
    filename: 'Karma Future',
    fontSize: 'min(102px, 2em, calc(15.3vw - calc(40px * 0.153)))',
    lineHeight: '',
  },
  {
    fontFamily: "'Televideo'",
    active: true,
    filename: 'Televideo',
    fontSize: 'min(107px, 2.1em, calc(16.2vw - calc(40px * 0.162)))',
    lineHeight: '0.8',
  },
  {
    fontFamily: "'Youre Gone'",
    active: true,
    filename: 'Youre Gone',
    fontSize: 'min(83px, 1.65em, calc(12.6vw - calc(40px * 0.126)))',
    lineHeight: '',
  },
];

const colorFamilies = [
  {
    name: 'green',
    shades: [
      'rgb(51, 255, 0)',
      'rgb(41, 204, 0)',
      'rgb(31, 153, 0)',
      'rgba(31, 153, 0, 0.75)',
      'rgba(31, 153, 0, 0.3)',
    ],
  },
  {
    name: 'amber',
    shades: [
      'rgb(255, 176, 0)',
      'rgb(226, 154, 0)',
      'rgb(194, 132, 0)',
      'rgba(194, 132, 0, 0.75)',
      'rgba(194, 132, 0, 0.3)',
    ],
  },
  {
    name: 'white',
    shades: [
      'rgb(255, 255, 255)',
      'rgb(218, 218, 218)',
      'rgb(184, 184, 184)',
      'rgba(184, 184, 184, 0.75)',
      'rgba(184, 184, 184, 0.3)',
    ],
  },
];

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
