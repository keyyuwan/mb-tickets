import { EventContainer } from "./styles";

interface EventProps {
  isEventActive?: boolean;
}

export function Event({ isEventActive }: EventProps) {
  return (
    <EventContainer isActive={isEventActive}>
      <img src="https://github.com/keyyuwan.png" alt="Imagem do evento" />
      <strong>Med In Break - PUC PR</strong>

      <div className="event-info">
        <time>09 de Janeiro</time>
        <span>Curitiba, Paraná</span>
      </div>
    </EventContainer>
  );
}
