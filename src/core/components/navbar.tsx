import Icon from "@/core/assets/instaicon.png";
import {
  Binoculars,
  Certificate,
  House,
  Laptop,
  Translate,
  User,
} from "@phosphor-icons/react";
import Image from "next/image";
import { Column, Row } from "./layout";
import { Globe, Languages } from "lucide-react";
import { useTranslation } from "react-i18next"
import { langList } from "@/lib/translate/langList";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i18n from "@/lib/translate/i18next";
import { useState } from "react";

export function Navbar() {
  const [dropdownmenuOpen, setDropdownMenuOpen] = useState(false);
  const { t } = useTranslation()
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

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang)
    setDropdownMenuOpen(false)
  }

  return (
    <Row className="justify-between py-3 px-5 max-sm:hidden hover:bg-white transition-all fixed z-50 border-b w-full border-gra bg-white">
      <div className="w-[40%] rounded-full">
        <Image
          src={Icon}
          alt="Icon"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <Row className="gap-6 justify-between">
        {navbarTopics.map((topic) => (
          <div
            key={topic.label}
            className="justify-center flex flex-col transition-all hover:shadow rounded-md p-1 cursor-pointer text-center items-center"
            onClick={() => scrollToSection(topic.targetId)}
          >
            {topic.icon}
            <p>{t(`navbar.${topic.label}`)}</p>
          </div>
        ))}
        <DropdownMenu open={dropdownmenuOpen} onOpenChange={setDropdownMenuOpen}>
          <DropdownMenuTrigger>
            <div className="justify-center flex flex-col transition-all hover:shadow rounded-md p-1 cursor-pointer text-center items-center">
              <Translate />
              <p>{t(`navbar.lang`)}</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="p-2 ">
            <Column className="gap-3">
              {langList.map((lang, i) => (
                <div key={i} className="flex cursor-pointer items-center" onClick={() => handleChangeLanguage(lang.key)}>
                  <div className="w-[20px] h-[15px] mr-2">{lang.icon}</div>
                  {lang.title}
                </div>
              ))}
            </Column>
          </DropdownMenuContent>
        </DropdownMenu>
      </Row>
    </Row>
  );
}

export const navbarTopics = [
  {
    icon: <House />,
    label: "home",
    targetId: "inicio",
  },
  {
    icon: <User />,
    label: "about",
    targetId: "sobre-mim",
  },
  {
    icon: <Laptop />,
    label: "career",
    targetId: "carreira",
  },
  {
    icon: <Certificate />,
    label: "certifications",
    targetId: "certificacoes",
  },
  {
    icon: <Binoculars />,
    label: "projects",
    targetId: "projetos",
  },
];
