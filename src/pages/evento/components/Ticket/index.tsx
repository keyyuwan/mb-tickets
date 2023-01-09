import { Minus, Plus } from "phosphor-react";
import { Ticket as TicketType } from "../../[slug]";

import {
  TicketContainer,
  TicketDisponibility,
  TicketCountButton,
} from "./styles";

interface TicketProps {
  ticket: TicketType;
  ticketCount: number;
  handleAddTicket: (ticket: TicketType) => void;
  handleRemoveTicket: () => void;
}

export function Ticket({
  ticket,
  ticketCount,
  handleAddTicket,
  handleRemoveTicket,
}: TicketProps) {
  return (
    <TicketContainer>
      <div className="ticket-info">
        <strong>Lote {ticket.lot}</strong>
        <span>{ticket.priceFormatted}</span>
        <TicketDisponibility isAvailable={ticket.isActive}>
          {ticket.isActive ? "Disponível" : "Esgotado"}
        </TicketDisponibility>
      </div>

      {ticket.isActive && (
        <div className="ticket-count">
          <TicketCountButton action="remove" onClick={handleRemoveTicket}>
            <Minus size={16} />
          </TicketCountButton>
          <span>{ticketCount}</span>
          <TicketCountButton
            action="add"
            onClick={() => handleAddTicket(ticket)}
          >
            <Plus size={16} />
          </TicketCountButton>
        </div>
      )}
    </TicketContainer>
  );
}
