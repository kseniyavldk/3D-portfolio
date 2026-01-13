import {
  backend,
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
  Job_Tracker,
  Telegram,
  QuickCart,
  CSV_Analyzer,
  Shopy,
  carrent,
  jobit,
  marketplace,
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
    title: "Backend Developer",
    icon: backend,
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
    title: "SmartShopBuddy (Telegram + Web)",
    company_name:
      "Application for collaborative family shopping lists, integrating a Telegram bot, web interface, and backend server with MongoDB.",
    icon: Telegram,
    iconBg: "#383E56",
    points: [
      "Features: SmartShopBuddy allows multiple users to collaboratively manage a family shopping list via a Telegram bot and web interface. Users can create or join family groups, add products, mark them as bought, remove items, and archive past purchases. The app synchronizes data in real-time between Telegram and the web, supports switching between families, and provides full cart management with history tracking.",
      "Stack: Node.js, Express, MongoDB, Telegram Bot API, React, Zustand, Tailwind CSS.",
    ],
  },
  {
    title: "CSV Analyzer (Full Stack Java & Angular)",
    company_name:
      "Application for analyzing large CSV files with numerical time-series data, calculating statistical metrics, and storing analysis history.",
    icon: CSV_Analyzer,
    iconBg: "#E6DEDD",
    points: [
      "Features: Users can upload CSV files (up to 50 MB) via a web interface built in Angular. The backend processes files in a memory-efficient streaming way using Java 17 and Spring Boot, calculates metrics including count, min/max, average, standard deviation, number of missing values, and unique values, and stores results in an H2 database. The frontend displays the last 10 analyses with pagination, allows viewing detailed statistics for each file, and supports deleting files and their analysis. Optional features include real-time progress updates via WebSocket and cancellation of ongoing analysis.",
      "Stack: Java 17, Spring Boot, Stream API, REST API, H2, Spring Data JPA, Angular 17, NgRx, RxJS, PrimeNG / Angular Material.",
    ],
  },
  {
    title: "Job Tracker",
    company_name:
      "Application for tracking job application responses, built with Next.js, Koa, and MongoDB.",
    icon: Job_Tracker,
    iconBg: "#383E56",
    points: [
      "Features: A table interface for managing job application records, with columns for company name, job title, salary range, response status, and notes. Users can add new entries via a modal form with input fields for each record's details. Features include the ability to edit, delete, and view detailed information of each entry. The app also supports filtering and sorting of records based on specific criteria.",
      "Stack: Next.js, Koa, MongoDB, Ship, React, Mantine.",
    ],
  },
  {
    title: "QuickCart",
    company_name:
      "Modern marketplace application with Stripe payment integration, built using Ship, Next.js, MongoDB, and Firebase.",
    icon: QuickCart,
    iconBg: "#E6DEDD",
    points: [
      "Features: Implements secure user authentication with email and password. Full product management including adding, editing, and viewing products with images, prices, and descriptions. Interactive shopping cart allowing users to add, remove, and adjust items, with seamless checkout using Stripe Checkout. Tracks purchase history and order statuses for users. Responsive design optimized for desktop and mobile devices. Includes error handling and user notifications for smooth experience.",
      "Stack: Next.js, MongoDB, Stripe, Mantine, Clerk, Inngest",
    ],
  },
  {
    title: "Marketplace Integration with Stripe ",
    company_name:
      "Marketplace application integrated with Stripe for payment processing, built with Ship, Next.js, MongoDB, and Firebase.",
    icon: Shopy,
    iconBg: "#383E56",
    points: [
      "Features: Secure user registration and login with data protection. Product catalog featuring filtering by categories, pagination, and sorting options. Shopping cart management with add, view, and checkout functionalities. Integration with Stripe for safe and smooth payments via a prebuilt checkout page. User order history with detailed purchase information. Optimized for fast loading and user-friendly interaction.",
      "Stack: Ship, Next.js, MongoDB, Stripe, Firebase, Mantine.",
    ],
  },
];

const projects = [
  {
    name: "SmartShopBuddy",
    description:
      "Application for collaborative family shopping lists, integrating a Telegram bot, web interface, and backend server with MongoDB.",
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
    source_code_link: "https://github.com/kseniyavldk/smartshopbuddy",
  },
  {
    name: "Job Tracker",
    description:
      "Application for tracking job application responses, built with Next.js, Koa, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ship",
        color: "green-text-gradient",
      },
      {
        name: "mantine",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kseniyavldk/job-tracking",
  },
  {
    name: "QuickCart",
    description:
      "Modern marketplace application with Stripe payment integration, built using Ship, Next.js, MongoDB, and Firebase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: marketplace,
    source_code_link: "https://github.com/kseniyavldk/QuickCart",
  },
];

export { services, technologies, experiences, projects };
