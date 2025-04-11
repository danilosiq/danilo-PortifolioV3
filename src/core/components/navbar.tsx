import Icon from "@/core/assets/instaicon.png";
import {
  Binoculars,
  Certificate,
  House,
  Laptop,
  User,
} from "@phosphor-icons/react";
import Image from "next/image";
import { Row } from "./layout";

export function Navbar() {


  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 160;
      const elementPosition = el.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Row className="justify-between py-3 px-5 max-sm:hidden hover:bg-white transition-all fixed z-50 border-b w-full border-gra bg-white">
      <div className="w-[40%] rounded-full">
        <Image src={Icon} alt="Icon" width={50} height={50} className="rounded-full" />
      </div>
      <Row className="gap-6 justify-between">
        {navbarTopics.map((topic) => (
          <div
            key={topic.label}
            className="justify-center flex flex-col transition-all hover:shadow rounded-md p-1 cursor-pointer text-center items-center"
            onClick={() => scrollToSection(topic.targetId)}
          >
            {topic.icon}
            <p>{topic.label}</p>
          </div>
        ))}
      </Row>
    </Row>
  );
}



export const navbarTopics = [
  {
    icon: <House />,
    label: "Inicio",
    targetId: "inicio",
  },
  {
    icon: <User />,
    label: "Sobre mim",
    targetId: "sobre-mim",
  },
  {
    icon: <Laptop />,
    label: "Carreira",
    targetId: "carreira",
  },
  {
    icon: <Certificate />,
    label: "Certificações",
    targetId: "certificacoes",
  },
  {
    icon: <Binoculars />,
    label: "Projetos",
    targetId: "projetos",
  },
];