import { ArrowRight } from "@phosphor-icons/react";
import { Column } from "../components/layout";

export function ExperienceSection() {
  return (
    <Column className="sm:max-w-[1090px]  w-full p-4">
      <p className="sm:text-5xl max-sm:text-4xl font-bold">Experiencias</p>
      <div className="grid md:grid-cols-3 gap-4">
        {experienceList.map((data, i) => (
          <Column key={i} className="min-h-[140px] w-full  relative rounded-sm">
            {data.video ? (
              <video
                src={data.video}
                autoPlay
                loop
                muted
                className="w-full object-cover h-[200px] rounded-t-sm"
              />
            ):(
              <div className="h-[200px] w-full"/>
            )}

            <p className="p-2 border-b rounded-t-sm">{data.title}</p>
            <Column className="px-2 pb-6">
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
                className="w-full bg-amber-100 border items-center gap-4 cursor ponter absolute bottom-2 flex justify-center  rounded-md"
              >
                <p>Acessar Demo</p> <ArrowRight size={20} />
              </a>
            )}
          </Column>
        ))}
      </div>
    </Column>
  );
}

const experienceList = [
  {
    title: "Auxiliar de cartório",
    dateLocal: "Jun 2023 - jan 2024 | Curitiba - BR (Presencial)",
    local:
      "Cartório Distrital da Barreirinha - Tabelionato de Notas e Registro Civil - CLT",
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
];
