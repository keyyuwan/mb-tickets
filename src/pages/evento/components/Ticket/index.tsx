import { useState } from "react";
import { Minus, Plus } from "phosphor-react";

import { useAuth } from "../../../../hooks/useAuth";
import { Ticket as TicketType, TICKET_COUNT_LIMIT } from "../../[slug]";
import { NotAuthModal } from "../../../../components/Modal/NotAuthModal";

import {
  TicketContainer,
  TicketDisponibility,
  TicketCountButton,
} from "./styles";

interface TicketProps {
  ticket: TicketType;
  ticketCount: number;
  addTicket: (ticket: TicketType) => void;
  handleRemoveTicket: () => void;
}

export function Ticket({
  ticket,
  ticketCount,
  addTicket,
  handleRemoveTicket,
}: TicketProps) {
  const { isAuthenticated } = useAuth();
  const [isNotAuthModalOpen, setIsNotAuthModalOpen] = useState(false);

  function handleCloseNotAuthModal() {
    setIsNotAuthModalOpen(false);
  }

  function handleAddTicket() {
    if (!isAuthenticated) {
      setIsNotAuthModalOpen(true);
      return;
    }

    addTicket(ticket);
  }

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
        <div className="ticket-count-container">
          <div className="ticket-count">
            <TicketCountButton action="remove" onClick={handleRemoveTicket}>
              <Minus size={16} />
            </TicketCountButton>
            <span>{ticketCount}</span>
            <TicketCountButton action="add" onClick={handleAddTicket}>
              <Plus size={16} />
            </TicketCountButton>
          </div>

          <span className="max">(máx: {TICKET_COUNT_LIMIT})</span>
        </div>
      )}

      <NotAuthModal
        isOpen={isNotAuthModalOpen}
        onToggle={handleCloseNotAuthModal}
      />
    </TicketContainer>
  );
}
