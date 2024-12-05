const jobs = [
  {
    id: "grainger",
    display: true,
    url: "www.grainger.com",
    fullName: "W.W. Grainger, Inc.",
    city: "Chicago, IL",
    startMonth: "2015-04",
    endMonth: "2024-09",
    title: "Software Engineer II",
    highlights: [
      "HTML, CSS, Javascript, jQuery, Node.js, Svelte, React, TypeScript, StoryBook, Chromatic, Webpack, Jest",
      "Develop components and pages for e-commerce application for Fortune 500 company as part of a team",
      "Convert legacy pages to faster and more robust Single Page Applications",
      "Participate in regular on-call rotation for troubleshooting issues with released code",
      "Write documentation for components in Storybook for other developer teams",
      "Define accessibility requirements and shape approach for implementation of UI components",
      "Implement mechanism for onsite employees to provide feedback on internal search results",
      "Automate processes with GitHub Actions and Workflows, Bash scripts",
    ]
  }, {
    id: "sears",
    display: true,
    url: "www.searslabs.com",
    fullName: "Sears IR Labs",
    city: "Chicago, IL",
    startMonth: "2014-05",
    endMonth: "2015-03",
    title: "Software Engineer (contract)",
    highlights: [
      "HTML, CSS, JavaScript, Angular, Bootstrap, Less, Angular-UI, Grunt, Underscore, Github",
      "Develop gamified learning management application",
      "Convert requirements documents and mock-up images into functioning sections of the application",
      "Troubleshoot layout and functionality issues"
    ]
  }, {
    id: "tmc",
    display: true,
    url: "www.thinkmintchip.com",
    fullName: "Think Mint Chip",
    city: "Skokie, IL",
    startMonth: "2014-03",
    endMonth: "2014-05",
    title: "Senior Web Developer",
    highlights: [
      "HTML, CSS, JavaScript, PHP, Wordpress, Git, Beanstalk",
      "Develop Wordpress sites for SMB clients"
    ]
  }, {
    id: "cm",
    display: true,
    url: "www.criticalmass.com",
    fullName: "Critical Mass",
    city: "Chicago, IL",
    startMonth: "2013-12",
    endMonth: "2014-02",
    title: "Senior Developer",
    highlights: [
      "Web Performance Tools, Google PageSpeed Tools, YSlow, ImageOptim",
      "Develop strategies and plans to measure and improve load times and perceived performance of existing websites"
    ]
  }, {
    id: "trib",
    display: true,
    url: "www.tribune.com",
    fullName: "Chicago Tribune",
    city: "Chicago, IL",
    startMonth: "2012-04",
    endMonth: "2013-11",
    title: "Software Engineer III",
    highlights: [
      "HTML5, CSS3, JavaScript, jQuery, responsive layout, touch-enabled, cross-browser, device-agnostic, SVN, Photoshop, InDesign",
      "Develop major metropolitan online newspaper as a device-agnostic JavaScript application",
      "Convert requirements documents and mock-up images into functioning sections of the website",
      "Troubleshoot layout and functionality issues",
      "Interview and on-board Front-End engineer candidates"
    ]
  }, {
    id: "jspace",
    display: true,
    url: "",
    fullName: "Jspace.com, LLC",
    city: "Chicago, IL",
    startMonth: "2010-11",
    endMonth: "2012-04",
    title: "Web Developer",
    highlights: [
      "HTML5, CSS3, Smarty, JavaScript, jQuery, jQuery UI, Modernizr, HTML5 Boilerplate, NetBeans, SVN (command-line and TortoiseSVN), Photoshop, Fireworks, PHP, Zend Framework, MySQL (command-line and phpMyAdmin)",
      "Lead development of HTML and CSS for a large social network, news, venue/city guide and dating site",
      "Convert requirements documents and mock-up images into functioning sections of the website",
      "Design and develop templates and a template structure",
      "Choose and implement the latest HTML5/CSS3 and modern JavaScript solutions for simpler code creation and greatest cross-browser compatibility"
    ]
  }, {
    id: "suntimes",
    display: true,
    url: "www.suntimes.com",
    fullName: "Chicago Sun-Times",
    city: "Chicago, IL",
    startMonth: "2010-10",
    endMonth: "2010-11",
    title: "Front-End Web Developer (short-term contract)",
    highlights: [
      "X/HTML, CSS, JavaScript, Photoshop",
      "Migrate several classified ads systems into the new one, maintaining the latest look-and-feel styles"
    ]
  }, {
    id: "mywv",
    display: true,
    url: "",
    fullName: "MyWrigleyville.com",
    city: "Chicago, IL",
    startMonth: "2010-05",
    endMonth: "2010-08",
    title: "Web Developer",
    highlights: [
      "LAMP, Joomla, OOP, X/HTML, CSS, JavaScript, Ajax, ColdFusion, Photoshop, Illustrator, social media, Android",
      "Help develop and maintain company’s extensive web presence",
      "Develop and maintain partner websites"
    ]
  }, {
    id: "ecc",
    display: true,
    url: "",
    fullName: "Extended Care Consulting, LLC",
    city: "Evanston, IL",
    startMonth: "2006-05",
    endMonth: "2010-04",
    title: "Senior Database and Application Developer",
    highlights: [
      "LAMP, Joomla, OOP, X/HTML, CSS, JavaScript (Prototype, Scriptaculous, etc.), Ajax, Excel, Photoshop, Illustrator, InDesign, SubVersion, Fiery Print Server",
      "Design, develop, code and test online database applications with multiple access levels, user management, custom user interface, reporting and graphs used by more than 300 people spanning several departments",
      "Provide technical support for aforementioned applications and anything computer related",
      "Design, develop and maintain more than thirty websites for all Extended Care nursing facilities using a customized Content Management System that I set up",
      "Provide complete graphics services for promotional materials including layout, copy-editing, printing and liaison to professional printing services",
      "Design, layout, copy-edit and distribute (2,000 copies) for bi-weekly corporate newsletter",
      "Consultant and extra hand to IT department, specializing in scripting, Linux, Windows and security"
    ]
  }, {
    id: "indy",
    display: false,
    url: "",
    fullName: "Independent Contractor/Consultant",
    city: "Chicago, IL",
    startMonth: "2005-11",
    endMonth: "2006-05",
    title: "Web, Graphics, Logo Designer and Artist",
    highlights: [
      "Design, develop and maintain websites for clients",
      "Design company logos",
      "Create commissioned artwork (ketubahs and a mural)"
    ]
  }, {
    id: "margolin",
    display: false,
    url: "",
    fullName: "Margloin Shoes and Apparel",
    city: "Chicago, IL",
    startMonth: "Nov 2004&ndash;Oct 2005",
    endMonth: "",
    title: "IT and Graphics",
    highlights: [
      "Service and maintain all computers",
      "Maintain large catalog website",
      "Script and automate shipping and inventory processes",
      "Photograph inventory and process the images",
      "Layout semi-annual product catalog"]
  }, {
    id: "vc",
    display: false,
    url: "",
    fullName: "VoiceCue Technologies, Inc.",
    city: "Rosemont, IL",
    startMonth: "Sep 2001&ndash;Oct 2004",
    endMonth: "",
    title: "Software Development",
    highlights: [
      "Develop software for real-time billing of pre-paid phone accounts across multiple markets in the US and Mexico",
      "Record and maintain large dictionary of Spanish and English voice prompts for the IVR",
      "Develop and document technical procedures for network engineers",
      "On-call technical support for network engineers",
      "Develop working web interface for sample pre-paid products",
      "Design splash graphics for point-of-sale application",
    ]
  }
]

export default jobs; 