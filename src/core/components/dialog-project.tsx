import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Column } from "./layout";

interface DialogProjectProps {
  video: string;
  description: string;
  label: string;
  link?: string;
}

export function DialogProject({
  description,
  label,
  video,
  link,
}: DialogProjectProps) {
  return (
    <Dialog>
      <DialogTrigger className="text-sm cursor-pointer hover:bg-amber-500  py-2 border-t  rounded-b-md">
        Ver mais
      </DialogTrigger>
      <DialogContent className="w-[95%] h-[90vh] m-auto max-lg:overflow-y-scroll scrollbar-styled">
        <DialogTitle className="sm:hidden">{label}</DialogTitle>
        <DialogDescription className="hidden" />
        <section className="lg:flex-row flex flex-col gap-6">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="lg:w-[60%] w-full min-h-[300px] object-contain"
          />
          <Column className="gap-10">
            <p className="text-4xl font-bold">{label}</p>
            <p className="text-gray-500">{description}</p>
            {link && (
              <Column>
                <a href={link} target="_blank">
                  <div className="rounded-md p-1 cursor-pointer hover:p-3 bg-white shadow-md hover:bg-blue-600 hover:text-white transition-all">
                    Ver Demo
                  </div>
                </a>
              </Column>
            )}
          </Column>
        </section>
      </DialogContent>
    </Dialog>
  );
}
