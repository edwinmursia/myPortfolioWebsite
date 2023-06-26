import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    cgi,
    tietoevry,
    java,
    python,
    aws,
    postgre,
    github,
    oracle,
    thefirma,
    wordpress
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Technologies",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fast learner",
      text: "I'm a fast learner and eager to always learn something new.",
      icon: web,
    },
    {
      title: "Passion towards work",
      text: "I always do my work with passion and as well as possible.",
      icon: mobile,
    },
    {
      title: "Team player",
      text: "I get along well with everyone and offer help when needed.",
      icon: backend,
    },
    {
      title: "Adaptable",
      text: "Thriving in change, I readily adjust to new situations, technologies, and methodologies.",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python / Flask",
      icon: python,
    },
    {
      name: "React / Native",
      icon: reactjs,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Three",
      icon: threejs,
    },
    {
      name: "Node",
      icon: nodejs,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: postgre,
    },
    {
      name: "OracleDB | PL/SQL",
      icon: oracle,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Tietoevry",
      icon: tietoevry,
      iconBg: "#2b0473",
      date: "March 2023 - Ongoing",
      points: [
        "I have engaged in self-study of cloud computing studying and using AWS.",
        "Utilized and maintained Oracle databases extensively in ongoing projects.",
        "Developed automation solutions using Java to streamline workflow.",
        "Demonstrated a proactive approach to self-learning and technology adoption.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "CGI",
      icon: cgi,
      iconBg: "#e41c39",
      date: "May 2022 - Mar 2023",
      points: [
        "I gained experience working on large-scale projects with substantial responsibility.",
        "Gained loads of experience in working with Oracle Database for project development.",
        "Utilized PL/SQL for creating complex procedures and functions for databases and application back-ends.",
        "Developed front-end sides of applications using Oracle APEX and Oracle Forms.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "The Firma",
      icon: thefirma,
      iconBg: "#453ce0",
      date: "Sep 2020 - Apr 2022",
      points: [
        "I worked as a software developer and project manager alongside my studies.",
        "Led a team in building a mobile application using React Native for a client for eight months.",
        "Developed websites using WordPress, HTML, CSS and JavaScript.",
        "Conducted large-scale software testings to ensure quality and functionality.",
      ],
    },
  ];
  
  export { services, technologies, experiences };
  