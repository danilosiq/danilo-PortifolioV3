import MyhobbiesImage from "@/core/assets/honnies-danilo.png";
import Image from "next/image";
import { Column } from "../components/layout";





export function BioSection(){


    return(
        <section className=" gap-4 items-center flex max-sm:flex-col max-w-[1090px] sm:flex-row w-full ">
          <Column>
          <p className="text-5xl font-bold ">Sobre mim</p>
            <p className="indent-10 text-justify">
              Sou um jovem que vive intensamente tanto no universo online quanto
              no mundo artístico. Sempre estou em busca de algo novo para
              aprender, seja por curiosidade ou por vontade de me expressar
              melhor no que faço. Me considero uma pessoa calma, observadora e
              muito conectada com quem está ao meu redor.
            </p>
            <p className="indent-10 text-justify">
              Sou movido por hobbies, paixões e desafios. Estou sempre
              explorando novos interesses, mas sem nunca deixar de lado aquilo
              que me motiva desde o início e motivando aqueles que passo
            </p>
            <Image
            src={MyhobbiesImage}
            alt="Hobbies Image"
            className="w-[350px] sm:hidden object-contain h-[350px] "
          />
            <Column className="sm:pl-10">
              <p className="text-2xl font-bold">Meus hobbies</p>

              <p className="indent-10 text-justify">
                Meu hobbie favorito sem duvidas é a arte, sempre que eu consigo,
                eu gosto de expor minha arte, e colocar meu estilo para o mundo
              </p>
              <p className="indent-10 text-justify">
                toda oportunidade que posso, gosto de escutar musica e estar
                ligamente ligado a isso, seja estudar, desenhar, treinar na
                academia, sempre gosto de estar com um bom som de RAP, TRAP, e
                muitos outros estilos
              </p>
              <p className="indent-10 text-justify">
                Eu sou um cara bem nerd, seja pra games, desenhos animados,
                LEGO, pokemon são algo que me rodeiam talbem, vamos bater um
                papo sobre isso! Vai ser divertido
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