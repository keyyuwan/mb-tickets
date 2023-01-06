import { X } from "phosphor-react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { useSpring, animated } from "react-spring";

import { IUserTickets } from "../../../../dtos/UserTicketsDTO";
import { Title } from "../../../../components/Title";
import { TicketDetailsContainer, TicketInfo } from "./styles";

import qrCodeImg from "../../../../assets/qrcode.png";

interface TicketDetailsModalProps {
  isOpen: boolean;
  onToggle: () => void;
  ticket: IUserTickets;
}

export function TicketDetailsModal({
  isOpen,
  onToggle,
  ticket,
}: TicketDetailsModalProps) {
  const theme = useTheme();

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateX(0%)" : "translateX(-50%)",
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onToggle}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onToggle} className="react-modal-close">
        <X size={24} color={theme.colors.gray[100]} />
      </button>

      <animated.div style={animation}>
        <TicketDetailsContainer>
          <Title title="Detalhes do Ingresso" />

          <TicketInfo>
            <span>Número do ingresso</span>
            <p>{ticket.number}</p>
          </TicketInfo>
          <TicketInfo>
            <span>Nome</span>
            <p>{`${ticket.user.name} ${ticket.user.surname}`}</p>
          </TicketInfo>
          <TicketInfo>
            <span>Cpf</span>
            <p>{ticket.user.cpf}</p>
          </TicketInfo>
          <TicketInfo>
            <span>Evento</span>
            <p>{ticket.event.title}</p>
          </TicketInfo>
          <TicketInfo>
            <span>Entidade</span>
            <p>{ticket.organizer.name}</p>
          </TicketInfo>
          <TicketInfo>
            <span>Lote</span>
            <p>{ticket.ticket.lot}</p>
          </TicketInfo>
          <TicketInfo>
            <span>Data</span>
            <p>
              {/* 12/08/2023 ás 13:00 */}
              {ticket.event.date}
            </p>
          </TicketInfo>
          <TicketInfo>
            <span>Endereço</span>
            <p>{ticket.event.address}</p>
          </TicketInfo>
          <TicketInfo>
            <span>QR Code</span>
            <img src={qrCodeImg.src} alt="QR Code" className="qrcode-img" />
          </TicketInfo>
        </TicketDetailsContainer>
      </animated.div>
    </Modal>
  );
}
