interface RandomFont {
  fontFamily: string;
  active: boolean;
  filename: string;
  textTransform?: string;
  letterSpacing?: string;
  fontSize?: string;
}

const fonts = [
  {
    fontFamily: '8-bit-lim O',
    active: true,
    filename: '8bitlimo',
    fontSize: 'min(1.8em, 14.5vw, 102.6px)',
  },
  {
    fontFamily: 'Crackman',
    active: true,
    filename: 'Crackman',
    fontSize: 'min(12vw, 90px)',
  },
  {
    fontFamily: 'EXE Pixel Perfect',
    active: true,
    filename: 'EXEPixelPerfect',
    textTransform: 'uppercase',
    fontSize: 'min(20vw, 142.5px)',
  },
  {
    fontFamily: 'Karma Future',
    active: true,
    filename: 'Karma Future',
    fontSize: 'min(1.75em, 13.5vw, 99.75px)',
  },
  {
    fontFamily: 'Televideo',
    active: true,
    filename: 'Televideo',
    fontSize: 'min(1.75em, 13.5vw, 99.75px)',
  },
  {
    fontFamily: 'Youre Gone',
    active: true,
    filename: 'Youre Gone',
    fontSize: 'min(85px, 11.2vw)'
  },
];

const getRandomFont = (currentFontFilename: string | null)=>{

  const fontSet = fonts.filter((font) => font.active && font.filename !== currentFontFilename);
  const randomNumber = Math.floor(Math.random() * fontSet.length);
  const randomFont: RandomFont = fontSet[randomNumber];

  const {
    fontFamily,
    active,
    filename: darkModeNameFontFilename,
    textTransform,
    fontSize,
  } = randomFont;

  const textTransformString = textTransform && ` --dmn-text-transform: ${textTransform};`;
  const fontSizeString = fontSize && ` --dmn-font-size: ${fontSize};`;

  const darkModeNameFontStyle = `--dmn-font-family: '${fontFamily}';${textTransformString ?? ''}${fontSizeString ?? ''}`;

  return { darkModeNameFontFilename, darkModeNameFontStyle }
}

export default getRandomFont;
