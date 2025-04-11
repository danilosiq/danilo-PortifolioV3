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
  
  export function Menu() {
    const [open, setOpen] = useState(false);
  
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
        </DrawerContent>
      </Drawer>
    );
  }