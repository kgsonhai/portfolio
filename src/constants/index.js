import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  kms,
  nals,
  vku,
  iotlink,
  stdio,
  map4d,
  bidu,
  uretail,
  smartsenior,
  management,
  syngenx,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "System Design Analysis",
    icon: prototyping,
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
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
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

const icon = [vku, iotlink, stdio, nals, kms];

const projectImages = [
  [],
  [map4d],
  [bidu],
  [uretail, smartsenior, management],
  [syngenx],
];

const experiences = [
  {
    title: "Bachelor's Degree",
    company_name: "Vietnam - Korea University",
    icon: vku,
    iconBg: "#333333",
    date: "2019 - 2023",
  },
  {
    title: "Front-End Developer",
    company_name: "IOTLINK Company",
    icon: iotlink,
    iconBg: "#333333",
    date: "Jun 2020 - Dec 2020",
    projects: [
      {
        name: "MAP4D",
        role: "Frontend Developer",
        description:
          "Maintain a management system for digital map application website",
        teamSize: 6,
        img: map4d,
        link: "https://map.map4d.vn/map",
      },
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "STDIO Company",
    icon: stdio,
    iconBg: "#333333",
    date: "Jan 2021 - Dec 2021",
    projects: [
      {
        name: "BIDU",
        role: "Frontend Developer",
        description:
          "Building an e-commerce website. The focus is on providing a seamless, user-friendly experience from browsing products to completing successful transactions.",
        teamSize: 8,
        img: bidu,
        link: "https://bidu.com.vn/",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NALS Solution Company",
    icon: nals,
    iconBg: "#333333",
    date: "Jan 2022 - May 2023",
    projects: [
      {
        name: "U-RETAIL",
        role: "Frontend Developer",
        description:
          "Buiding a robust third-party logistics delivery system, optimizing order management and tracking. Ensured efficient and timely deliveries through effective coordination",
        teamSize: 8,
        img: uretail,
        link: "https://info.uretail.ai/",
      },
      {
        name: "SMART SENIOR",
        role: "Frontend Developer",
        description:
          "Rebuilt a comprehensive healthcare management application tailored for nursing homes.",
        teamSize: 10,
        img: smartsenior,
        link: "https://smartsenior.jp/",
      },
      {
        name: "MANAGEMENT TOOL",
        role: "Fullstack Developer",
        description:
          "Developed a task division management application to optimize task allocation and improve team collaboration.",
        teamSize: 20,
        img: management,
        link: "#",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "KMS Technology Company",
    icon: kms,
    iconBg: "#333333",
    date: "Jun 2023 - Present",
    projects: [
      {
        name: "SYNERGENX",
        role: "Backend Developer",
        description:
          "Building a cloud-based healthcare platform, AdvancedMD streamlines medical practice management",
        teamSize: 60,
        img: syngenx,
        link: "https://synergenxhealth.com/",
      },
    ],
  },
];

const projects = [
  {
    id: "project-1",
    name: "Shopper",
    description:
      "I have used the PHP language to build a multi-platform e-commerce website with comprehensive functionality, catering to both end-users and administrators.",
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
    image: komikult,
    repo: "https://github.com/kgsonhai/shoppingPHP",
    demo: "#",
  },
  {
    id: "project-2",
    name: "E-Shopper",
    description:
      "I have utilized the Java language and the Android Studio platform to develop a mobile e-commerce application. This application relies on APIs and shares the ecosystem with a Shopper website previously built using PHP.",
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
    image: leaderboard,
    repo: "https://github.com/kgsonhai/MY_ANDROID",
    demo: "#",
  },
  {
    id: "project-3",
    name: "Alarming touch face",
    description:
      "This is an AI-powered application built using the TensorFlow library, designed to provide reminders not to touch the face to prevent the spread of bacteria.",
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
    image: math,
    repo: "https://github.com/kgsonhai/alarming-touch-face",
    demo: "#",
  },
  {
    id: "project-4",
    name: "Build system daily voice",
    description:
      "This is my personal project, the thesis for my graduation. I built a system following a microservices architecture with 10 servers, each serving a distinct function. The system automatically crawls articles from various news websites, eliminates duplication across sources, provides an audio feature for each article, and supports multiple languages",
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
    image: movie,
    repo: "https://github.com/kgsonhai?tab=repositories",
    demo: "#",
  },
];

export { services, technologies, experiences, projects, icon, projectImages };
