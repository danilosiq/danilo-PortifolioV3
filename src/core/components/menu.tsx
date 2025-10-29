import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { navbarTopics } from "./navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Column } from "./layout";
import { Translate } from "@phosphor-icons/react";
import { langList } from "@/lib/translate/langList";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/translate/i18n";

export function Menu() {
  const [open, setOpen] = useState(false);
  const [dropdownmenuOpen, setDropdownMenuOpen] = useState(false);
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 60;
      const elementPosition = el.offsetTop;
      const offsetPosition = elementPosition - offset;

      setOpen(false);

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang)
    setDropdownMenuOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="sm:hidden z-50 rounded-full border p-2 bg-white fixed bottom-4 right-4">
          <MenuIcon size={30} />
        </div>
      </DrawerTrigger>
      <DrawerContent className="pb-10">
        <DrawerTitle />
        <DrawerDescription />
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
        <DropdownMenu
          open={dropdownmenuOpen}
          onOpenChange={setDropdownMenuOpen}
        >
          <DropdownMenuTrigger>
            <div className="justify-center flex flex-col transition-all hover:shadow rounded-md p-1 cursor-pointer text-center items-center">
              <Translate />
              <p>{t(`navbar.lang`)}</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="p-2 ">
            <Column className="gap-3">
              {langList.map((lang, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center"
                  onClick={() => handleChangeLanguage(lang.key)}
                >
                  <div className="w-[20px] h-[15px] mr-2">{lang.icon}</div>
                  {lang.title}
                </div>
              ))}
            </Column>
          </DropdownMenuContent>
        </DropdownMenu>
      </DrawerContent>
    </Drawer>
  );
}
