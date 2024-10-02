////////// React icons /////////

import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiUml } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSonarqube } from "react-icons/si";

////////// images /////////

import woodShop1 from "../assets/screen1WoodSHop.png";
import woodShop2 from "../assets/screen2WoodShop.png";
import woodShop3 from "../assets/screen3WoodShop.png";
import Movie1 from "../assets/screenMovies.png";
import Movie2 from "../assets/ScreenMovies2.png";
import Tasks1 from "../assets/screenFullStackTasks.png";
import Tasks2 from "../assets/sceenfullstchTask2.png";
import Todo1 from "../assets/screen1Deily.png";
import gym1 from "../assets/screenUltraGym1.png";
import gym2 from "../assets/screenGym2.png";
import gym3 from "../assets/sceenGym2.png";
import hospital1 from "../assets/pieHospital2.png";
import hospital2 from "../assets/pieMedical.png";
import portfolio from "../assets/portfolio.png";



export const projectList = [
  {
    id: "234",
    title: ["Plateforme E-commerce", "E-commerce Platform"],
    description: [
      "Une plateforme de commerce en ligne avec un tableau de bord administrateur et une authentification utilisateur, développée en équipe selon la méthodologie Agile, permettant aux utilisateurs de parcourir les produits, de les ajouter à leur panier et de réaliser des achats.",
      "An ecommerce platform with an admin dashboard and user authentication, developed as a team using Agile methodology, allowing users to browse products, add them to their cart, and make purchases.",
    ],
    image: [woodShop1, woodShop2, woodShop3], 
    builtTechnologies: [
      <FaHtml5 />,
      <RiReactjsFill />,
      <SiRedux />,
      <RiTailwindCssFill />,
      <FaLaravel />,
      <SiMysql />,
      <SiPostman />,
      <SiJirasoftware/>
    ],
    deployLink: "https://you-shop-ecom.netlify.app/",
    githubLink:
      "https://github.com/mohamed-dabach/you-shop-pro/tree/linking_to_server_ouaaddi",
    hosted: true,
    privacy: true,
  },
  {
    id: "134",
    title: ["Système de Gestion des Tâches", "Task Management System"],
    description: [
      "Une application de gestion des tâches qui aide les équipes ou les étudiants à organiser et à prioriser efficacement leurs tâches. Chaque utilisateur peut créer son compte et gérer ses tâches depuis n'importe où.",
      "A task management application that helps teams or students organize and prioritize their tasks efficiently. Each user can create their account and manage their tasks from anywhere.",
    ],
    image: [Tasks1, Tasks2],
    builtTechnologies: [
      <FaHtml5 />,
      <RiTailwindCssFill />,
      <RiReactjsFill />,
      <SiRedux />,
      <FaLaravel />,
      <SiMysql />,
      <SiPostman />,

    ],
    deployLink: "https://tasks-management-ouaaddi.netlify.app/",
    githubLink: "https://github.com/Abde-Ouaaddi29/full-stack-task-management",
    hosted: true,
    privacy: true,
  },
  {
    id: "847",
    title: [
      "Système de gestion de salles de sport",
      "Management System for Gym",
    ],
    description: [
      "Système de gestion pour propriétaires de salles de sport, permettant aux gestionnaires de ne plus rencontrer de problèmes d'organisation et de gérer facilement l'abonnement de chaque client",
      "Management system for gym owners, allowing managers to avoid organizational issues and easily manage each client's subscription.",
    ],
    image: [gym1, gym2, gym3],
    builtTechnologies: [
      <FaHtml5 />,
      <RiTailwindCssFill />,
      <RiReactjsFill />,
      <SiRedux />,
      <FaLaravel />,
      <SiMysql />,
      <SiPostman />,
      <SiJirasoftware/>

    ],
    deployLink: "https://example.com",
    githubLink: "https://example.com",
    hosted: false,
    privacy: false,
  },
  {
    id: "458",
    title: [
      "Système de Gestion des Vaccinations à l'Hôpital",
      "Hospital Vaccination Management System",
    ],
    description: [
      "Une plateforme intégrée qui optimise l'administration et la surveillance des vaccinations dans un cadre hospitalier, améliorant l'efficacité et les soins aux patients. Tout patient ou responsable d'enfant peut prendre un rendez-vous de vaccination avec un médecin.",
      "An integrated platform that optimizes the administration and monitoring of vaccinations in a hospital setting, improving efficiency and patient care. Any patient or child's guardian can schedule a vaccination appointment with a doctor.",
    ],
    image: [hospital2, hospital1],
    builtTechnologies: [
      <FaHtml5 />,
      <RiReactjsFill />,
      <RiTailwindCssFill />,
      <FaNode />,
      <SiExpress />,
      <SiPostman />,
      <SiJirasoftware/>,


    ],
    deployLink: "https://pie-medical.netlify.app/",
    githubLink: "https://github.com/mohamed-dabach/pie_medical",
    hosted: true,
    privacy: true,
  },
  {
    id: "637",
    title: ["Détails des Films Célèbres", "Famous Movies Details"],
    description: [
      "Une application simple qui affiche les détails des films célèbres en se basant sur une API de films.",
      "A simple application that displays details of famous movies based on a movie API.",
    ],
    image: [Movie1, Movie2],
    builtTechnologies: [
      <FaHtml5 />,
      <RiReactjsFill />,
      <SiRedux />,
      <RiTailwindCssFill />,
      <SiPostman />,
    ],
    deployLink: "https://movies-details-ouaaddi.netlify.app/",
    githubLink: "https://github.com/Abde-Ouaaddi29/MOVIES-TP-React.js-Api",
    hosted: true,
    privacy: true,
  },
  {
    id: "873",
    title: [
      "TodoList en Ligne | Organisation",
      "Online TodoList | Organization",
    ],
    description: [
      "Une application simple de liste de tâches pour organiser les tâches quotidiennes.",
      "A simple todo list application for organizing daily tasks.",
    ],
    image: [Todo1],
    builtTechnologies: [
      <FaHtml5 />,
      <RiReactjsFill />,
      <SiRedux />,
      <RiTailwindCssFill />,
    ],
    deployLink: "https://abde-ouaaddi29.github.io/todoList/",
    githubLink: "https://github.com/Abde-Ouaaddi29/todoList",
    hosted: true,
    privacy: true,
  },
  {
    id: "873",
    title: ["Site Portfolio", "Portfolio Website"],
    description: [
      "Un site portfolio personnel présentant des projets, des compétences et des informations de contact.",
      "A personal portfolio website showcasing projects, skills, and contact information.",
    ],
    image: [portfolio],
    builtTechnologies: [
      <FaHtml5 />,
      <RiReactjsFill />,
      <SiRedux />,
      <RiTailwindCssFill />,
    ],
    deployLink: "https://",
    githubLink:
      "https://github.com/Abde-Ouaaddi29/Portfolio",
    hosted: true,
    privacy: true,
  },
];

////////// myInformation /////////

import img from "../assets/imgRbg.png";
import about2 from "../assets/header2.jpg";
import Cv_Fr from "../../public/ABDERRAHIM_OUAADDI_CV_english.pdf";
import Cv_En from "../../public/ABDERRAHIM_OUAADDI_french.pdf";

export const myInfoList = {
  fullName: "ABDERRAHIM OUAADDI",
  myImage: img,
  phone: "+212 689474500",
  speciality: [
    ["Développeur Full Stack", "Full Stack Developer"],
    ["Développeur Back-End", "Back-End Developer"],
    ["Développeur Front-End", "Front-End Developer"],
  ],
  basePlace: ["Agadir, Maroc", "Agadir, Morocco"],
  status: [
    "Disponible pour un poste à temps plein",
    "Available for a full-time position",
  ],
  cv: [Cv_Fr, Cv_En],
  getTouchLink: "https://linktr.ee/abde29ouaaddi",
  myFeatures: [
    ["Développement Web", "Web Development"],
    ["Création d'APIs", "API Creation"],
    ["Méthodologie Agile & Scrum", "Agile Methodology & Scrum"],
    ["Créer des solutions innovantes", "Create innovative solutions"],
    ["Esprit d'Équipe", "Team Spirit"],
    ["Compétences en Communication", "Communication Skills"],
    ["Motivé & Flexible", "Motivated & Flexible"],
  ],
  mySocialMediaLinks: {
    email: "abderrahimouaaddi371@gmail.com",
    github: "https://github.com/Abde-Ouaaddi29",
    upwork: "https://www.upwork.com/freelancers/~0155a3ba5eb4a2f9e6",
    linkedin: "http://linkedin.com/in/abderrahim-ouaaddi-a01921292",
    twitter: "https://x.com/abderrahim88717",
  },
  myDesc: [
    "Je suis un développeur Full Stack passionné avec une expertise dans le développement frontend et backend. J'excelle dans la création d'APIs et le développement de solutions innovantes aux problèmes du monde réel. Je m'épanouis dans des environnements de travail en équipe et j'ai de l'expérience en méthodologie Agile et Scrum.",
    "I'm a passionate and driven Full Stack Developer with expertise in both frontend and backend development. I excel at creating APIs and developing innovative solutions to real-world problems. I thrive in team environments and am experienced in Agile Methodology and Scrum.",
  ],
  myImageDesc: about2,
};

///////// experiencesList ////////////

export const experiencesList = [
  {
    id: "23",
    date: ["Mai 2024", "May 2024"],
    title: [
      "Développeur Full Stack (Stage)",
      "Full Stack Developer (Internship)",
    ],
    company: ["Centre de Santé - Tafraout", "Health Center - Tafraout"],
    roles: [
      [
        "Travaillé en tant que membre d'une équipe de développement pour concevoir et créer un système de gestion de la vaccination.",
        "Le système gère les opérations de vaccination entre les médecins et les patients, permettant aux patients de demander des rendez-vous pour la vaccination.",
        "Collaboré avec l'équipe médicale pour définir les exigences et les fonctionnalités du système.",
        "Développé une API RESTful et assuré sa sécurité à l'aide de JWT (JSON Web Token).",
        "Utilisation de la méthodologie Agile (Scrum) avec des livraisons hebdomadaires.",
      ],
      [
        "Worked as part of a development team to design and build a vaccination management system.",
        "The system manages vaccination operations between doctors and patients, allowing patients to request appointments for vaccination.",
        "Collaborated with the medical team to define system requirements and functionalities.",
        "Developed a RESTful API and ensured its security using JWT (JSON Web Token).",
        "Using Agile methodology (Scrum) with weekly deliveries.",
      ],
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Agile (Scrum)",
    ],
  },
];

//////// education /////////

export const educationList = [
  {
    year: "2022-2024",
    degree: [
      "Diplôme en Développement Digital - Web Full Stack",
      "Diploma in Digital Development - Web Full Stack",
    ],
    institution: [
      "OFPPT - Institut Spécialisé de Technologie Appliquée - Tafraout",
      "OFPPT - Specialized Institute of Applied Technology - Tafraout",
    ],
  },
  {
    year: "2021-2022",
    degree: ["Cours d'Anglais", "English Courses"],
    institution: [
      "Centre Privé - Berlingou Hay Salam Agadir",
      "Private Center - Berlingou Hay Salam Agadir",
    ],
  },
  {
    year: "2020-2022",
    degree: ["Faculté des Sciences Appliquées", "Faculty of Applied Sciences"],
    institution: ["Agadir", "Agadir"],
  },
  {
    year: "2019-2020",
    degree: ["Baccalauréat Scientifique", "Scientific Baccalaureate"],
    institution: [
      "Lycée Elhaj Said - Drarga Agadir",
      "Lycée Elhaj Said - Drarga Agadir",
    ],
  },
];
