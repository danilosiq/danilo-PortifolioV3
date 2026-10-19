import type { en } from "./en";

export const es: typeof en = {
  ui: { close: "Cerrar", previous: "Anterior", next: "Siguiente", openMenu: "Abrir menú" },
  resume: {
    open: "Ver currículum",
    selectLanguage: "Selecciona el idioma",
    close: "Cerrar",
    description: "Elige una de las tres tarjetas para abrir el currículum en PDF en una nueva pestaña.",
    viewPdf: "Ver PDF",
    newTab: "nueva pestaña",
  },
  navbar: {
    home: "Inicio", about: "Sobre mí", career: "Trayectoria",
    certifications: "Certificaciones", projects: "Proyectos", lang: "Idioma",
  },
  bio: { age: "{{age}} años", location: "Curitiba - PR, Brasil" },
  aboutMe: {
    title: "Sobre mí",
    paragraph1: "Soy una persona que vive intensamente tanto el mundo digital como el artístico. Siempre busco algo nuevo que aprender, ya sea por curiosidad o por el deseo de expresarme mejor en lo que hago. Me considero una persona tranquila, observadora y cercana a quienes me rodean.",
    paragraph2: "Me motivan mis aficiones, mis pasiones y los desafíos. Siempre exploro nuevos intereses, sin dejar de lado lo que me ha impulsado desde el principio y procurando motivar a quienes se cruzan en mi camino.",
  },
  hobbies: {
    title: "Mis aficiones",
    paragraph1: "Mi afición favorita es el arte. Siempre que puedo, me gusta compartir mis creaciones y mostrar mi estilo al mundo.",
    paragraph2: "Aprovecho cada oportunidad para escuchar música. Cuando estudio, dibujo o entreno en el gimnasio, siempre disfruto de un buen ritmo: rap, trap y muchos otros estilos.",
    paragraph3: "También me encantan los videojuegos, los dibujos animados, LEGO y Pokémon. ¡Hablemos de ello! Seguro que será divertido.",
  },
  careerTitle: "Trayectoria profesional",
  careerContent: "Desarrollador Full Stack con experiencia en aplicaciones web y móviles con React, Next.js, React Native, TypeScript y Node.js. Trabajo en comunicación en tiempo real, integración con APIs REST y pruebas automatizadas. Contribuyo a soluciones de mensajería y notificaciones desde los flujos de usuario, la visión de producto y el diseño, en colaboración con equipos técnicos.",
  stacksTitle: "Tecnologías principales",
  languages: {
    title: "Idiomas",
    english: { label: "Inglés", level: "Nivel B1 - Intermedio" },
    portuguese: { label: "Portugués de Brasil", level: "Nativo" },
  },
  experience: {
    title: "Experiencia", subtitle: "Ubicación y tipo de contratación:",
    period: "Periodo:", button_text: "Ver demo",
    exban: {
      title: "Exban - Desarrollador Full Stack",
      subtitle_content: "Curitiba, Brasil - Contrato laboral CLT",
      period: "Feb 2026 - actualidad",
      description: "Habilité la comunicación en tiempo real en la plataforma interna mediante funciones de chat con React, TypeScript, Node.js, Prisma y WebSocket. Contribuí a la concepción de soluciones de mensajería y notificaciones en la aplicación, definiendo flujos de usuario, visión de producto y diseño en Figma junto al equipo técnico. Implementé pruebas unitarias y E2E automatizadas para verificar el comportamiento de la aplicación y respaldar la fiabilidad de las entregas. Incorporé Codex y Spec-Driven Development para apoyar entregas con IA basadas en especificaciones. Colaboré con producto y tecnología mediante Jira, Scrum y Kanban.",
    },
    ibolt: {
      title: "Ibolt - Desarrollador Front-end",
      subtitle_content: "Curitiba, Brasil - Prácticas presenciales",
      period: "May 2025 - Ene 2026",
      description: "Respondí a necesidades de uso en web y móvil con interfaces adaptables en React, Next.js, TypeScript y Tailwind CSS y aplicaciones en React Native y Expo. Integré lógica de negocio con FileMaker para apoyar la optimización de procesos internos, colaborando en un equipo ágil con Git, GitHub y GitFlow.",
    },
    bookwise: {
      title: "BookWise - Desarrollador Full Stack",
      subtitle_content: "Remoto - Freelance", period: "Feb 2025 - Mar 2025",
      description: "Aplicación de reseñas de libros con autenticación mediante Google y GitHub (NextAuth). Utilicé Prisma con una base de datos Neon y React Query para gestionar los datos.",
    },
    nau: {
      title: "Nau! SaaS - Desarrollador Front-end Júnior",
      subtitle_content: "Remoto - Freelance", period: "Ene 2024 - Ene 2025",
      description: "Conecté interfaces web y móviles con los servicios de back-end mediante APIs REST, utilizando React Native, Expo, Next.js y TypeScript. Rediseñé interfaces a partir de Figma y apliqué Tailwind CSS para distintos tamaños de pantalla; coordiné tareas con el equipo mediante Shortcut y Slack.",
    },
    Notary: {
      title: "Auxiliar de notaría",
      subtitle_content: "Notaría del Distrito de Barreirinha - Contrato laboral CLT presencial",
      period: "Jun 2023 - Ene 2024",
      description: "Atendí a clientes de distintos perfiles y reforcé mis habilidades de comunicación en un entorno que exige rapidez, precisión y capacidad para trabajar bajo presión.",
    },
  },
  certifications: {
    title: "Certificaciones",
    subtitle: "El aprendizaje continuo es un valor importante para mí. Creo que el conocimiento refleja tanto capacidad como disciplina, y mis certificaciones muestran ese compromiso.",
    button_text: "Ver detalles",
    reactJs: { label: "Certificado de React.js", organization: "Rocketseat" },
    reactNative: { label: "Curso breve de React Native", organization: "Rocketseat" },
    udemy: { label: "React desde cero (hooks, router, API y proyectos)", organization: "Matheus Battisti - Udemy" },
    tecpuc: { label: "Tecnología de la información", organization: "TECPUC" },
    octopus: { label: "Curso Genesis - Arte tradicional y pintura digital", organization: "OCTOPUS" },
  },
  microCertifications: {
    title: "Microcertificaciones",
    subtitle: "Estas son algunas de las microcertificaciones que he obtenido en cursos en línea. Reflejan mi compromiso con el aprendizaje continuo y la mejora de mis habilidades.",
    fundamentalsReact: "Fundamentos de React.js",
    fundamentalsNext: "Fundamentos de Next.js",
    designSystem: "Sistemas de diseño",
    frontBack: "Front-end y back-end",
    DeepeningHooks: "Profundización en hooks",
  },
  projects: {
    title: "Proyectos",
    subtitle: "Estos son algunos de mis proyectos. Haz clic en «Ver más» para consultar sus descripciones.",
    viewMore: "Ver más", viewDemo: "Ver demo",
    igniteTimer: {
      title: "Ignite Timer",
      description: "Aplicación de temporizador para crear y gestionar tareas. Desarrollada con React, TypeScript y Tailwind CSS, con una interfaz adaptable e intuitiva.",
    },
    bookWise: {
      title: "BookWise",
      description: "Aplicación de lectura para compartir reseñas de libros con autenticación mediante Google o GitHub. Utiliza Next.js, TypeScript, Prisma, Neon con PostgreSQL y React Query para gestionar las solicitudes, además de Tailwind CSS para la interfaz.",
    },
    nau: {
      title: "Nau! SaaS",
      description: "Aplicación de pedidos de productos para animales, desarrollada para web y móvil con Next.js, Tailwind CSS y React Native. Participé en el rediseño de pantallas y su integración con el back-end a partir de diseños en Figma.",
    },
    simpleScheduler: {
      title: "Agenda sencilla",
      description: "Aplicación para añadir, editar y eliminar citas, integrada con Google Calendar. Utiliza Prisma, autenticación con Google y Tailwind CSS, con una interfaz adaptable e intuitiva.",
    },
    coffeeDelivery: {
      title: "Coffee Delivery",
      description: "Aplicación para realizar pedidos de café, desarrollada con Next.js y Tailwind CSS. Incluye una interfaz adaptable e intuitiva.",
    },
    secretWordGame: {
      title: "Secret Word Game",
      description: "Juego para adivinar una palabra secreta a partir de una pista, con cinco intentos y selección de letras. Desarrollado con React, TypeScript y Tailwind CSS, con una interfaz adaptable.",
    },
    lav: {
      title: "LAV",
      description: "Proyecto universitario que combina un servicio de lavandería con recogida y entrega a domicilio. El usuario selecciona las prendas, que se recogen y se devuelven una vez limpias. El prototipo evoluciona con mejoras de funcionalidad y arquitectura de software.",
    },
  },
};
