import styled from "styled-components";

export const SellingEntitiesContainer = styled.div`
  margin-top: 2rem;
`;

export const NoEntitiesText = styled.p`
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-top: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
