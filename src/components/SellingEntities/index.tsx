import Link from "next/link";

import { IOrganizer } from "../../dtos/OrganizerDTO";
import { Title } from "../Title";
import { HorizontalScroll } from "../HorizontalScroll";
import { SellingEntity } from "../SellingEntity";
import { SellingEntitiesContainer, NoEntitiesText } from "./styles";

interface SellingEntitiesProps {
  organizers: IOrganizer[];
}

export function SellingEntities({ organizers }: SellingEntitiesProps) {
  const hasAtLeastOneEntity = organizers.length > 0;

  return (
    <SellingEntitiesContainer>
      <Title title="Entidades Organizadoras" />

      {hasAtLeastOneEntity ? (
        <HorizontalScroll>
          {organizers.map((organizer) => (
            <Link key={organizer.id} href={`/entidade/${organizer.id}`}>
              <SellingEntity organizer={organizer} />
            </Link>
          ))}
        </HorizontalScroll>
      ) : (
        <NoEntitiesText>
          Nenhuma entidade encontrada para esse filtro ou busca
        </NoEntitiesText>
      )}
    </SellingEntitiesContainer>
  );
}
