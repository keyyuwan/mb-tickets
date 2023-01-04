import Head from "next/head";
import { TicketsList } from "./components/TicketsList";
import { MyTicketsContainer } from "./styles";

export default function MyTickets() {
  return (
    <>
      <Head>
        <title>MBTickets | Meus Ingressos</title>
      </Head>

      <MyTicketsContainer>
        <TicketsList title="Ingressos Ativos" isTicketActive />
        <TicketsList title="Ingressos Já Utilizados" />
      </MyTicketsContainer>
    </>
  );
}
