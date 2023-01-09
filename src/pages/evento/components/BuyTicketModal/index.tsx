import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { X } from "phosphor-react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

import { api } from "../../../../services/api";
import { useAuth } from "../../../../hooks/useAuth";
import {
  maskCard,
  maskCardExpireDate,
  maskCPFCNPJ,
  maskPhone,
  maskToBRL,
} from "../../../../utils/masks";
import { toastOptions } from "../../../../utils/toastify";
import { TicketToBuy } from "../../[slug]";
import { Title } from "../../../../components/Title";
import { Loading } from "../../../../components/Loading";
import {
  BuyTicketButton,
  BuyTicketModalContainer,
  CheckoutFooter,
  CheckoutInfo,
  SuccessModalContainer,
} from "./styles";

import confirmedSvg from "../../../../assets/confirmed.svg";

interface Card {
  number: string;
  expireDate: string;
  cvv: string;
  name: string;
  cpf: string;
  phone: string;
}

interface BuyTicketModalProps {
  isOpen: boolean;
  onToggle: () => void;
  ticketToBuy: TicketToBuy;
  event: {
    id: string;
    title: string;
    organizerId: string;
  };
  ticketCount: number;
}

export function BuyTicketModal({
  isOpen,
  onToggle,
  ticketToBuy,
  event,
  ticketCount,
}: BuyTicketModalProps) {
  const theme = useTheme();
  const { user } = useAuth();

  const [cardInfo, setCardInfo] = useState<Card>({
    number: "",
    expireDate: "",
    cvv: "",
    name: "",
    cpf: "",
    phone: "",
  });
  const [isBuying, setIsBuying] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
    mask?: (value: string) => string
  ) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (mask) {
      value = mask(value);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  }

  async function handleBuyTicket(e: FormEvent) {
    e.preventDefault();

    setIsBuying(true);

    try {
      for (let count = 1; count <= ticketCount; count++) {
        await api.post("users_tickets", {
          id: uuid(),
          number: uuid(),
          ticketId: ticketToBuy.ticketId,
          eventId: event.id,
          organizerId: event.organizerId,
          userId: user?.id,
        });
      }

      setIsPaymentSuccessful(true);
    } catch (err) {
      console.log(err);
      toast.error("Ocorreu um erro ao comprar :(", toastOptions);
    } finally {
      setIsBuying(false);
    }
  }

  const checkoutTotal = maskToBRL(ticketToBuy?.price * ticketCount);

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

      {isPaymentSuccessful ? (
        <SuccessModalContainer>
          <Title title="Compra realizada!" />
          <img
            src={confirmedSvg.src}
            alt="Imagem de um boneco segurando um documento verificado"
          />
          <Link href="/meus-ingressos">Visualizar Ingresso</Link>
        </SuccessModalContainer>
      ) : (
        <BuyTicketModalContainer>
          <Title title="Checkout" />

          <form onSubmit={handleBuyTicket}>
            <CheckoutInfo>
              <span>Ingresso</span>
              <p>
                {event.title} (Lote {ticketToBuy?.lot})
              </p>
            </CheckoutInfo>
            <CheckoutInfo>
              <span>Quantidade</span>
              <p>{ticketCount}</p>
            </CheckoutInfo>
            <CheckoutInfo>
              <span>Informações do Cartão</span>
              <div className="inputs-container">
                <input
                  required
                  placeholder="Número do cartão"
                  name="number"
                  value={cardInfo.number}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(event, maskCard)
                  }
                />
                <div className="wrapper">
                  <input
                    required
                    placeholder="Validade"
                    name="expireDate"
                    value={cardInfo.expireDate}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(event, maskCardExpireDate)
                    }
                  />
                  <input
                    required
                    placeholder="CVV"
                    name="cvv"
                    maxLength={3}
                    value={cardInfo.cvv}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(event)
                    }
                  />
                </div>
              </div>
            </CheckoutInfo>
            <CheckoutInfo>
              <span>Informações do Titular do Cartão</span>
              <div className="inputs-container">
                <input
                  required
                  placeholder="Nome completo"
                  name="name"
                  value={cardInfo.name}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(event)
                  }
                />
                <div className="wrapper">
                  <input
                    required
                    placeholder="CPF"
                    name="cpf"
                    value={cardInfo.cpf}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(event, maskCPFCNPJ)
                    }
                  />
                  <input
                    required
                    name="phone"
                    placeholder="Telefone"
                    value={cardInfo.phone}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(event, maskPhone)
                    }
                  />
                </div>
              </div>
            </CheckoutInfo>

            <CheckoutFooter>
              <CheckoutInfo>
                <span>Total</span>
                <p>{checkoutTotal}</p>
              </CheckoutInfo>
              <BuyTicketButton type="submit">
                {isBuying ? <Loading width="32" height="32" /> : "Comprar"}
              </BuyTicketButton>
            </CheckoutFooter>
          </form>
        </BuyTicketModalContainer>
      )}
    </Modal>
  );
}
