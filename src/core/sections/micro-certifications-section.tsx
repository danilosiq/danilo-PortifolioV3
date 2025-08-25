import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AprofundandoHooks from "@/core/assets/certifications/micro-aprofundando-hooks-RS_page-0001.jpg";
import DesignSystem from "@/core/assets/certifications/micro-Design-system-RS_page-0001.jpg";
import FontAndback from "@/core/assets/certifications/micro-front-back-RS_page-0001.jpg";
import FundamentosNext from "@/core/assets/certifications/micro-Fundamentos-next-RS_page-0001.jpg";
import FundamentosReact from "@/core/assets/certifications/micro-fundamentos-ReactJS-RS_page-0001.jpg";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";

export function MicroCertificationsSection() {
  const { t } = useTranslation()
  return (
    <section className="sm:w-full flex flex-col w-[90%] items-center sm:max-w-[700px] mx-auto justify-center">
      <h1 className="text-4xl font-bold">{t(`microCertifications.title`)}</h1>
      <p className="text-center max-w-[800px]">
        {t(`microCertifications.subtitle`)}
      </p>

      <div className="grid my-6 max-md:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-4 gap-4">
        {microCertificationsList.map((certification, i) => (
          <Dialog key={i}>
            <DialogTrigger>
              <div className="border rounded-md hover:bg-black transition-all cursor-pointer hover:text-white min-h-[70px] flex items-center justify-center">
                {t(`microCertifications.${certification.key}`)}
              </div>
            </DialogTrigger>
            <DialogContent className="w-[80%] h-[90vh] ">
              <DialogTitle />
              <DialogDescription />
              <div className="flex-1 flex items-center">
                <img
                  src={certification.img.src}
                  alt="certification"
                  className="h-[80vh] object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}

const microCertificationsList = [
  {
    key: "fundamentalsReact",
    img: FundamentosReact,
  },
  {
    key: "fundamentalsNext",
    img: FundamentosNext,
  },
  {
    key: "designSystem",
    img: DesignSystem,
  },
  {
    key: "frontBack",
    img: FontAndback,
  },
  {
    key: "DeepeningHooks",
    img: AprofundandoHooks,
  },
];
