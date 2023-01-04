import { HorizontalScroll } from "../../../../components/HorizontalScroll";
import { Title } from "../../../../components/Title";
import { Ticket } from "../Ticket";
import { TicketsListContainer } from "./styles";

interface TicketsListProps {
  title: string;
  isTicketActive?: boolean;
}

export function TicketsList({ title, isTicketActive }: TicketsListProps) {
  return (
    <TicketsListContainer>
      <Title title={title} />

      <HorizontalScroll>
        <Ticket isTicketActive={isTicketActive} />
        <Ticket isTicketActive={isTicketActive} />
      </HorizontalScroll>
    </TicketsListContainer>
  );
}
