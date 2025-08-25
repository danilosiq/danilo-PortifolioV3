import { Certificate, Paragraph } from "@phosphor-icons/react";
import { Description } from "@radix-ui/react-dialog";
import { title } from "process";

export const ptBR = {
  //navbar
  navbar: {
    home: "Inicio",
    about: "Sobre mim",
    career: "Carreira",
    certifications: "Certificações",
    projects: "Projetos",
    lang: "Idioma",
  },
  bio: {
    age: "20 anos",
    location: "Curitiba - PR, Brasil",
  },
  aboutMe: {
    title: "Sobre mim",
    paragraph1:
      "Sou um jovem que vive intensamente tanto no universo online quanto no mundo artístico. Sempre estou em busca de algo novo para aprender, seja por curiosidade ou por vontade de me expressar melhor no que faço. Me considero uma pessoa calma, observadora e muito conectada com quem está ao meu redor.",
    paragraph2:
      "Sou movido por hobbies, paixões e desafios. Estou sempre explorando novos interesses, mas sem nunca deixar de lado aquilo que me motiva desde o início e motivando aqueles que passo",
  },

  hobbies: {
    title: "Meus hobbies",
    paragraph1:
      "Meu hobbie favorito sem duvidas é a arte, sempre que eu consigo, eu gosto de expor minha arte, e colocar meu estilo para o mundo.",
    paragraph2:
      "toda oportunidade que posso, gosto de escutar musica e estar ligamente ligado a isso, seja estudar, desenhar, treinar na academia, sempre gosto de estar com um bom som de RAP, TRAP, e muitos outros estilos",
    paragraph3:
      "Eu sou um cara bem nerd, seja pra games, desenhos animados, LEGO, pokemon são algo que me rodeiam talbem, vamos bater um papo sobre isso! Vai ser divertido",
  },

  //career
  careerTitle: "Carreira",
  careerContent:
    "Desenvolvedor Front-End com sólida experiência na criação de aplicações web responsivas e intuitivas. Especialista na integração entre front-end e back-end, com domínio no consumo de APIs e colaboração com equipes multidisciplinares. Atua com metodologias ágeis, aplicando boas práticas de estruturação de código e conceitos de engenharia de software.",

  //stacks
  stacksTitle: "Principais Stacks",

  //languages
  languages: {
    title: "Idiomas",
    english: {
      label: "Ingles",
      level: "Nivel B2 - intermediario/avançado",
    },
    portuguese: {
      label: "Portugues BR",
      level: "Nivel C2 - Nativo",
    },
  },

  //experience
  experience: {
    title: "Experiencias",
    subtitle: "Local e Tipo de contração:",
    period: "Período:",
    button_text: "Ver demo",

    ibolt: {
      title: "Ibolt - Dev Front End",
      subtitle_content: "Curitiba (Estagio presencial)",
      period: "Mai 2025 - atualmente",
      description:
        "Desenvolvimento de interfaces front-end com React, TypeScript, Next.js e Tailwind CSS, com foco em UX/UI. Atuação em equipe com metodologias ágeis (SCRUM), gerenciamento de tarefas via Trello e integração com APIs REST. Utilização de Figma para criação de layouts responsivos e aprendizado de aplicações como o FileMaker, tecnologia adotada pela empresa antes de entrar para a equipe.",
    },

    bookwise: {
      title: "Book Wise - Dev full stack",
      Subtitle_content: "Remoto - Freelancer",
      period: "Fev 2025 - Mar 2025",
      description:
        "Aplicação de reviews de livros com autenticação via Google e GitHub (NextAuth). Utilizei Prisma com banco de dados Neon e React Query para gerenciamento eficiente de dados.",
    },

    nau: {
      title: "Nau! Saas - Dev front end Jr",
      subtitle_content: "Remote – Freelancer",
      period: "Jan 2024 - out 2024",
      description:
        "Desenvolvi e integrei interfaces de usuário para o projeto “Nau!”, com foco no desenvolvimento front-end para plataformas web e mobile, realizando um redesign e integração com o back end usando consumação de API RESTFUL. Colaborei com a equipe via Slack, metodologias ágeis como SCRUM e utilizei designs do Figma.",
    },

    Notary: {
      title: "Auxiliar de cartório",
      subtitle_content:
        "Cartório Distrital da Barreirinha - Tabelionato de Notas e Registro Civil - CLT presencial",
      period: "Jun 2023 - jan 2024",
      description:
        "Prestei assistência a clientes, aprimorando minhas habilidades de comunicação e melhorando a capacidade de interagir de forma eficaz com diferentes perfis de pessoas e saber lidar em ambientes de pressão que exige agilidade nas tarefas.",
    },
  },

  certifications: {
    title: "Certificações",
    subtitle:
      "Aprender sempre foi um valor importante pra mim. Acredito que o conhecimento mostra não só inteligência, mas também disciplina e minhas certificações refletem isso.",
    button_text: "Ver detalhes",

    reactJs: {
      label: "Cretificado ReatJs",
      organization: "Faculdade tecnológica RocketSeat",
    },
    reactNative: {
      label: "Mini curso - React Native",
      organization: "Faculdade tecnológica RocketSeat",
    },

    udemy: {
      label: "React do Zero a Maestria (c/ hooks, router, API, projetos)",
      organization: "Matheus Battisti - Udemy",
    },
    tecpuc: {
      label: "Tecnólogo em Informática",
      organization: "TECPUC",
    },
    octopus: {
      label: "Curso Genesis - Arte tradicional & pintura digital",
      organization: "OCTOPUS",
    },
  },

  microCertifications: {
    title: "Micro Certificações",
    subtitle:
      "Aqui estão algumas micro certificações que obtive em cursos online. Elas demonstram meu compromisso com o aprendizado contínuo e minha busca por aprimorar minhas habilidades.",
    fundamentalsReact: "Funcadmentos em ReactJs",
    fundamentalsNext: "Fundamentos em NextJs",
    designSystem: "Design System",
    frontBack: "Front-end e Back-end",
    DeepeningHooks: "Aprodunfando em Hooks",
  },

  projects: {
    title: "Projetos",
    subtitle:
      'Aqui estão alguns dos projetos que desenvolvi. Clique em "ver mais" para aparecer as descrições',
    viewMore: "Ver mais",
    viewDemo: "ver demo",
    igniteTimer: {
      title: "Ignite Timer",
      description:
        "Um aplicativo de timer que permite aos usuários criar e gerenciar tarefas. Utilizei React, TypeScript, Tailwind CSS e entre outras libs. O app é responsivo e possui uma interface amigável.",
    },

    bookWise: {
      title: "BookWise",
      description:
        "Um aplicativo de leitura que permite aos usuários compartilhar resenhas com amigos. Voce pode realizar login com o Google ou com o Github, utilizei NextOAuth com prisma, banco de dados Neon com postgreeSQL e para requisições, utilizei o ReactQuery da Tanstack, uma aplicacao utilizando consumação de API RESTFUL, no front utilizei TailwindCSS. O app é responsivo e possui uma interface amigável.",
    },
    nau: {
      title: "Nau! Saas",
      description:
        "Um aplicativo de delivery que permite aos usuários fazer pedidos de produto animal. Utilizei Next.js, Tailwind CSS, React Native pois ele também é mobile. Participei na equipe com o objetivo de realizar um re-design das paginas a mostra no video, programar e integrar com o back-end tanto no web quanto no mobile, utilizando o Figma como base para o design. O app é responsivo e possui uma interface amigável.",
    },
    simpleScheduler: {
      title: "Agenda Descomplicada",
      description:
        "Um aplicativo de agenda que permite aos usuários adicionar, editar e excluir compromissos. Voce nao precisa acessar com login, porém é necessario conectar uma conta Google, pois ele é conectado com o Google Agenda, utilizando o Prisma, NextOAuth, TailwindCSS e entre outras libs. O app é responsivo e possui uma interface amigável.",
    },
    coffeeDelivery: {
      title: "Coffee Delivery",
      description:
        "Um aplicativo de delivery que permite aos usuários fazer pedidos de café. Utilizei Next.js, Tailwind CSS. O app é responsivo e possui uma interface amigável.",
    },

    secretWordGame: {
      title: "Secret Word Game",
      description:
        "Um jogo de adivinhação de palavras, onde voce tem uma dica, 5 tentativas de falha, voce precisa colocar cada letra completando a palavra secreta. Utilizei React, TypeScript, Tailwind CSS e entre outras libs. O app é responsivo e possui uma interface amigável.",
    },

    lav: {
      title: "LAV",
      description:
        "Esse é um projeto da faculdade no qual estou desenvolvendo desde o pimeiro periodo, ele consiste num, inicialmente aplicação web, no qual junta ideia de serviço de lavagem de roupa com delivery, no qual a pessoa escolhe as roupas a serem lavadas e disso são retiradas na casa do cliente e entregues depois de lavadas. Ele esta na fase prototipo e sempre esta passando por melhorias, seja de features, arquitetura de software entre outros",
    },
  },
};
