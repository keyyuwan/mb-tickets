import { useState } from "react";

import { IUserTickets } from "../../../../dtos/UserTicketsDTO";
import { TicketDetailsModal } from "../TicketDetailsModal";
import {
  TicketContent,
  TicketInfo,
  TicketsContainer,
  DetailsButton,
} from "./styles";

interface TicketProps {
  ticket: IUserTickets;
}

export function Ticket({ ticket }: TicketProps) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  function handleToggleDetailsModal() {
    setIsDetailsModalOpen((prevState) => !prevState);
  }

  return (
    <TicketsContainer isActive={ticket.event.isActive}>
      <img src={ticket.event.img} alt="Imagem do evento do ingresso" />

      <TicketContent>
        <span className="event-name">{ticket.event.title}</span>

        <TicketInfo>
          <span>ID do ingresso</span>
          <p>{ticket.id}</p>
        </TicketInfo>

        <TicketInfo>
          <span>Data do evento</span>
          <p>{ticket.event.date}</p>
        </TicketInfo>

        <DetailsButton onClick={handleToggleDetailsModal}>
          Detalhes
        </DetailsButton>

        <TicketDetailsModal
          isOpen={isDetailsModalOpen}
          onToggle={handleToggleDetailsModal}
          ticket={ticket}
        />
      </TicketContent>
    </TicketsContainer>
  );
}
