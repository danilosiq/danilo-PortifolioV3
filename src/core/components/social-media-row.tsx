import {
  DownloadSimple,
  InstagramLogo,
  LinkedinLogo,
  ReadCvLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { Row } from "./layout";
import ResumePDF from '@/core/assets/cv.pdf'

export function SocialMediaRow() {
  const router = useRouter();
  const topics = [
    {
      icon: <GithubLogo size={40} />,
      url: "https://github.com/danilosiq",
      hoverStyle: "hover:bg-slate-800 hover:text-white",
    },
    {
      icon: <WhatsappLogo size={40} />,
      url: "https://api.whatsapp.com/send/?phone=5541985060659&text&type=phone_number&app_absent=0",
      hoverStyle: "hover:bg-green-500 hover:text-white",
    },

    {
      icon: <LinkedinLogo size={40} />,
      url: "https://www.linkedin.com/in/danilo-siqueira-1a31a7234/",
      hoverStyle: "hover:bg-blue-500 hover:text-white",
    },
    {
      icon: <InstagramLogo size={40} />,
      url: "https://www.instagram.com/daniloosiq/",
      hoverStyle: "hover:bg-rose-500 hover:text-white",
    },
     {
      icon:<ReadCvLogo size={40}  className=""/>,
      url:'/cv.pdf',
      hoverStyle: "bg-slate-900 text-white hover:bg-teal-500",
    },
  ];

  return (
    <Row className="gap-6">
      {topics.map((topic, i) => (
        <a
          key={i}
          target="_blank"
          href={topic.url}
          rel="noopener noreferrer"
          className={` p-1  cursor-pointer transition-all rounded-md ${topic.hoverStyle}`}
        >
          {topic.icon}
        </a>
      ))}

    </Row>
  );
}
