import { Certificate, Paragraph } from "@phosphor-icons/react";
import { Description } from "@radix-ui/react-dialog";
import { title } from "process";

export const en = {
  //navbar
  navbar: {
    home: "Home",
    about: "About me",
    career: "Career",
    certifications: "Certifications",
    projects: "Projects",
    lang:"Language"
  },

  bio:{
    age:"20 years old",
    location:"Curitiba - PR, Brazil"
  },

  aboutMe: {
    title: "About me",
    paragraph1:
      "I’m a young person who lives intensely in both the online world and the artistic universe. I’m always looking for something new to learn, whether out of curiosity or a desire to better express myself in what I do. I see myself as a calm, observant person, deeply connected with those around me.",
    paragraph2:
      "I’m driven by hobbies, passions, and challenges. I’m always exploring new interests, while never letting go of what has motivated me from the very beginning and inspiring those I meet along the way.",
  },

  hobbies: {
    title: "My hobbies",
    paragraph1:
      "My favorite hobby, without a doubt, is art. Whenever I can, I like to showcase my work and share my style with the world.",
    paragraph2:
      "Every chance I get, I love listening to music and staying closely connected to it. Whether I’m studying, drawing, or training at the gym, I’m always enjoying a good beat—RAP, TRAP, and many other genres.",
    paragraph3:
      "I’m also a bit of a nerd into games, cartoons, LEGO, and Pokémon, which are all part of my world. Let’s have a chat about it! It’s going to be fun.",
  },

  //career
  careerTitle: "My career",
  careerContent:
    "Front-End Developer with solid experience in creating responsive and intuitive web applications. Specialized in bridging front-end and back-end, with expertise in API consumption and collaboration with multidisciplinary teams. Skilled in agile methodologies, applying best practices in code structuring and software engineering principles.",

  //stacks
  stacksTitle: "Main Stacks",

  //languages
  languages: {
    title: "Languages",
    english: {
      label: "English",
      level: "Level B2 - Intermediate/Advanced",
    },
    portuguese: {
      label: "Portuguese BR",
      level: "Level C2 - Native",
    },
  },

  //experience
  experience: {
    title: "Experience",
    subtitle: "Location and employment type:",
    period: "Period:",
    button_text: "View Demo",

    ibolt: {
      title: "iBolt - Front end Developer",
      subtitle_content: "Curitiba, Brazil (On-site Internship)",
      period: "May 2025 - Present",
      description:
        "Front-end interface development with React, TypeScript, Next.js, and Tailwind CSS, focusing on UX/UI. Team collaboration using agile methodologies (SCRUM), task management via Trello, and integration with REST APIs. Proficient in using Figma to create responsive layouts, as well as learning to work with applications such as FileMaker—a technology adopted by the company prior to joining the team.",
    },

    bookwise: {
      title: "BookWise - Full stack Developer",
      subtitle_content: "Remote – Freelancer",
      period: "Feb 2025 - Mar 2025",
      description:
        "Developed a book review application with authentication via Google and GitHub (NextAuth). Implemented Prisma with a Neon database and used React Query for efficient data management.",
    },

    nau: {
      title: "Nau! Saas - Front end Developer Jr",
      subtitle_content: "Remote – Freelancer",
      period: "Jan 2024 - Oct 2024",
      description:
        "Developed and integrated user interfaces for the 'Nau!' project, focusing on front-end development for both web and mobile platforms. Conducted a redesign and integrated with the back end through RESTful API consumption. Collaborated with the team via Slack, applied agile methodologies such as SCRUM, and worked with designs provided in Figma.",
    },

    Notary: {
      title: "Notary Assistant",
      subtitle_content:
        "Barreirinha District Notary Office – Notary and Civil Registry – On-site, CLT",
      period: "Jun 2023 - Jan 2024",
      description:
        "Provided customer assistance, enhancing communication skills and the ability to interact effectively with diverse profiles. Gained experience working under pressure in environments that demand agility and efficiency in task execution.",
    },
  },

  certifications: {
    title: "Certifications",
    subtitle:
      "Learning has always been an important value for me. I believe that knowledge reflects not only intelligence but also discipline, and my certifications are a testament to that.",
    button_text: "Show details",

    reactJs: {
      label: "ReactJs Certificate",
      organization: "Rocketseat Technology College",
    },
    reactNative: {
      label: "Mini course - React Native",
      organization: "Rocketseat Technology College",
    },

    udemy: {
      label: "React from Zero to Mastery (with hooks, router, API, Projects)",
      organization: "Matheus Battisti - Udemy",
    },
    tecpuc: {
      label: "Technologist in Computer Science",
      organization: "TECPUC",
    },
    octopus: {
      label: "Genesis Course - Traditional Art & Digital Painting",
      organization: "OCTOPUS",
    },
  },

  microCertifications: {
    title: "Micro Certifications",
    subtitle:
      "Here are some micro-certifications I have earned through online courses. They demonstrate my commitment to continuous learning and my drive to improve my skills.",
    fundamentalsReact: "Fundamentals in ReactJs",
    fundamentalsNext: "Fundamentals in NextJs",
    designSystem: "Design System",
    frontBack: "Front-end and Back-end",
    DeepeningHooks: "Deepening Hooks",
  },

  projects: {
    title: "Projects",
    subtitle:
      "Here are some of the projects I’ve worked on. Click “View More” to see the descriptions.",
    viewMore: "View More",
    viewDemo: "View Demo",
    igniteTimer: {
      title: "Ignite Timer",
      description:
        "A timer app that allows users to create and manage tasks. Built with React, TypeScript, Tailwind CSS, and other libraries. The app is responsive and features a user-friendly interface.",
    },

    bookWise: {
      title: "BookWise",
      description:
        "A book review application that allows users to authenticate via Google and GitHub. Built with Next.js, TypeScript, Prisma, and Neon database. The app uses React Query for efficient data management.",
    },
    nau: {
      title: "Nau! Saas",
      description:
        "A SaaS project where I worked on the front-end development for both web and mobile platforms. The project involved redesigning the user interface and integrating with the back end through RESTful API consumption. Collaborated with the team using Slack and applied agile methodologies such as SCRUM.",
    },
    simpleScheduler: {
      title: "Simple Scheduler",
      description:
        "A scheduling app that allows users to add, edit, and delete appointments. No login is required, but users need to connect a Google account since the app integrates with Google Calendar. Built using Prisma, NextAuth, Tailwind CSS, and other libraries. The app is responsive and features a user-friendly interface.",
    },
    coffeeDelivery: {
      title: "Coffee Delivery",
      description:
        "A delivery app that allows users to order coffee. Built with Next.js and Tailwind CSS. The app is responsive and features a user-friendly interface.",
    },

    secretWordGame: {
      title: "Secret Word Game",
      description:
        "A word-guessing game where you receive a hint and have 5 attempts to guess the secret word by filling in each letter. Built with React, TypeScript, Tailwind CSS, and other libraries. The app is responsive and features a user-friendly interface.",
    },

    lav: {
      title: "LAV",
      description:
        "This is a college project I’ve been developing since my first semester. It is initially a web application that combines the idea of a laundry service with delivery. Users select the clothes to be washed, which are then picked up from their home and delivered back after cleaning. The project is currently in the prototype phase and is continuously improving, including new features, software architecture, and more.",
    },
  },
};
