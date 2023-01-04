import Head from "next/head";
import { CalendarBlank, MapPin, Minus, Plus } from "phosphor-react";

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
} from "./styles";

export default function Event() {
  return (
    <>
      <Head>
        <title>MBTickets | Evento tal</title>
      </Head>
      <EventContainer>
        <EventImageContainer img="https://github.com/keyyuwan.png">
          <EventImage
            src="https://github.com/keyyuwan.png"
            alt="Imagem do evento"
          />
        </EventImageContainer>

        <EventContent>
          <EventInfo>
            <strong>Med In Break</strong>
            <div className="wrapper">
              <CalendarBlank />
              <time>09 de Janeiro de 2023 às 13:00</time>
            </div>
            <div className="wrapper">
              <MapPin />
              <span>Rua da Liberdade, 1231 - Curitiba, Paraná</span>
            </div>
          </EventInfo>

          <Wrapper>
            <TicketsContainer>
              <Ticket>
                <div className="ticket-info">
                  <strong>1o. Lote: Med In Break</strong>
                  <span>R$100,00</span>
                </div>

                <div className="ticket-count">
                  <TicketCountButton action="remove">
                    <Minus size={16} />
                  </TicketCountButton>
                  <span>0</span>
                  <TicketCountButton action="add">
                    <Plus size={16} />
                  </TicketCountButton>
                </div>
              </Ticket>
            </TicketsContainer>

            <EventDescriptionContainer>
              <Title title="Descrição do evento" />
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
            </EventDescriptionContainer>
          </Wrapper>

          <EventOrganizerContainer>
            <Title title="Entidade Organizadora" />
            <SellingEntity />
          </EventOrganizerContainer>
        </EventContent>
      </EventContainer>
    </>
  );
}
