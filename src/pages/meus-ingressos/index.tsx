import { useEffect, useState } from "react";
import Head from "next/head";

import { IUserTickets } from "../../dtos/UserTicketsDTO";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { formatDate } from "../../utils/formatDate";
import { HorizontalScroll } from "../../components/HorizontalScroll";
import { Title } from "../../components/Title";
import { Ticket } from "./components/Ticket";
import { MyTicketsContainer, TicketsListContainer } from "./styles";

export default function MyTickets() {
  const [tickets, setTickets] = useState<IUserTickets[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const hasAtLeastOneUsedTicket = tickets?.some(
    (ticket) => !ticket.event.isActive
  );
  const hasAtLeastOneAvailableTicket = tickets?.some(
    (ticket) => ticket.event.isActive
  );

  useEffect(() => {
    async function getUserTickets() {
      setIsLoading(true);

      try {
        const { data } = await api.get<IUserTickets[]>(
          `users_tickets?userId=${user?.id}&_expand=user&_expand=ticket&_expand=event&_expand=organizer`
        );

        const formattedTickets = data.map((ticket) => ({
          ...ticket,
          event: {
            ...ticket.event,
            date: formatDate(ticket.event.date, "dd/MM/yyyy 'ás' HH':'mm"),
          },
        }));

        setTickets(formattedTickets);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getUserTickets();
  }, [user?.id]);

  if (isLoading) {
    return (
      <MyTicketsContainer>
        <p>Carregando...</p>
      </MyTicketsContainer>
    );
  }

  return (
    <>
      <Head>
        <title>MBTickets | Meus Ingressos</title>
      </Head>

      <MyTicketsContainer>
        <TicketsListContainer>
          <Title title="Ingressos Ativos" />

          {hasAtLeastOneAvailableTicket ? (
            <HorizontalScroll>
              {tickets!.map((ticket) => {
                if (ticket.event.isActive) {
                  return <Ticket key={ticket.id} ticket={ticket} />;
                }
              })}
            </HorizontalScroll>
          ) : (
            <p>Ainda sem ingressos ativos</p>
          )}
        </TicketsListContainer>

        {hasAtLeastOneUsedTicket && (
          <TicketsListContainer>
            <Title title="Ingressos Já Utilizados" />

            <HorizontalScroll>
              {tickets!.map((ticket) => {
                if (!ticket.event.isActive) {
                  return <Ticket key={ticket.id} ticket={ticket} />;
                }
              })}
            </HorizontalScroll>
          </TicketsListContainer>
        )}
      </MyTicketsContainer>
    </>
  );
}
