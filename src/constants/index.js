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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Langchain Developer",
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
    title: "Software Developer (React, Node)",
    company_name: "Celebzo",
    date: "March 2023 - November 2023",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Implemented an E-Commerce project with robust functionalities.",
      "Designed and implemented CRUD APIs for efficient data management.",
      "Integrated Razorpay for payment gateway solutions.",
      "Developed Jenkins and CI/CD pipelines to streamline deployment processes.",
      "Provided leadership and guidance to colleagues, enhancing project development.",
      "Maintained a high-speed work ethic to ensure rapid feature deployment.",
    ],
  },
  {
    title: "Full Stack Developer (React, Node)",
    company_name: "Maverick Digital Tech Pvt Ltd",
    date: "May 2022 - February 2023",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Developed an influencer acquisition tool for Shopify from scratch using Firebase functions and ReactJs.",
      "Created an Influencer Execution tool using Flask.",
      "Designed Influencer Facing View with MERN and AWS Chalice, including Slack integrations for influencer approvals.",
      "Developed scraping tools for e-commerce inventory and product details, scheduled hourly.",
      "Created a description generator and price info tool for influencer YouTube videos.",
      "Implemented various REST APIs using NodeJs, SpringBoot, Flask, AWS Chalice, and Firebase.",
    ],
  },
  {
    title: "Software Developer (Node)",
    company_name: "Cygnius Consulting Pvt Ltd",
    date: "May 2021 - May 2022",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Designed and developed a Slack bot using Slack Bolt.",
      "Built infrastructure on AWS CloudFormation.",
      "Implemented several serverless applications using AWS SAM.",
      "Developed AWS Lambda triggers and Open API Specifications in YAML.",
      "Managed database migrations using Liquibase.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sharique proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sharique does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sharique optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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

export { services, technologies, experiences, testimonials, projects };
