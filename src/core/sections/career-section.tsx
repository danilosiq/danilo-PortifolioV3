import DaniloDraw from "@/core/assets/fazendo2.png";
import Image from "next/image";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma, SiTypescript } from "react-icons/si";
import { Column } from "../components/layout";
export function CareerSection() {
  return (
    <section className=" gap-4 items-center  max-w-[1090px]  w-full ">
      <div className="items-center max-sm:flex-col flex-row flex">
        <Image
          src={DaniloDraw}
          alt="Hobbies Image"
          className="w-[350px] max-sm:hidden object-contain h-[350px] "
        />
        <Column>
          <p className="text-5xl font-bold ">Carreira</p>
          <Image
            src={DaniloDraw}
            alt="Hobbies Image"
            className="w-[350px] sm:hidden object-contain h-[350px] "
          />
          <p className="text-justify">
            Desenvolvedor Front-End com sólida experiência na criação de
            aplicações web responsivas e intuitivas. Especialista na integração
            entre front-end e back-end, com domínio no consumo de APIs e
            colaboração com equipes multidisciplinares. Atua com metodologias
            ágeis, aplicando boas práticas de estruturação de código e conceitos
            de engenharia de software.
          </p>
          <Column>
            <p className=" mt-6 font-bold text-xl">Principais Stacks</p>
            <div className="grid max-sm:grid-cols-1 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-2">
              {langDevList.map((lang) => (
                <Column
                  key={lang.label}
                  className="shadow-md bg-white items-center w-full rounded-md p-1"
                >
                  <div className={`text-xl ${lang.color}`}>{lang.icon}</div>
                  {lang.label}
                </Column>
              ))}
            </div>
          </Column>
          <Column>
            <p className=" mt-6 font-bold text-xl">Idiomas</p>
            <div className="gap-4 sm:flex-row flex-col flex">
              {langList.map((lang) => (
                <Column
                  key={lang.label}
                  className="bg-white shadow-md items-center w-full rounded-md p-1"
                >
                  <p className="font-bold text-lg">{lang.label}</p>
                  <p className="text-sm"> {lang.level}</p>
                </Column>
              ))}
            </div>
          </Column>
        </Column>
      </div>
    </section>
  );
}

const langList = [
  {
    label: "Ingles",
    level: "Nivel B2 - intermediario/avançado",
  },
  {
    label: "Portugues BR",
    level: "Nivel C2 - Nativo",
  },
];

export const langDevList = [
  {
    icon: <FaReact />,
    label: "ReactJs",
    color: "text-blue-400",
  },
  {
    icon: <RiNextjsFill />,
    label: "NextJs",
    color: "text-black",
  },
  {
    icon: <SiTypescript />,
    label: "TypeScript",
    color: "text-blue-800",
  },
  {
    icon: <RiTailwindCssFill />,
    label: "TailwindCSS",
    color: "text-blue-300",
  },
  {
    icon: <GrMysql />,
    label: "SQL",
    color: "text-orange-400",
  },
  {
    icon: <SiPrisma />,
    label: "Prisma",
    color: "text-black",
  },
  {
    icon: <FaNodeJs />,
    label: "NodeJs",
    color: "text-green-600",
  },
  {
    icon: <FaGitAlt />,
    label: "Git",
    color: "text-orange-600",
  },
];
