import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { CalendarBlank, MapPin, Minus, Plus } from "phosphor-react";

import { api } from "../../services/api";
import { IEvent } from "../../dtos/EventDTO";
import { formatDate } from "../../utils/formatDate";
import { maskToBRL } from "../../utils/masks";
import { Title } from "../../components/Title";
import { SellingEntity } from "../../components/SellingEntity";
import {
  EventContainer,
  EventContent,
  EventImage,
  EventInfo,
  TicketsContainer,
  Wrapper,
  EventDescriptionContainer,
  Ticket,
  TicketCountButton,
  EventOrganizerContainer,
  EventImageContainer,
  TicketDisponibility,
} from "./styles";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface GetEventTicketsResponse {
  id: string;
  isActive: boolean;
  price: number;
  lot: number;
}

interface Ticket {
  id: string;
  isActive: boolean;
  price: string;
  lot: number;
}

interface EventProps {
  event: IEvent;
}

export default function Event({ event }: EventProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function getEventTickets() {
      try {
        const { data } = await api.get<GetEventTicketsResponse[]>(
          `tickets?eventId=${event.id}`
        );

        const formattedTickets = data.map((ticket) => ({
          ...ticket,
          price: maskToBRL(ticket.price),
        }));

        setTickets(formattedTickets);
      } catch (err) {
        console.log(err);
      }
    }

    getEventTickets();
  }, [event.id]);

  return (
    <EventContainer>
      <Head>
        <title>MBTickets | {event.title}</title>
      </Head>

      <EventImageContainer img={event.img}>
        <EventImage src={event.img} alt="Imagem do evento" />
      </EventImageContainer>

      <EventContent>
        <EventInfo>
          <strong>{event.title}</strong>
          <div className="wrapper">
            <CalendarBlank />
            <time>{event.date}</time>
          </div>
          <div className="wrapper">
            <MapPin />
            <span>{event.address}</span>
          </div>
        </EventInfo>

        <Wrapper>
          <EventDescriptionContainer>
            <Title title="Descrição do evento" />
            <p>{event.description}</p>
          </EventDescriptionContainer>

          <TicketsContainer>
            <Title title="Ingressos" />
            {tickets.map((ticket) => (
              <Ticket key={ticket.id}>
                <div className="ticket-info">
                  <strong>Lote {ticket.lot}</strong>
                  <span>{ticket.price}</span>
                  <TicketDisponibility isAvailable={ticket.isActive}>
                    {ticket.isActive ? "Disponível" : "Esgotado"}
                  </TicketDisponibility>
                </div>

                {ticket.isActive && (
                  <div className="ticket-count">
                    <TicketCountButton action="remove">
                      <Minus size={16} />
                    </TicketCountButton>
                    <span>0</span>
                    <TicketCountButton action="add">
                      <Plus size={16} />
                    </TicketCountButton>
                  </div>
                )}
              </Ticket>
            ))}
          </TicketsContainer>
        </Wrapper>

        <EventOrganizerContainer>
          <Title title="Entidade Organizadora" />
          <Link href={`/entidade/${event.organizer.id}`}>
            <SellingEntity organizer={event.organizer} />
          </Link>
        </EventOrganizerContainer>
      </EventContent>
    </EventContainer>
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

  const { data } = await api.get<IEvent>(`events/${slug}?_expand=organizer`);

  const formattedEvent = {
    ...data,
    date: formatDate(data.date, "dd 'de' MMMM 'de' y 'ás' HH':'mm"),
    organizer: {
      id: data.organizer.id,
      name: data.organizer.name,
      img: data.organizer.img,
      city: data.organizer.city,
      state: data.organizer.state,
    },
  };

  return {
    props: {
      event: formattedEvent,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  };
};
