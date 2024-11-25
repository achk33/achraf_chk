import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University Student - Computer Science and Electronics",
    location: "Rabat",
    description:
      "Third-year student at the University of Science, merging Computer Science and Electronics to drive innovation.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Freelance",
    description:
      "I have dedicated significant time to mastering frontend development, engaging in deep and challenging projects. Moreover, I have expanded my expertise to include full-stack development.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Experienced Data Analyst",
        location: "Rabat",

    description:
      "Skilled Data Analyst proficient in Python-based data analysis techniques, including Python for Data Science.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Drone Video Streaming Architect",
    description:
      "Developed a platform integrating the drone's video stream, focusing on front-end management and streaming to ensure a smooth and optimal user experience.",
    tags: ["React", "Tailwind","TypeScript","Vue.js","Boostrap"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Text Analytics",
    description:
      " Implementing robust data governance practices to ensure accuracy and compliance.",
    tags: ["SQL","Python", "MySQL", "PHP"],
    imageUrl:  wordanalyticsImg,
  },
  {
    title: "Robotics Store Founder ",
    description:
      "Founder of a robotics store, where I've curated a diverse selection of cutting-edge robotics products for enthusiasts.",
    tags: ["TypeScript", "React", "Tailwind","Next.js","Boostrap"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "C/C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Bootstrap",
  "Tailwind",
  "Git",
  "SQL",
  "MySQL",
  "PHP",
  "Python",
  "Django",
  "Docker",
  "Framer Motion",
  
] as const;
