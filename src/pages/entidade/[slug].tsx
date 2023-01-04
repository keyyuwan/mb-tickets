import Head from "next/head";
import { Event } from "../../components/Event";

import { HorizontalScroll } from "../../components/HorizontalScroll";
import { Title } from "../../components/Title";
import {
  AboutTheEntity,
  EntityContainer,
  EntityContent,
  EntityEventsContainer,
  EntityImage,
  EntityImageContainer,
  EntityInfo,
} from "./styles";

export default function Entity() {
  return (
    <>
      <Head>
        <title>MBTickets | Entidade tal</title>
      </Head>

      <EntityContainer>
        <EntityImageContainer img="https://github.com/keyyuwan.png">
          <EntityImage
            src="https://github.com/keyyuwan.png"
            alt="Imagem da entidade organizadora"
          />
        </EntityImageContainer>

        <EntityContent>
          <EntityInfo>
            <strong>PUC PR</strong>

            <div className="wrapper">
              <span>Universidade</span>
              <span>Curitiba, Paraná</span>
            </div>
          </EntityInfo>

          <EntityEventsContainer>
            <Title title="Eventos Disponíveis" />
            <HorizontalScroll>
              <Event isEventActive />
              <Event isEventActive />
              <Event isEventActive />
            </HorizontalScroll>
          </EntityEventsContainer>

          <EntityEventsContainer>
            <Title title="Eventos Encerrados" />
            <HorizontalScroll>
              <Event />
              <Event />
              <Event />
            </HorizontalScroll>
          </EntityEventsContainer>

          <AboutTheEntity>
            <Title title="Sobre a entidade" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </AboutTheEntity>
        </EntityContent>
      </EntityContainer>
    </>
  );
}
