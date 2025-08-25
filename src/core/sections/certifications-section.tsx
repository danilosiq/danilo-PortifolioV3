import DanHoldingCertificationDraw from "@/core/assets/dan-certification.png";
import Image from "next/image";
import { CertificationsCarousel } from "../components/certifications-carouse;";
import { Column } from "../components/layout";
import { useTranslation } from "react-i18next";

export function CertificationsSection() {
  const { t } = useTranslation()
  return (
    <div className="sm:max-w-[1090px]  flex max-lg:flex-col max-lg:items-center lg:flex-row gap-8  w-full p-4">
      <div className="max-lg:hidden">
        <CertificationsCarousel />
      </div>
      <Column className="sm:max-w-[500px]">
        <p className="sm:text-5xl text-4xl font-bold ">{t(`certifications.title`)}</p>
        <p>
          {t(`certifications.subtitle`)}
        </p>
        <Image
          src={DanHoldingCertificationDraw}
          alt="Danilo Art"
          className="w-[300px] object-contain max-sm:w-[250px] max-sm:h-[250px] mx-auto h-[300px] "
        />
      </Column>
      <div className="lg:hidden  ">
        <CertificationsCarousel />
      </div>
    </div>
  );
}
