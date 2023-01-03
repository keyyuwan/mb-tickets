import { Title } from "../Title";
import { HorizontalScroll } from "../HorizontalScroll";
import { SellingEntity } from "../SellingEntity";
import { SellingEntitiesContainer } from "./styles";

export function SellingEntities() {
  return (
    <SellingEntitiesContainer>
      <Title title="Entidades Vendedoras" />

      <HorizontalScroll>
        <SellingEntity />
        <SellingEntity />
        <SellingEntity />
        <SellingEntity />
        <SellingEntity />
        <SellingEntity />
        <SellingEntity />
      </HorizontalScroll>
    </SellingEntitiesContainer>
  );
}
