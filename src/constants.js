// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import colabLogo from './assets/tech_logo/colab.png'

import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's


import APSCHELogo from './assets/company_logo/APSCHE.jpg';
import APSSDCLogo from './assets/company_logo/APSSDC.png';
import LearnyardLogo from './assets/company_logo/learnyard.png';




// Project Section Logo's


import bookLogo from './assets/work_logo/bookshell.jpg';
import portfolioLogo from './assets/work_logo/portfolio.jpg';
import mindgameLogo from './assets/work_logo/mindgame.jpg';
import burgerLogo from './assets/work_logo/burgerimage.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend & Backend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'Google colab', logo: colabLogo },
      

      { name: 'Compass', logo: mcLogo },
      
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

      
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: APSCHELogo,
    role: "MERN STACK Intern",
    company: "APSCHE-SmartBridge",
    date: "May 2025 - july 2025",
    desc: "Developed a full-stack web application using the MERN stack, as part of an academic project under APSCHE . The project included user authentication, data management with MongoDB, and a responsive frontend using React and CSS. Gained hands-on experience in building scalable APIs and deploying full-stack apps.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDb",

    ],
    certificate: "https://drive.google.com/file/d/1CjUw1Rqb3_TbXUgWPRHlldZ3lMT_p7gf/view?usp=sharing"
  },
  {
    id: 1,
    img: APSSDCLogo,
    role: "AIML Intern",
    company: "APSSDC-IBM SkillsBuild",
    date: "May 2024 - july 2024",
    desc: "As part of the internship, developed a Sentiment Analysis model using Python, Natural Language Processing (NLP) techniques, and machine learning algorithms to classify text as positive, negative, or neutral. Explored real-world applications of AI in understanding user opinions, social media monitoring, and customer feedback systems.",
    skills: [
      "Python",
      "Pandas",
      "ML Algorithms",
    ],
    certificate: "https://drive.google.com/file/d/1ghtC-Vd_s3N7lnqNbgd0Fgkr6-1Tz1SD/view?usp=sharing"
  },
  {
    id: 2,
    img: LearnyardLogo,
    role: "DSA Intern",
    company: "Learnyard",
    date: "Jan 2024 - jul 2024",
    desc: "Worked as a Data Structures and Algorithms (DSA) intern, enhancing problem-solving skills through hands-on coding challenges and algorithmic problem analysis. Focused on optimizing solutions for arrays, strings, trees, recursion, and sorting algorithms using C++.",
    skills: [
      "C++",
      "Problem solving",
      "Data Structures",
    ],
    certificate: "https://drive.google.com/file/d/1PjW3TGx9ZiOxgtfjA8aXm2wJduulR0gt/view?usp=sharing"
  },
];



export const projects = [
  {
    id: 0,
    title: "BookStore Website",
    description:
      "Designed and developed a fully responsive Bookstore website using React.js and Tailwind CSS.Implemented dynamic book listings with features like search, category filters, and sorting.Focused on creating an intuitive and minimal user interface for a seamless user experience.Used React components and state management to build a scalable and maintainable structure.Optimized layout for mobile and desktop devices using Tailwind’s utility classes.Improved performance and accessibility while maintaining clean, reusable code.",
    image: bookLogo,
    tags: ["HTML",  "JavaScript", "React JS", "Tailwind CSS"],
    github: "https://github.com/22p31a0535/BOOKSHELL.git",
    webapp: "https://bookshell-rz1g.onrender.com",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Created a personal portfolio website using React.js and Tailwind CSS to showcase projects and skills.Designed a modern, responsive layout with smooth scrolling, section transitions, and animations.Showcased projects with live links, code repositories, and a categorized skill set.Added a downloadable resume button, contact section, and interactive navbar for navigation.Focused on clean code, responsiveness, and a developer-friendly structure.",
    image: portfolioLogo,
    tags: ["React JS",  "HTML", "JavaScript","Tailwind CSS"],
    github: "https://github.com/22p31a0535/Portfolio.git",
    webapp: "https://portfolio-jspr.onrender.com",
  },
  {
    id: 2,
    title: "Memorygame",
    description:
      "Developed an interactive memory game ,Implemented card flipping logic and state management for smoothgameplay experience",
    image: mindgameLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/22p31a0535/MEMORY-GAME.git",
    webapp: "https://memory-game-b95j.onrender.com",
  },
  {
    id: 3,
    title: "BurgerShop website",
    description:
      "Developed a visually appealing and responsive Burger Shop website using HTML, CSS, and JavaScript.Created interactive sections like menu listings.Used JavaScript to add dynamic functionality such as toggleable navigation and animated banners.Designed with a focus on clean layout, vibrant colors, and engaging UI elements.Implemented responsive design principles for mobile and desktop compatibility.Showcased essential features like homepage, about, contact, and product highlights.",
    image: burgerLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/22p31a0535/Burger.git",
    webapp: "https://burgershop-3aj9.onrender.com",
  },


];

