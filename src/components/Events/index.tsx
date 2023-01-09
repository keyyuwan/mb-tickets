import Link from "next/link";

import { IEvent } from "../../dtos/EventDTO";
import { Event } from "../Event";
import { Title } from "../Title";
import { HorizontalScroll } from "../HorizontalScroll";
import { EventsContainer, NoEventsText } from "./styles";

interface EventsProps {
  events: IEvent[];
}

export function Events({ events }: EventsProps) {
  const hasAtLeastOneEvent = events.length > 0;

  return (
    <EventsContainer>
      <Title title="Eventos" />

      {hasAtLeastOneEvent ? (
        <HorizontalScroll>
          {events.map((event) => (
            <Link key={event.id} href={`/evento/${event.id}`}>
              <Event event={event} />
            </Link>
          ))}
        </HorizontalScroll>
      ) : (
        <NoEventsText>
          Nenhum evento encontrado para esse filtro ou busca
        </NoEventsText>
      )}
    </EventsContainer>
  );
}
