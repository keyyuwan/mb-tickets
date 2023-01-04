import { useState } from "react";

import { TicketDetailsModal } from "../TicketDetailsModal";
import {
  TicketContent,
  TicketInfo,
  TicketsContainer,
  DetailsButton,
} from "./styles";

interface TicketProps {
  isTicketActive?: boolean;
}

export function Ticket({ isTicketActive }: TicketProps) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  function handleToggleDetailsModal() {
    setIsDetailsModalOpen((prevState) => !prevState);
  }

  return (
    <TicketsContainer isActive={isTicketActive}>
      <img
        src="https://github.com/keyyuwan.png"
        alt="Imagem do evento do ingresso"
      />

      <TicketContent>
        <span className="event-name">Med in Break</span>

        <TicketInfo>
          <span>ID do ingresso</span>
          <p>135342233</p>
        </TicketInfo>

        <TicketInfo>
          <span>Data do evento</span>
          <p>12/08/2023 ás 13:00</p>
        </TicketInfo>

        <DetailsButton onClick={handleToggleDetailsModal}>
          Detalhes
        </DetailsButton>

        <TicketDetailsModal
          isOpen={isDetailsModalOpen}
          onToggle={handleToggleDetailsModal}
        />
      </TicketContent>
    </TicketsContainer>
  );
}
