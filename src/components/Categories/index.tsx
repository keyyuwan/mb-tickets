import { useEffect, useState } from "react";

import { ICategory } from "../../dtos/CategoryDTO";
import { api } from "../../services/api";
import { Loading } from "../Loading";
import { Title } from "../Title";
import {
  CategoriesContainer,
  CategoriesList,
  Category,
  LoadingContainer,
  TitleWrapper,
} from "./styles";

interface CategoriesProps {
  filteredCategoryId: string;
  handleFilterByCategory: (id: string) => void;
}

export function Categories({
  filteredCategoryId,
  handleFilterByCategory,
}: CategoriesProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getCategories() {
      setIsFetching(true);

      try {
        const { data } = await api.get("categories");
        setCategories(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsFetching(false);
      }
    }

    getCategories();
  }, []);

  return (
    <CategoriesContainer>
      <TitleWrapper>
        <Title title="O que você procura?" />

        {!!filteredCategoryId && (
          <button onClick={() => handleFilterByCategory("")}>
            Limpar filtro
          </button>
        )}
      </TitleWrapper>

      {isFetching ? (
        <LoadingContainer>
          <Loading width="56" height="56" />
        </LoadingContainer>
      ) : (
        <CategoriesList>
          {categories.map((category) => (
            <Category
              key={category.id}
              onClick={() => handleFilterByCategory(category.id)}
              isNotBeingFiltered={
                !!filteredCategoryId && filteredCategoryId !== category.id
              }
            >
              <img src={category.img} alt="Imagem da categoria" />
              <span>{category.title}</span>
            </Category>
          ))}
        </CategoriesList>
      )}
    </CategoriesContainer>
  );
}
