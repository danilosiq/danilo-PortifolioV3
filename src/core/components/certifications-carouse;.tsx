'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import RocketSeat_ReactIMG from "@/core/assets/certifications/certificado-rockeseat-react_page-0001.jpg"
import Octopus_genesisIMG from "@/core/assets/certifications/octopus.jpeg"
import Tecpuc_tecnologoIMG from "@/core/assets/certifications/tecpuc.jpeg"
import Udemy_zeroAMaestriaIMG from "@/core/assets/certifications/udemy.jpeg"
import ReactNativeCertificationIMG from '@/core/assets/certifications/certificacao-react-native.png'
import { MagnifyingGlass } from "@phosphor-icons/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CertificationDialog } from "./certification-dialog"
import { Column } from "./layout"

export const carouselItemList = [
  {
    label: "Certificado ReactJs",
    organization: "Faculdade tecnológica Rocketseat",
    image: RocketSeat_ReactIMG,
  },
  {
    label: "Mini curso - React Native",
    organization: "Faculdade tecnológica Rocketseat",
    image: ReactNativeCertificationIMG,
  },
  {
    label: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
    organization: "Matheus Battisti - Udemy",
    image: Udemy_zeroAMaestriaIMG,
  },
  {
    label: "Tecnólogo em Informática",
    organization: "TECPUC",
    image: Tecpuc_tecnologoIMG,
  },
  {
    label: "Curso Genesis - Arte tradicional & pintura digital",
    organization: "OCTOPUS",
    image: Octopus_genesisIMG,
  },
]

export function CertificationsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="rounded-sm relative bg-white sm:w-full max-sm:w-[300px]"
      >
        <CarouselContent className="h-full flex-1 flex">
          {carouselItemList.map((data, i) => (
            <CarouselItem key={i}>
              <Column className="w-full justify-between h-full flex-1">
                <Image
                  src={data.image}
                  alt={`${data.label}_image`}
                  className="w-full h-[260px] rounded-t-sm object-cover"
                />
                <p className="text-center text-xl font-semibold">{data.label}</p>
                <p className="text-gray-400 text-center">{data.organization}</p>

                <CertificationDialog
                  img={data.image}
                  trigger={
                    <div className="gap-1 text-white py-2 rounded-b-md flex items-center justify-center hover:bg-blue-600 cursor-pointer bg-blue-500">
                      <p>Ver detalhes</p>
                      <MagnifyingGlass size={25} />
                    </div>
                  }
                />
              </Column>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="max-md:hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <div className="flex justify-center mt-4 gap-2">
        {carouselItemList.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  )
}