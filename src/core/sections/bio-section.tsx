import MyhobbiesImage from "@/core/assets/honnies-danilo.png";
import Image from "next/image";
import { Column } from "../components/layout";
import { useTranslation } from "react-i18next";





export function BioSection(){
  const { t } = useTranslation()

    return(
        <section className=" gap-4 items-center flex max-sm:flex-col max-w-[1090px] sm:flex-row w-full ">
          <Column>
          <p className="text-5xl font-bold ">{t(`aboutMe.title`)}</p>
            <p className="indent-10 text-justify">
              {t(`aboutMe.paragraph1`)}
            </p>
            <p className="indent-10 text-justify">
              {t(`aboutMe.paragraph2`)}
            </p>
            <Image
            src={MyhobbiesImage}
            alt="Hobbies Image"
            className="w-[350px] sm:hidden object-contain h-[350px] "
          />
            <Column className="sm:pl-10">
              <p className="text-2xl font-bold">{t(`hobbies.title`)}</p>

              <p className="indent-10 text-justify">
               {t(`hobbies.paragraph1`)}
              </p>
              <p className="indent-10 text-justify">
                {t(`hobbies.paragraph2`)}
              </p>
              <p className="indent-10 text-justify">
               {t(`hobbies.paragraph3`)}
              </p>
            </Column>
          </Column>
          <Image
            src={MyhobbiesImage}
            alt="Hobbies Image"
            className="w-[350px] max-sm:hidden object-contain h-[350px] "
          />
        </section>
    )
}