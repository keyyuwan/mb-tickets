import Link from "next/link";

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
          <Link key={event.id} href={`/evento/${event.id}`}>
            <Event event={event} />
          </Link>
        ))}
      </HorizontalScroll>
    </EventsContainer>
  );
}
