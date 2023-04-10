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
  git,
  figma,
  docker,
  lfz,
  sjsu,
  skyline,
  stocks,
  thirdstreet,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
