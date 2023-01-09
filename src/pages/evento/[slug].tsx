import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { CalendarBlank, MapPin } from "phosphor-react";

import { api } from "../../services/api";
import { IEvent } from "../../dtos/EventDTO";
import { ITicket } from "../../dtos/TicketDTO";
import { formatDate } from "../../utils/formatDate";
import { maskToBRL } from "../../utils/masks";
import { Title } from "../../components/Title";
import { Ticket } from "./components/Ticket";
import { SellingEntity } from "../../components/SellingEntity";
import { BuyTicketModal } from "./components/BuyTicketModal";
import {
  EventContainer,
  EventContent,
  EventImage,
  EventInfo,
  TicketsContainer,
  Wrapper,
  EventDescriptionContainer,
  EventOrganizerContainer,
  EventImageContainer,
  BuyTicketButton,
} from "./styles";

export const TICKET_COUNT_LIMIT = 3;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export interface Ticket {
  id: string;
  isActive: boolean;
  price: number;
  priceFormatted: string;
  lot: number;
}

export interface TicketToBuy {
  ticketId: string;
  price: number;
  lot: number;
}

interface EventProps {
  event: IEvent;
}

export default function Event({ event }: EventProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [ticketCount, setTicketCount] = useState(0);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [ticketToBuy, setTicketToBuy] = useState<TicketToBuy | null>(null);

  function addTicket(ticket: Ticket) {
    setTicketCount((prevState) => {
      if (prevState + 1 > TICKET_COUNT_LIMIT) {
        return prevState;
      } else {
        return prevState + 1;
      }
    });

    setTicketToBuy({
      ticketId: ticket.id,
      price: ticket.price,
      lot: ticket.lot,
    });
  }

  function handleRemoveTicket() {
    if (ticketCount === 0) return;

    setTicketCount((prevState) => prevState - 1);
  }

  function handleOpenCheckoutModal() {
    setIsCheckoutModalOpen(true);
  }

  function handleCloseCheckoutModal() {
    setIsCheckoutModalOpen(false);
  }

  useEffect(() => {
    async function getEventTickets() {
      try {
        const { data } = await api.get<ITicket[]>(
          `tickets?eventId=${event.id}`
        );

        const formattedTickets = data.map((ticket) => ({
          ...ticket,
          priceFormatted: maskToBRL(ticket.price),
          price: ticket.price,
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
              <Ticket
                key={ticket.id}
                ticket={ticket}
                ticketCount={ticketCount}
                addTicket={addTicket}
                handleRemoveTicket={handleRemoveTicket}
              />
            ))}
            {ticketCount > 0 && (
              <BuyTicketButton onClick={handleOpenCheckoutModal}>
                Comprar
              </BuyTicketButton>
            )}
          </TicketsContainer>

          <BuyTicketModal
            isOpen={isCheckoutModalOpen}
            onToggle={handleCloseCheckoutModal}
            ticketToBuy={ticketToBuy!}
            event={{
              id: event.id,
              title: event.title,
              organizerId: event.organizer.id,
            }}
            ticketCount={ticketCount}
          />
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
