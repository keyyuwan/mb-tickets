import { Event } from "../Event";
import { Title } from "../Title";
import { EventsContainer } from "./styles";
import { HorizontalScroll } from "../HorizontalScroll";

export function Events() {
  return (
    <EventsContainer>
      <Title title="Eventos" />

      <HorizontalScroll>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </HorizontalScroll>
    </EventsContainer>
  );
}
