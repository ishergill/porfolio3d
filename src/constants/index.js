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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    title: "Frontend Development Intern",
    company_name: "Growhut by Reserve Free Private Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2023 - August 2023",
    points: [
      "Growhut is committed to delivering cutting-edge solutions to clients across various industries, including software development, mobile app and web development, cloud computing, artificial intelligence, machine learning, blockchain and NFTs.",
      "Reduced the loading time of web apps by approximately 23%",
      "Implemented a diverse set of web development tools such as React JS, React TS, Next JS, Framer-motion, React-three/Fiber, Three JS, Bootstrap, JavaScript, Mantine UI, Axios API, REST API, ClickUp, Figma, and Render to enhance the functionality and user experience of web applications.",
    ],
  },
  {
    title: "React Developer Intern",
    company_name: "CV Digimax",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Janunary 2022 - March 2022",
    points: [
      "Innovative start-up CVDigimax offers all types of digital marketing services like content and social media marketing, SEO (search engine optimization), graphic designing etc.",
      "Led a front-end team of 7 React Developers to integrate the website's components.",
      "Demonstrated proficiency in utilizing a wide range of web technologies, including React JS, Bootstrap, HTML, Vercel, Synchronous/Asynchronous, APIs integration, Atlassian Jira Software, REST API, and CSS.",
    ],
  },
  {
    title: "Full-Stack Web Developer Intern",
    company_name: "Career Dream Education",
    icon: shopify,
    iconBg: "#383E56",
    date: "November 2021 - December 2021",
    points: [
      "A youthful and creative company that specializes in education, teaching, counseling, education management, marketing, and human resource development.",
      "Collaborated with the Web Development Core team on various projects.",
      "Conducted unit tests, debugging, fixed issues with various website pages and improved overall functionality of web pages.",
      "Utilized Vanilla JavaScript, CSS (Cascading Style Sheets), SQL (Structured Query Language), Node JS, Vercel and other web technologies to provide complete solutions for a variety of applications.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GitGit - Web App",
    description:
      "Developed and executed 100% responsive design principles to optimize the user experience on all devices.Designed and implemented robust user authentication, profile creation, post creation, commenting, liking, and sharing features.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "EasyCrypo - Web App",
    description:
      "Provided in-depth information on 100+ cryptocurrencies, crypto markets, crypto news, the most recent updates, and exchanges.Developed the web project with cutting-edge React methodologies, and extracted real-time data using the Rapid API.",
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
    name: "RunTailor",
    description:
      "For Run Tailor, we have a progressive web app that is easily accessible and can be downloaded as an app. To compete with the shrinking tailoring market, it was conceptualized from a personalized and ready-to-stitch perspective.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
