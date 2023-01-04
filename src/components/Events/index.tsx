import { IEvent } from "../../dtos/EventDTO";
import { Event } from "../Event";
import { Title } from "../Title";
import { HorizontalScroll } from "../HorizontalScroll";
import { EventsContainer } from "./styles";

interface EventsProps {
  events: IEvent[];
}

export function Events({ events }: EventsProps) {
  return (
    <EventsContainer>
      <Title title="Eventos" />

      <HorizontalScroll>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </HorizontalScroll>
    </EventsContainer>
  );
}
