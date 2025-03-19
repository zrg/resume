export const availability = true;

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

export const fonts = [
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

export const colorFamilies = [
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

export const coreSkills = [
  {
    id: 'uxui',
    title: 'UX/UI',
    sublist: [
      'Accessibility (A11y)',
      'WCAG',
      'Figma',
      'Storybook',
      'Semantic Markup',
      'Screen-Readers',
      'Universal Design',
      'responsive layout',
      'Photoshop',
      'Illustrator',
      'InDesign',
      'Material UI (MUI)',
    ],
  },
  {
    id: 'code',
    title: 'Code',
    sublist: [
      'HTML',
      'CSS/SCSS/Sass/Less',
      'ECMAScript (JavaScript)',
      'Typescript',
      'Svelte',
      'SvelteKit',
      'React.js',
      'Next.js',
      'Angular',
      'component frameworks',
      'Bootstrap',
      'jQuery',
      'REST API',
      'Single Page Applications',
      'ZShell/Bash',
      'Linux/Apache/MySql/PHP (LAMP)',
      'WordPress',
      'Joomla',
    ],
  },
  {
    id: 'devops',
    title: 'Dev-Ops',
    sublist: [
      'Jest (Unit Testing)',
      'Chromatic',
      'Node.js',
      'Github Actions/Workflows',
      'Snyk',
      'Webpack',
      'Rollup',
    ],
  },
];

export const jobs = [
  {
    id: 'grainger',
    display: true,
    url: 'www.grainger.com',
    fullName: 'W.W. Grainger, Inc.',
    city: 'Chicago, IL',
    startMonth: '2015-04',
    endMonth: '2024-09',
    title: 'Software Engineer II',
    highlights: [
      `Improved speed, reliability and capabilities of Fortune 500 e-commerce platform by
        converting legacy components and pages to modern Single-Page Applications using
        microservices and component frameworks (Svelte, React)`,
      `Kept our code working by supporting other teams in regular on-call rotation`,
      `Improved internal useability with documentation for components in Storybook for other
        developer teams`,
      `Helped our platform become useable by all by defining and implementing accessibility
        requirements and shaping our approach to developing UI components`,
      `Improved product data by implementing a mechanism for onsite employees to provide feedback
        on internal search results`,
      `Saved hundreds of Engineering Hours by automating dev-ops processes with GitHub Actions and
        Workflows and Bash scripts`,
    ],
  },
  {
    id: 'sears',
    display: true,
    url: 'web.archive.org/web/20170206233553/http://www.searslabs.com/',
    fullName: 'Sears IR Labs',
    city: 'Chicago, IL',
    startMonth: '2014-05',
    endMonth: '2015-03',
    title: 'Software Engineer (contract)',
    highlights: [
      `Developed gamified learning management application`,
      `Converted UX documents and mock-up images into functioning sections of the application`,
    ],
  },
  {
    id: 'tmc',
    display: true,
    url: 'www.linkedin.com/company/think-mint-chip-llc',
    fullName: 'Mint Chip',
    city: 'Skokie, IL',
    startMonth: '2014-03',
    endMonth: '2014-05',
    title: 'Senior Web Developer',
    highlights: [`Developed and supported responsive Wordpress sites for SMB clients`],
  },
  {
    id: 'cm',
    display: true,
    url: 'www.criticalmass.com',
    fullName: 'Critical Mass',
    city: 'Chicago, IL',
    startMonth: '2013-12',
    endMonth: '2014-02',
    title: 'Senior Developer',
    highlights: [
      `Developed strategies and plans to measure and improve load times and perceived performance
        of existing websites`,
    ],
  },
  {
    id: 'trib',
    display: true,
    url: 'www.chicagotribune.com',
    fullName: 'Chicago Tribune',
    city: 'Chicago, IL',
    startMonth: '2012-04',
    endMonth: '2013-11',
    title: 'Software Engineer III',
    highlights: [
      `Developed completely new device-agnostic SPA publication for a major metropolitan newspaper`,
      `Converted requirements documents and mock-up images into layouts and functioning sections of
        the website`,
      `Interviewed and onboarded front-end engineer candidates`,
    ],
  },
  {
    id: 'jspace',
    display: true,
    url: 'www.linkedin.com/company/jspace-llc/',
    fullName: 'Jspace.com, LLC',
    city: 'Chicago, IL',
    startMonth: '2010-11',
    endMonth: '2012-04',
    title: 'Web Developer',
    highlights: [
      `Lead front-end development of HTML and CSS for a large social network, news, venue/city
        guide and dating site`,
      `Converted requirements documents and mock-up images into reusable templates and functioning
        sections of the website`,
    ],
  },
  {
    id: 'suntimes',
    display: true,
    url: 'www.suntimes.com',
    fullName: 'Chicago Sun-Times',
    city: 'Chicago, IL',
    startMonth: '2010-10',
    endMonth: '2010-11',
    title: 'Front-End Web Developer (contract)',
    highlights: [
      `Migrated several classified ads systems into the new one, maintaining the latest
        branding styles in a legacy framework`,
    ],
  },
  {
    id: 'mywv',
    display: true,
    url: 'www.linkedin.com/company/mywrigleyville.com/',
    fullName: 'MyWrigleyville.com',
    city: 'Chicago, IL',
    startMonth: '2010-05',
    endMonth: '2010-08',
    title: 'Web Developer',
    highlights: [
      `Developed and maintained content and SEO for company’s extensive web presence and partner
        websites`,
    ],
  },
  {
    id: 'ecc',
    display: true,
    url: '//extendedcarellc.com',
    fullName: 'Extended Care Consulting, LLC',
    city: 'Evanston, IL',
    startMonth: '2006-05',
    endMonth: '2010-04',
    title: 'Senior Web Application Developer',
    highlights: [
      `Designed, developed, coded, tested and supported online database applications with multiple
        access levels, user management, custom user interface, reporting and graphs used by more
        than 300 people spanning several departments`,
      `Designed, developed and maintained a custom CMS for more than thirty websites for all
        Extended Care nursing facilities`,
      `Provided complete graphics services for promotional materials and newsletters, including
        layout, copy-editing, printing and liaison to professional printing services`,
    ],
  },
  {
    id: 'indy',
    display: false,
    url: '',
    fullName: 'Independent Contractor/Consultant',
    city: 'Chicago, IL',
    startMonth: '2005-11',
    endMonth: '2006-05',
    title: 'Web, Graphics, Logo Designer and Artist',
    highlights: [
      'Design, develop and maintain websites for clients',
      'Design company logos',
      'Create commissioned artwork (ketubahs and a mural)',
    ],
  },
  {
    id: 'margolin',
    display: false,
    url: '',
    fullName: 'Margloin Shoes and Apparel',
    city: 'Chicago, IL',
    startMonth: '2004-11',
    endMonth: '2005-10',
    title: 'IT and Graphics',
    highlights: [
      'Service and maintain all computers',
      'Maintain large catalog website',
      'Script and automate shipping and inventory processes',
      'Photograph inventory and process the images',
      'Layout semi-annual product catalog',
    ],
  },
  {
    id: 'vc',
    display: false,
    url: '',
    fullName: 'VoiceCue Technologies, Inc.',
    city: 'Rosemont, IL',
    startMonth: '2001-11',
    endMonth: '2004-10',
    title: 'Software Development',
    highlights: [
      'Develop software for real-time billing of pre-paid phone accounts across multiple markets \
      in the US and Mexico',
      'Record and maintain large dictionary of Spanish and English voice prompts for the IVR',
      'Develop and document technical procedures for network engineers',
      'On-call technical support for network engineers',
      'Develop working web interface for sample pre-paid products',
      'Design splash graphics for point-of-sale application',
    ],
  },
];

export const schools = [
  {
    id: 'ccc',
    display: true,
    fullName: 'Columbia College Chicago',
    city: 'Chicago, IL',
    concentration: 'Computer Animation and Film',
    startYear: '1994',
    endYear: '1998',
  },
  {
    id: 'uic',
    display: true,
    fullName: 'University of Illinois at Chicago',
    city: 'Chicago, IL',
    concentration: 'Computer Science ',
    startYear: '1993',
    endYear: '1994',
  },
];
export const summary = `Extensive web  development experience working on mission critical applications.
  I am looking to be a good citizen on the internet and deliver robust, intuitive, and accessible
  interfaces. I strive to gather consensus from all stakeholders, Product, Engineering, and UX while
  focusing on the end-user. I am passionate about accessibility.`;

export const title = `Zev Goldberg's Résumé: Senior Software Engineer | Front-End Web Developer | Guitar FX Mad Scientist`;
