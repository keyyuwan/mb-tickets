import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { Title } from "../Title";
import { CategoriesContainer, CategoriesList, Category } from "./styles";

interface Category {
  id: string;
  title: string;
  img: string;
}

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await api.get("categories");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }

    getCategories();
  }, []);

  return (
    <CategoriesContainer>
      <Title title="O que você procura?" />

      <CategoriesList>
        {categories.map((category) => (
          <Category key={category.id}>
            <img src={category.img} alt="Imagem da categoria" />
            <span>{category.title}</span>
          </Category>
        ))}
      </CategoriesList>
    </CategoriesContainer>
  );
}
