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
  shri,
  clikin,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
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
    title: "Jr. Backend Developer",
    company_name: "Shri Om Infotech",
    icon: shri,
    iconBg: "#383E56",
    date: "July 2021 - June 2022",
    points: [
      "Collaborated with a team of developers and project managers to design and develop scalable and efficient backend solutions for web applications.",
      "Overall, my experience as a backend developer at Shri OM Infotech allowed me to contribute to the development of robust and scalable web applications, leveraging my skills in backend technologies, system design, and database management.",
    ],
  },
  {
    title: "Jr. Web Developer",
    company_name: "Clikin Tech",
    icon: clikin,
    iconBg: "#E6DEDD",
    date: "July 2023 - October 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jatin proved me wrong.",
    name: "Indranil Roy",
    designation: "Founder",
    company: "Clikin Tech",
    //image:
    //"https://imgs.search.brave.com/9ot5rTxSY_6syhb8gyD4pg0dPpOLTPcif63gtcEGQoo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL2Fy/dGlzdC9pbWFnZXMv/d2Vic2l0ZS9wb3N0/ZXIvbGFyZ2UvaW5k/cmFuaWwtcm95LWll/aW4wNzE4NjctMjMt/MDUtMjAxOC0xMi00/OC00Ni5qcGc",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jatin proved me wrong.",
    name: "Parag Patel",
    designation: "CEO",
    company: "Shri Om InfoTech",
    //image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [];

export { services, technologies, experiences, testimonials, projects };
