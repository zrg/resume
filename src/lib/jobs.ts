const jobs = [
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
      'HTML, CSS, SCSS/Sass, JavaScript, jQuery, Node.js, Svelte, React, TypeScript, Next.js, StoryBook, Jest, Webpack, Snyk, Github Actions/Workflows, Figma, REST API, microservices',
      'Develop components and pages for e-commerce application',
      'Convert legacy pages to faster and more robust SPAs',
      'Participate in regular on-call rotation for troubleshooting issues with released code',
      'Write documentation for components in Storybook for other developer teams',
      'Define accessibility requirements and shape approach for implementation of UI components',
      'Implement mechanism for onsite employees to provide feedback on internal search results',
      'Automate processes with GitHub Actions and Workflows, Bash scripts'
    ]
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
      'HTML, CSS, JavaScript, Angular, Bootstrap, Less, Angular-UI, Grunt, Underscore, Github',
      'Develop gamified learning management application',
      'Convert UX documents and mock-up images into functioning sections of the application'
    ]
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
    highlights: [
      'HTML, CSS, JavaScript, PHP, Wordpress, Git, Beanstalk',
      'Develop and troubleshoot responsive Wordpress sites for SMB clients'
    ]
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
      'Web Performance Tools, Google PageSpeed Tools, YSlow, ImageOptim',
      'Develop strategies and plans to measure and improve load times and perceived performance of existing websites'
    ]
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
      'HTML, CSS, JavaScript, jQuery, responsive layout, touch-enabled, cross-browser, device-agnostic, SVN, Photoshop, InDesign',
      'Develop major metropolitan online newspaper as a device-agnostic SPA',
      'Convert requirements documents and mock-up images into layouts and functioning sections of the website',
      'Interview and onboard frontend engineer candidates'
    ]
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
      'HTML, CSS, Smarty, JavaScript, jQuery, jQuery UI, Modernizr, NetBeans, Subversion, Photoshop, PHP, Zend, MySQL',
      'Lead frontend development of HTML and CSS for a large social network, news, venue/city guide and dating site',
      'Convert requirements documents and mock-up images into reusable templates and functioning sections of the website'
    ]
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
      'HTML, CSS, JavaScript, Photoshop',
      'Migrate several classified ads systems into the new one, maintaining the latest look-and-feel styles'
    ]
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
      'LAMP, Joomla, HTML, CSS, JavaScript, Ajax, ColdFusion, Photoshop, Illustrator, social media, Android',
      'Develop and maintain company’s extensive web presence and partner websites'
    ]
  },
  {
    id: 'ecc',
    display: true,
    url: '//extendedcarellc.com',
    fullName: 'Extended Care Consulting, LLC',
    city: 'Evanston, IL',
    startMonth: '2006-05',
    endMonth: '2010-04',
    title: 'Senior Database and Application Developer',
    highlights: [
      'LAMP, Joomla, HTML, CSS, JavaScript (Prototype, Scriptaculous, etc.), Ajax, Excel, MS Visual Basic, Photoshop, Illustrator, InDesign, SubVersion, Fiery Print Server, bash/Python scripting',
      'Design, develop, code, test and support online database applications with multiple access levels, user management, custom user interface, reporting and graphs used by more than 300 people spanning several departments',
      'Design, develop and maintain a custom CMS for more than thirty websites for all Extended Care nursing facilities',
      'Provide complete graphics services for promotional materials and newsletters, including layout, copy-editing, printing and liaison to professional printing services'
    ]
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
      'Create commissioned artwork (ketubahs and a mural)'
    ]
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
      'Layout semi-annual product catalog'
    ]
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
      'Develop software for real-time billing of pre-paid phone accounts across multiple markets in the US and Mexico',
      'Record and maintain large dictionary of Spanish and English voice prompts for the IVR',
      'Develop and document technical procedures for network engineers',
      'On-call technical support for network engineers',
      'Develop working web interface for sample pre-paid products',
      'Design splash graphics for point-of-sale application'
    ]
  }
];

export default jobs;
