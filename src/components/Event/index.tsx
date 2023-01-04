import { IEvent } from "../../dtos/EventDTO";
import { EventContainer } from "./styles";

interface EventProps {
  isEventActive?: boolean;
  event: IEvent;
}

export function Event({ isEventActive = true, event }: EventProps) {
  return (
    <EventContainer isActive={isEventActive}>
      <img src={event.img} alt="Imagem do evento" />
      <strong>{event.title}</strong>

      <div className="event-info">
        <time>
          {/* 09 de Janeiro */}
          {event.date}
        </time>
        <span>{`${event.city}, ${event.state}`}</span>
      </div>
    </EventContainer>
  );
}
