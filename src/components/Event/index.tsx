import { EventContainer } from "./styles";

export function Event() {
  return (
    <EventContainer>
      <img src="https://github.com/keyyuwan.png" alt="Imagem do evento" />
      <strong>Med In Break - PUC PR</strong>

      <div className="event-info">
        <time>09 de Janeiro</time>
        <span>Curitiba, Paraná</span>
      </div>
    </EventContainer>
  );
}
