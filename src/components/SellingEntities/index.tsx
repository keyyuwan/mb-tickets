import { IOrganizer } from "../../dtos/OrganizerDTO";
import { Title } from "../Title";
import { HorizontalScroll } from "../HorizontalScroll";
import { SellingEntity } from "../SellingEntity";
import { SellingEntitiesContainer } from "./styles";

interface SellingEntitiesProps {
  organizers: IOrganizer[];
}

export function SellingEntities({ organizers }: SellingEntitiesProps) {
  return (
    <SellingEntitiesContainer>
      <Title title="Entidades Organizadoras" />

      <HorizontalScroll>
        {organizers.map((organizer) => (
          <SellingEntity key={organizer.id} organizer={organizer} />
        ))}
      </HorizontalScroll>
    </SellingEntitiesContainer>
  );
}
