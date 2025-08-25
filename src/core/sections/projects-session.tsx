import { useTranslation } from "react-i18next";
import { DialogProject } from "../components/dialog-project";
import { Column } from "../components/layout";
import "@/lib/translate/i18n";

export function ProjectsSession() {
  const { t } = useTranslation()
  return (
    <section className="">
      <Column className=" gap-4">
        <h1 className="text-5xl font-bold">{t(`projects.title`)}</h1>
        <p className="mb-6">
          {t(`projects.subtitle`)}
        </p>
      </Column>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, i) => (
          <Column
            key={i}
            className=" h-[300px] border justify-between rounded-md w-full  "
          >
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="w-full object-cover h-[200px] rounded-t-md"
            />
            <p className="text-center">{t(`projects.${project.title}.title`)}</p>
            <DialogProject
              description={t(`projects.${project.title}.description`)}
              title={t(`projects.${project.title}.title`)}
              video={project.video}
              link={project.link}
            />
          </Column>
        ))}
      </div>
    </section>
  );
}



export const projectsList = [
  {
    title: "igniteTimer",
    video: "/videos/ignite-timer.mp4",
    link:'https://ignite-timer-mocha.vercel.app/',
  },
  {
    title: "simpleScheduler",
    video: "/videos/agenda-video.mp4",
    link:'https://ignite-call-three-xi.vercel.app/',
  },
  {
    title: "nau",
    video: "/videos/nau-video.mp4",
    link:'https://www.naudelivery.com.br/',
  },
 {
    title: "bookWise",
    video: "/videos/bookWise-video.mp4",
    link:'https://book-wise-coral-kappa.vercel.app/',
  },

  {
    title: "coffeeDelivery",
    video: "/videos/coffee-video.mp4",
    link:'https://coffee-delivery-phi-bay.vercel.app/',
  },
  {
    title: "secretWordGame",
    video: "/videos/secretWG.mp4",
    link:'https://secret-word-game-flax.vercel.app/',
  },
  {
    title: "lav",
    video: "/videos/lav.mp4",
  },
];

