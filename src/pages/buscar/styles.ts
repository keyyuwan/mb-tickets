import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 0 2rem 2rem;
  max-width: 1120px;
  margin: 1rem auto 0;
`;

export const SearchBarContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem 2rem;

  svg {
    color: ${({ theme }) => theme.colors.gray[200]};
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1024px) {
    width: 800px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  outline: 0;
  color: ${({ theme }) => theme.colors.gray[100]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

export const SearchContent = styled.div``;

export const SearchResultsContainer = styled.div`
  margin-top: 2rem;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;
