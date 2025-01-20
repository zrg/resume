type ColorFamily = {
  name: string | null;
  shades: string[];
};

interface RandomFont {
  fontFamily: string;
  active: boolean;
  filename: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  colorFamily?: ColorFamily;
}

const fonts = [
  {
    fontFamily: "'8-bit-lim O'",
    active: true,
    filename: '8bitlimo',
    fontSize: 'min(1.8em, 14.5vw, 102.6px)',
    lineHeight: '',
  },
  {
    fontFamily: "'Crackman'",
    active: true,
    filename: 'Crackman',
    fontSize: 'min(12vw, 90px)',
    lineHeight: '',
  },
  {
    fontFamily: "'EXE Pixel Perfect'",
    active: true,
    filename: 'EXEPixelPerfect',
    textTransform: 'uppercase',
    fontSize: 'min(20vw, 142.5px)',
    lineHeight: '0.6',
  },
  {
    fontFamily: "'Karma Future'",
    active: true,
    filename: 'Karma Future',
    fontSize: 'min(1.75em, 13.5vw, 99.75px)',
    lineHeight: '',
  },
  {
    fontFamily: "'Televideo'",
    active: true,
    filename: 'Televideo',
    fontSize: 'min(1.75em, 13.5vw, 99.75px)',
    lineHeight: '',
  },
  {
    fontFamily: "'Youre Gone'",
    active: true,
    filename: 'Youre Gone',
    fontSize: 'min(85px, 11.2vw)',
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

const getRandomFont = (currentFontFilename: string | null, currentColor: string | null) => {
  const fontSet = fonts.filter((font) => font.active && font.filename !== currentFontFilename);
  const randomFontNumber = Math.floor(Math.random() * fontSet.length);
  const randomFont: RandomFont = fontSet[randomFontNumber];

  const colorFamiliesSet = colorFamilies.filter((color) => color.name !== currentColor);
  const randomColorNumber = Math.floor(Math.random() * colorFamiliesSet.length);
  const randomColor = colorFamiliesSet[randomColorNumber];

  randomFont.colorFamily = randomColor;

  return randomFont;
};

export default getRandomFont;
