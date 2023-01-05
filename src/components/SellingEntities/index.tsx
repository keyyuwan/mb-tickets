import Link from "next/link";

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
          <Link key={organizer.id} href={`/entidade/${organizer.id}`}>
            <SellingEntity organizer={organizer} />
          </Link>
        ))}
      </HorizontalScroll>
    </SellingEntitiesContainer>
  );
}
