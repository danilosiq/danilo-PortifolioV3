import { ArrowRight } from "@phosphor-icons/react";
import { Column, Row } from "../components/layout";
import Image from "next/image";
import CartorioImg from "@/core/assets/cartorio.jpg";
import IboltImg from "@/core/assets/ibolt.jpg";
export function ExperienceSection() {
  return (
    <Column className="sm:max-w-[1090px]  w-full">
      <p className="sm:text-5xl max-sm:text-4xl font-bold pb-4">Experiencias</p>

      {experienceList.map((data, i) => (
        <div
          key={i}
          className="min-h-[150px] h-full flex max-md:flex-col border-b w-full gap-4 mb-4 pb-4 "
        >
          <div className="w-[300px] md:w-[500px]  h-full relative">
            {data.video && (
              <video
                src={data.video}
                autoPlay
                loop
                muted
                className="w-full object-cover h-full rounded-sm"
              />
            )}
            {data.image && (
              <div className="w-full h-[260px] ">
                <Image
                  src={data.image}
                  alt="Work Experience Image"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            )}
          </div>
          <Column className=" w-full md:w-[50%] justify-between">
            <Column>
              <p className=" rounded-t-sm">{data.title}</p>
              <label htmlFor="" className="text-sm">
                Local - Tipo de contração:
                <span className="text-gray-500 text-sm">{data.local}</span>
              </label>
              <Column className="my-5">
                <p className="text-justify">{data.description}</p>
              </Column>
            </Column>
            {data.demo && (
              <a
                href={data.demo}
                target="_blank"
                className="w-full bg-amber-100 border items-center gap-4 cursor ponter flex justify-center  rounded-md"
              >
                <p>Acessar Demo</p> <ArrowRight size={20} />
              </a>
            )}
          </Column>
        </div>
      ))}
    </Column>
  );
}

const experienceList = [
  {
    title: "Auxiliar de cartório",
    dateLocal: "Jun 2023 - jan 2024 | Curitiba - BR (Presencial)",
    local:
      "Cartório Distrital da Barreirinha - Tabelionato de Notas e Registro Civil - CLT",
    image: CartorioImg,
    description:
      "Prestei assistência a clientes, aprimorando minhas habilidades de comunicação e melhorando a capacidade de interagir de forma eficaz com diferentes perfis de pessoas e saber lidar em ambientes de pressão que exige agilidade nas tarefas.",
  },

  {
    title: "Nau! Saas - Dev front end Jr",
    dateLocal: "Jan 2024 - out 2024 | Curitiba-BR",
    demo: "https://www.naudelivery.com.br/",
    video: "/videos/nau-video.mp4",
    local: "Remoto - Freelancer",
    description:
      "Desenvolvi e integrei interfaces de usuário para o projeto “Nau!”, com foco no desenvolvimento front-end para plataformas web e mobile, realizando um redesign e integração com o back end usando consumação de API RESTFUL. Colaborei com a equipe via Slack, metodologias ágeis como SCRUM e utilizei designs do Figma.",
  },

  {
    title: "Book Wise - Dev full stack",
    dateLocal: "Feb 2025 - feb 2025 | Curitiba - BR (Remoto)",
    demo: "https://book-wise-coral-kappa.vercel.app/",
    video: "/videos/bookWise-video.mp4",
    local: "Remoto - Freelancer",
    description:
      "Aplicação de reviews de livros com autenticação via Google e GitHub (NextAuth). Utilizei Prisma com banco de dados Neon e React Query para gerenciamento eficiente de dados.",
  },
  {
    title: "Ibolt - Dev Front End - Estágio",
    dateLocal: "Mai 2025 - atualmente",
    image: IboltImg,
    local: "Curitiba - BR (Presencial)",
    description:
      "Desenvolvimento de interfaces front-end com React, TypeScript, Next.js e Tailwind CSS, com foco em UX/UI. Atuação em equipe com metodologias ágeis (SCRUM), gerenciamento de tarefas via Trello e integração com APIs REST. Utilização de Figma para criação de layouts responsivos e aprendizado de aplicações como o FileMaker, tecnologia adotada pela empresa antes de entrar para a equipe.",
  },
];
