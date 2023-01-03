import styled from "styled-components";

export const HorizontalScrollContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: -3rem;
  }
`;

export const ScrollButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    svg {
      width: 28px;
      height: 28px;
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export const List = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    scroll-behavior: smooth;
  }
`;
