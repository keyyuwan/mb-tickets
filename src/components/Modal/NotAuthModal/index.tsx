import Link from "next/link";
import { X } from "phosphor-react";
import Modal from "react-modal";
import { useTheme } from "styled-components";

import { Title } from "../../Title";
import { NotAuthModalContainer } from "./styles";

interface NotAuthModalProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function NotAuthModal({ isOpen, onToggle }: NotAuthModalProps) {
  const theme = useTheme();

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

      <NotAuthModalContainer>
        <Title title="MBTickets" />
        <p>
          Você precisa estar autenticado na plataforma para poder comprar os
          seus ingressos.
        </p>
        <p>
          <Link href="/login">Entre aqui</Link> ou{" "}
          <Link href="/cadastro">Cadastre-se</Link>
        </p>
      </NotAuthModalContainer>
    </Modal>
  );
}
