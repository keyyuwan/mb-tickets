import { SellingEntityContainer } from "./styles";

interface SellingEntityProps {
  organizer: {
    img: string;
    name: string;
    city: string;
    state: string;
  };
}

export function SellingEntity({ organizer }: SellingEntityProps) {
  return (
    <SellingEntityContainer>
      <img src={organizer.img} alt="Imagem da entidade vendedora" />
      <strong>{organizer.name}</strong>
      <span>{`${organizer.city}/${organizer.state}`}</span>
    </SellingEntityContainer>
  );
}
