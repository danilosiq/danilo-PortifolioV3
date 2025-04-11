"use client";
import DanInAir from "@/core/assets/dan-in-air.png";
import MeSlicedArt from "@/core/assets/eu-div.png";
import Image from "next/image";
import { Column } from "./components/layout";
import { Menu } from "./components/menu";
import { Navbar } from "./components/navbar";
import { SocialMediaRow } from "./components/social-media-row";
import { BioSection } from "./sections/bio-section";
import { CareerSection } from "./sections/career-section";
import { CertificationsSection } from "./sections/certifications-section";
import { ExperienceSection } from "./sections/experience-section";
import { MicroCertificationsSection } from "./sections/micro-certifications-section";
import { ProjectsSession } from "./sections/projects-session";

export function HomePage() {
  return (
    <Column>
      <Navbar />
      <Menu />
      <Column className="my-[100px] px-10 items-center gap-[100px]">
        <section
          id="inicio"
          className="max-w-[500px] flex md:flex-row flex-col items-center gap-6"
        >
          <Image
            src={MeSlicedArt}
            alt="Danilo Art"
            className="w-[280px] rounded-lg h-[280px] "
          />
          <Column>
            <p className="text-6xl font-bold">Danilo Dante Siqueira</p>
            <p>20 anos</p>
            <p>Curitiba - PR</p>
            <SocialMediaRow />
          </Column>
        </section>

        <section id="sobre-mim">
          <BioSection />
        </section>

        <section id="carreira">
          <CareerSection />
        </section>

        <section id="experiencias">
          <ExperienceSection />
        </section>

        <section id="certificacoes">
          <CertificationsSection />
          <MicroCertificationsSection />
        </section>

        <Image
          src={DanInAir}
          alt="Danilo Art"
          className="w-[200px] mx-auto h-[200px] "
        />

        <section id="projetos">
          <ProjectsSession />
        </section>
      </Column>
    </Column>
  );
}
