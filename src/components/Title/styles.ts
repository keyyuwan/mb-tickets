import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
