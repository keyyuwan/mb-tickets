import styled, { css } from "styled-components";

interface LocationButtonProps {
  isCityEmpty: boolean;
}

export const FilterContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const LocationButton = styled.button<LocationButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: auto;

  color: ${({ theme }) => theme.colors.pink};

  ${({ isCityEmpty }) =>
    isCityEmpty &&
    css`
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    `}
`;
