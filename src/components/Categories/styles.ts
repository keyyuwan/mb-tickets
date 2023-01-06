import styled, { css } from "styled-components";

interface CategoryProps {
  isNotBeingFiltered?: boolean;
}

export const CategoriesContainer = styled.div`
  margin-top: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    color: ${({ theme }) => theme.colors.pink};
  }

  @media (min-width: 1024px) {
    transition: 0.2s;

    button:hover {
      text-decoration: underline;
    }
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 1.5rem;

  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div<CategoryProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  transition: filter 0.2s;

  ${({ isNotBeingFiltered }) =>
    isNotBeingFiltered &&
    css`
      filter: brightness(0.5);
    `}

  &:hover {
    filter: brightness(0.8);
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    text-align: center;
  }

  @media (min-width: 1024px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;
