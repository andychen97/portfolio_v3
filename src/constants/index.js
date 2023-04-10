import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  postgresql,
  threejs,
  git,
  figma,
  docker,
  lfz,
  sjsu,
  skyline,
  stocks,
  thirdstreet,
  codejournal,
  cravingcreations,
  foodfinder,
  portfoliov2,
  portfoliov3
} from "../assets";

export const navLinks = [
  {
    number: '01',
    id: "about",
    title: "About Me",
  },
  {
    number: '02',
    id: "work",
    title: "Experience",
  },
  {
    number: '03',
    id: "projects",
    title: "Projects",
  },
  {
    number: '04',
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Dev Teacher's Assistant",
    company_name: "LearningFuze",
    location: "Irvine, CA",
    icon: lfz,
    iconBg: "#fff",
    date: "August 2022 - Present",
    points: [
      'Lead TA sessions for a Full Stack Web Development course assisting instructors and students with daily assignments',
      'Revamped and taught existing material on algorithms emphasizing real - world applications of runtime complexity',
      'Explained and demonstrated beginner to intermediate methodologies such as procedural, functional, and OOP',
      'Guided students toward efficient solutions in HTML, CSS, JS, React, Node.js, Express.js, PostgreSQL, etc.'
    ]
  },
  {
    title: "Full Stack Web Development Student",
    company_name: "LearningFuze",
    location: "Irvine, CA",
    icon: lfz,
    iconBg: "#fff",
    date: "April 2022 - August 2022",
    points: []
  },
  {
    title: "Options Trader (Personal Financial Portfolio)",
    company_name: "Self-employed",
    location: "San Francisco, California",
    icon: stocks,
    iconBg: "#fff",
    date: "January 2020 - January 2022",
    points: [
      'Actively managed and grew a portfolio with a 11 % monthly average ROI over 24 months',
      'Traded derivatives and underlying securities based on technical and fundamental analysis',
      'Performed Technical and Quantitative analysis to interpret chart patterns to pinpoint entry / exit for profitability',
      'Analyze current market trends using information technology and market psychology to capitalize on movement within stocks, options, and index market'
    ]
  },
  {
    title: "Web Developer (Contracted Academic Project)",
    company_name: "Third Street Community Center",
    location: "San Jose, California",
    icon: thirdstreet,
    iconBg: "#fff",
    date: "January 2020 - May 2020",
    points: [
      'Successfully led the redesign of the Third Street Community Center\'s website using HTML, CSS, and JavaScript',
      'Improved the user experience by seamlessly integrating YouTube videos and photos into the website design',
      'Improved the organization and clarity of various pages through the removal of unnecessary text',
      'Facilitated online donations through the implementation of a donation page with PayPal integration'
    ]
  },
  {
    title: "San Jose State University",
    company_name: "BS - Business : Management Information Systems",
    location: "San Jose, California",
    icon: sjsu,
    iconBg: "#fff",
    date: "August 2018 - May 2020",
    points: []
  },
  {
    title: "Skyline College",
    company_name: "AA - Business Administration",
    location: "San Bruno, California",
    icon: skyline,
    iconBg: "#fff",
    date: "August 2014 - May 2018",
    points: []
  }
];

const projects = [
  {
    name: "Portfolio V3",
    description:
      "A third iteration of my portfolio to showcase my ability to learn and apply new technologies. I chose to experiment with 3D Animation (three.js), emailjs and TailwindCSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "yellow-text-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "purple-text-gradient",
      }
    ],
    image: portfoliov3,
    live_link: "https://typescript.acdesigns.dev/",
    source_code_link: "https://github.com/andychen97/portfolio_v3",
  },
  {
    name: "Portfolio V2",
    description:
      "I  rebuilt my portfolio using TypeScript, React, and Vite for version 2, with a focus on improving user experience and accessibility. I plan to continue learning TypeScript as I believe it's essential to success in web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "dokku",
        color: "yellow-text-gradient",
      }
    ],
    image: portfoliov2,
    live_link: "https://typescript.acdesigns.dev/",
    source_code_link: "https://github.com/andychen97/portfolio_v2",
  },
  {
    name: "Food Finder",
    description:
      "A full-stack web application for food lovers to find restaurants utilizing Yelp's REST API. Some key features include pinpoint mapping (Leaflet API) and user accounts with Argon2 password hashing / salting.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "yellow-text-gradient",
      },
      {
        name: "argon2",
        color: "orange-text-gradient",
      },
      {
        name: "yelpAPI",
        color: "purple-text-gradient",
      },
      {
        name: "dokku",
        color: "light-blue-text-gradient",
      },
    ],
    image: foodfinder,
    live_link: "https://lfzfoodfinder.com/",
    source_code_link: "https://github.com/andychen97/food-finder",
  },
  {
    name: "Craving Creations",
    description:
      "A dynamic web application for food lovers to find and organize recipes. Through the process of creating this app, I have gained a greater level of comfort and proficiency in working with APIs, enabling me to utilize them with ease and confidence.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tastyAPI",
        color: "yellow-text-gradient",
      },
    ],
    image: cravingcreations,
    live_link: "https://andychen97.github.io/craving-creations/",
    source_code_link: "https://github.com/andychen97/craving-creations",
  },
  {
    name: "Code Journal",
    description:
      'A CRUD application that allows users to log and view their entries. The experience of developing this app marked a significant milestone in my pursuit of a career as a software developer.',
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: codejournal,
    live_link: "https://andychen97.github.io/code-journal/",
    source_code_link: "https://github.com/andychen97/code-journal",
  },
];

export { services, technologies, experiences, projects };
