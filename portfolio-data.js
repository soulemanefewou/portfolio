export const projectsData = [
  {
    id: 1,
    title: "Shooter Game",
    description: "Un jeu de tir multi joueur ultra fluide et amusant",
    image: "projects/project1.PNG",
    technologies: ["/skills/react.png", "/skills/threejs.png", "/skills/tailwindcss.png"],
    githubUrl: "https://github.com/maximedoaw/shooter-game",
    liveUrl: "https://shooter-game-xi-lime.vercel.app/",
  },
  {
    id: 2,
    title: "SkillWokz",
    description: "plateforme de preparation au entretien technique et mise en relation entre les entreprises et les candidats",
    image: "projects/project2.PNG",
    technologies: ["/skills/react.png", "/skills/nextjs.png","/skills/typescript.png", "/skills/postgresql.png", "/skills/tailwindcss.png", "/skills/betterauth.png"],
    githubUrl: "https://github.com/maximedoaw/DevPrepAI",
    liveUrl: "https://prepwise-accelerator.vercel.app",
  },
  {
    id: 3,
    title: "Clone de X",
    description: "Un clone du réseau social X",
    image: "projects/project3.PNG",
    technologies: ["/skills/nextjs.png", "/skills/firebase.png", "/skills/tailwindcss.png"],
    githubUrl: "https://github.com/maximedoaw/X-clone",
    liveUrl: "https://x-clone-brown.vercel.app",
  },
  {
    id: 4,
    title: "Clone de IMDB",
    description: "Un clone du site IMDB",
    image: "projects/project4.PNG",
    technologies: ["/skills/react.png", "/skills/tailwindcss.png", "/skills/nextjs.png", ],
    githubUrl: "https://github.com/maximedoaw/IMDBclone",
    liveUrl: "https://imdb.100jsprojects.com/",
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Développeur Full Stack",
    company: "Twingo SARL",
    period: "2023 - 2024",
    location: "Yaoundé, Cameroun",
    description: "Développement d'applications web modernes avec React, Firebase et Appwrite.",
    achievements: [
      "Optimisation des performances réduisant le temps de chargement de 40%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Appwrite"],
    type: "Stage",
    logo:"experiences/img1.jpg"
  },
  {
    id: 2,
    title: "Développeur Frontend",
    company: "Ajuoza",
    period: "2024 - 2025",
    location: "Yaoundé, Cameroun",
    description: "Création d'interfaces utilisateur responsive et accessibles. Participation active aux décisions techniques et architecturales.",
    achievements: [
      "Refonte complète de l'interface utilisateur",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Figma", "Jest"],
    type: "Stage",
    logo:"experiences/img2.jpg"
  },
  {
    id: 3,
    title: "Software Engineer and Founder",
    company: "SkillWokz",
    period: "2025 - présent",
    location: "Yaoundé, Cameroun",
    description: "SAAS d'aide a la preparation aux entretiens techniques, automatisation de pipeline de rerutement, formation et mise en relation B2B",
    achievements: [
      "Module de création de portfolio et CV",
      "Préparation aux entretiens et formations des candidat via bootcamp",
      "Matching intelligent candidat-recruter baser sur competences, postes , experience et plan de carriere"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Neon", "Better-auth"],
    type: "Solo",
    logo:"experiences/img3.png"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Baccalauréat D",
    school: "Lycée Bilingue d'Ekounou",
    period: "2021 - 2022",
    location: "Yaoundé, Cameroun",
  },
  {
    id: 2,
    degree: "BTS en génie logiciel",
    school: "ISSAM",
    period: "2022 - 2024",
    location: "Yaoundé, Cameroun",
  },
  {
    id: 3,
    degree: "Licence en génie logiciel",
    school: "ISSAM",
    period: "2024 - 2025",
    location: "Yaoundé, Cameroun",
  }
]; 
 
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, image: "/skills/react.png" },
      { name: "JavaScript", level: 85, image: "/skills/javascript.png" },
      { name: "TypeScript", level: 80, image: "/skills/typescript.png" },
      { name: "Next.js", level: 75, image: "/skills/nextjs.png" },
      { name: "HTML", level: 90, image: "/skills/html.png" },
      { name: "CSS", level: 90, image: "/skills/css.png" },
      { name: "Tailwind CSS", level: 95, image: "/skills/tailwindcss.png" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, image: "/skills/nodejs.png" },
      { name: "Express", level: 75, image: "/skills/express.png" },
      { name: "MongoDB", level: 70, image: "/skills/mongodb.png" },
      { name: "PostgreSQL", level: 65, image: "/skills/postgresql.png" },
      { name: "GraphQL", level: 70, image: "/skills/graphql.png" },
      { name: "Firebase", level: 70, image: "/skills/firebase.png" }
    ]
  },
  {
    category: "Outils & Autres",
    skills: [
      { name: "Git", level: 85, image: "/skills/git.png" },
      { name: "GitHub", level: 80, image: "/skills/github.png" },
      { name: "Figma", level: 75, image: "/skills/figma.png" },
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    name: "Next.js Projects - 9 NextJS 15 projects (Instagram, Google.",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "https://www.udemy.com/certificate/UC-b1e0deb5-6750-48d3-8638-094d77102a17/",
    skills: ["React", "JavaScript", "Next.js", "Firebase", "Tailwind CSS"]
  },
  {
    id: 2,
    name: "The Beginners Guide to 3D Web Game Development with Three.JS",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "https://www.udemy.com/certificate/UC-643054b5-1bcf-4daf-8c57-d0f420f03197/",
    skills: ["React", "JavaScript", "Three.js", "Frontend"]
  },
  {
    id: 3,
    name: "Introduction to Cloud Computing on AWS for Beginners [2025]",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "https://www.udemy.com/certificate/UC-59ee9166-015b-42e1-9ed3-6dfb53b4f3e3/",
    skills: ["AWS", "Cloud Computing"]
  },
];