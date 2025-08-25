import { ArrowRight } from "@phosphor-icons/react";
import { Column, Row } from "../components/layout";
import Image from "next/image";
import CartorioImg from "@/core/assets/cartorio.jpg";
import IboltImg from "@/core/assets/ibolt.jpg";
import { useTranslation } from "react-i18next";

export function ExperienceSection() {
  const { t } = useTranslation()
  return (
    <Column className="sm:max-w-[1090px]  w-full">
      <p className="sm:text-5xl max-sm:text-4xl font-bold pb-4">{t(`experience.title`)}</p>

      {experienceList.map((data, i) => (
        <div
          key={i}
          className="min-h-[150px] h-full flex max-md:flex-col border-b border-slate-400 w-full gap-4 mb-4 pb-4 "
        >
          <div className="w-full md:w-[500px]  h-full relative">
            {data.video && (
              <video
                src={data.video}
                autoPlay
                loop
                muted
                className="w-full object-cover h-full rounded-sm"
              />
            )}
            {data.image && (
              <div className="w-full h-[260px] ">
                <Image
                  src={data.image}
                  alt="Work Experience Image"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            )}
          </div>
          <Column className=" w-full md:w-[50%] justify-between">
            <Column>
              <p className=" rounded-t-sm font-bold">{t(`experience.${data.key}.title`)}</p>
              <label htmlFor="" className="text-sm">
                {t(`experience.subtitle`)}
                <span className="text-gray-500 text-sm">{t(`experience.${data.key}.subtitle_content`)} </span>
              </label>
              <label htmlFor="" className="text-sm">
                 {t(`experience.period`)}
                <span className="text-gray-500 text-sm"> {t(`experience.${data.key}.period`)}</span>
              </label>
              <Column className="my-5">
                <p className="text-justify"> {t(`experience.${data.key}.description`)}</p>
              </Column>
            </Column>
            {data.demo && (
              <a
                href={data.demo}
                target="_blank"
                className="w-full bg-amber-100 border items-center gap-4 cursor ponter flex justify-center  rounded-md"
              >
                <p>{t(`experience.button_text`)}</p> <ArrowRight size={20} />
              </a>
            )}
          </Column>
        </div>
      ))}
    </Column>
  );
}

const experienceList = [
  {
    key: "ibolt",
    image: IboltImg,
  },

  {
    key: "bookwise",
    demo: "https://book-wise-coral-kappa.vercel.app/",
    video: "/videos/bookWise-video.mp4",
  },
  {
    key: "nau",
    demo: "https://www.naudelivery.com.br/",
    video: "/videos/nau-video.mp4",
  },
  {
    key: "Notary",
    
    image: CartorioImg,
  },
];
