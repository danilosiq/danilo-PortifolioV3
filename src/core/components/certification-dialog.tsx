import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface CertificationDialogProps {
  img: StaticImageData;
  trigger: ReactNode;
}

export function CertificationDialog({
  img,
  trigger,
}: CertificationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="w-[80%] h-[90vh] ">
        <DialogTitle className="hidden"></DialogTitle>
        <DialogDescription className="hidden" />
        <div className="flex-1 flex items-center">
          <Image
            src={img}
            alt="certification"
            className="h-[80vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
