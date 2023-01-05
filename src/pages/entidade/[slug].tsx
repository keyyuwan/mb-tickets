import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Ticket } from "phosphor-react";

import { IOrganizer } from "../../dtos/OrganizerDTO";
import { api } from "../../services/api";
import { formatDate } from "../../utils/formatDate";
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
  NoAvailableEventsContainer,
} from "./styles";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface EntityProps {
  entity: IOrganizer;
}

export default function Entity({ entity }: EntityProps) {
  const hasAtLeastOneFinishedEvent = entity.events?.some(
    (event) => !event.isActive
  );
  const hasAtLeastOneAvailableEvent = entity.events?.some(
    (event) => event.isActive
  );

  return (
    <EntityContainer>
      <Head>
        <title>MBTickets | {entity.name}</title>
      </Head>
      <EntityImageContainer img={entity.img}>
        <EntityImage src={entity.img} alt="Imagem da entidade organizadora" />
      </EntityImageContainer>

      <EntityContent>
        <EntityInfo>
          <strong>{entity.name}</strong>

          <div className="wrapper">
            <span className="entity-type">{entity.entityType}</span>
            <span>{`${entity.city}, ${entity.state}`}</span>
          </div>
        </EntityInfo>

        <EntityEventsContainer>
          <Title title="Eventos Disponíveis" />

          {hasAtLeastOneAvailableEvent ? (
            <HorizontalScroll>
              {entity.events?.map((event) => {
                if (event.isActive) {
                  return (
                    <Link key={event.id} href={`/evento/${event.id}`}>
                      <Event event={event} />
                    </Link>
                  );
                }
              })}
            </HorizontalScroll>
          ) : (
            <NoAvailableEventsContainer>
              <Ticket />
              <span>Ainda não temos eventos disponíveis</span>
            </NoAvailableEventsContainer>
          )}
        </EntityEventsContainer>

        {hasAtLeastOneFinishedEvent && (
          <EntityEventsContainer>
            <Title title="Eventos Encerrados" />

            <HorizontalScroll>
              {entity.events?.map((event) => {
                if (!event.isActive) {
                  return (
                    <Event
                      key={event.id}
                      event={event}
                      isEventActive={event.isActive}
                    />
                  );
                }
              })}
            </HorizontalScroll>
          </EntityEventsContainer>
        )}

        <AboutTheEntity>
          <Title title="Sobre a entidade" />
          <p>{entity.about}</p>
        </AboutTheEntity>
      </EntityContent>
    </EntityContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams;

  const { data } = await api.get<IOrganizer>(
    `organizers/${slug}?_embed=events`
  );

  const formattedEntity = {
    ...data,
    events: data.events?.map((event) => ({
      ...event,
      date: formatDate(event.date, "dd 'de' MMMM"),
    })),
  };

  return {
    props: {
      entity: formattedEntity,
    },
  };
};
