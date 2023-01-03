import { Title } from "../Title";
import { CATEGORIES } from "../../utils/categories";
import { CategoriesContainer, CategoriesList, Category } from "./styles";

export function Categories() {
  return (
    <CategoriesContainer>
      <Title title="O que você procura?" />

      <CategoriesList>
        {CATEGORIES.map((category) => (
          <Category key={category.id}>
            <img src={category.img} alt="Imagem da categoria" />
            <span>{category.name}</span>
          </Category>
        ))}
      </CategoriesList>
    </CategoriesContainer>
  );
}
