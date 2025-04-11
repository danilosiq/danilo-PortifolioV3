import { DialogProject } from "../components/dialog-project";
import { Column } from "../components/layout";

export function ProjectsSession() {
  return (
    <section className="">
      <Column className=" gap-4">
        <h1 className="text-5xl font-bold">Projetos</h1>
        <p className="mb-6">
          Aqui estão alguns dos projetos que desenvolvi. Clique em "ver mais"
          para aparecer as descrições
        </p>
      </Column>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, i) => (
          <Column
            key={i}
            className=" h-[300px] border justify-between rounded-md w-full  "
          >
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="w-full object-cover h-[200px] rounded-t-md"
            />
            <p className="text-center">{project.label}</p>
            <DialogProject
              description={project.description}
              label={project.label}
              video={project.video}
              link={project.link}
            />
          </Column>
        ))}
      </div>
    </section>
  );
}

export const projectsList = [
  {
    label: "Ignite Timer",
    video: "/videos/ignite-timer.mp4",
    link:'https://ignite-timer-mocha.vercel.app/',
    description:
      "Um aplicativo de timer que permite aos usuários criar e gerenciar tarefas. Utilizei React, TypeScript, Tailwind CSS e entre outras libs. O app é responsivo e possui uma interface amigável.",
  },
  {
    label: "Agenda Descomplicada",
    video: "/videos/agenda-video.mp4",
    link:'https://ignite-call-three-xi.vercel.app/',
    description:
      "Um aplicativo de agenda que permite aos usuários adicionar, editar e excluir compromissos. Voce nao precisa acessar com login, porém é necessario conectar uma conta Google, pois ele é conectado com o Google Agenda, utilizando o Prisma, NextOAuth, TailwindCSS e entre outras libs. O app é responsivo e possui uma interface amigável.",
  },
  {
    label: "Nau! Delivery",
    video: "/videos/nau-video.mp4",
    link:'https://www.naudelivery.com.br/',
    description:
      "Um aplicativo de delivery que permite aos usuários fazer pedidos de produto animal. Utilizei Next.js, Tailwind CSS, React Native pois ele também é mobile. Participei na equipe com o objetivo de realizar um re-design das paginas a mostra no video, programar e integrar com o back-end tanto no web quanto no mobile, utilizando o Figma como base para o design. O app é responsivo e possui uma interface amigável.",
  },
 {
    label: "BookWise",
    video: "/videos/bookWise-video.mp4",
    link:'https://book-wise-coral-kappa.vercel.app/',
    description:
      "Um aplicativo de leitura que permite aos usuários compartilhar resenhas com amigos. Voce pode realizar login com o Google ou com o Github, utilizei NextOAuth com prisma, banco de dados Neon com postgreeSQL e para requisições, utilizei o ReactQuery da Tanstack, uma aplicacao utilizando consumação de API RESTFUL, no front utilizei TailwindCSS. O app é responsivo e possui uma interface amigável.",
  },

  {
    label: "Coffee Delivery",
    video: "/videos/coffee-video.mp4",
    link:'https://coffee-delivery-phi-bay.vercel.app/',
    description:
      "Um aplicativo de delivery que permite aos usuários fazer pedidos de café. Utilizei Next.js, Tailwind CSS. O app é responsivo e possui uma interface amigável.",
  },
  {
    label: "Secret Word Game",
    video: "/videos/secretWG.mp4",
    link:'https://secret-word-game-flax.vercel.app/',
    description:
      " Um jogo de adivinhação de palavras, onde voce tem uma dica, 5 tentativas de falha, voce precisa colocar cada letra completando a palavra secreta. Utilizei React, TypeScript, Tailwind CSS e entre outras libs. O app é responsivo e possui uma interface amigável.",
  },
  {
    label: "LAV",
    video: "/videos/lav.mp4",
    description:
      "Esse é um projeto da faculdade no qual estou desenvolvendo desde o pimeiro periodo, ele consiste num, inicialmente aplicação web, no qual junta ideia de serviço de lavagem de roupa com delivery, no qual a pessoa escolhe as roupas a serem lavadas e disso são retiradas na casa do cliente e entregues depois de lavadas. Ele esta na fase prototipo e sempre esta passando por melhorias, seja de features, arquitetura de software entre outros",
  },
];

