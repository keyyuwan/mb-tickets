import styled, { css } from "styled-components";

interface TicketsContainerProps {
  isActive?: boolean;
}

export const TicketsContainer = styled.div<TicketsContainerProps>`
  display: flex;
  flex-direction: column;

  ${({ isActive }) =>
    !isActive &&
    css`
      filter: brightness(0.5);
    `}

  img {
    border-radius: 16px 16px 0 0;
    width: 200px;
    height: 180px;
  }

  @media (min-width: 1024px) {
    img {
      width: 240px;
      height: 180px;
    }
  }
`;

export const TicketContent = styled.div`
  border-radius: 0 0 16px 16px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 0.75rem;

  span.event-name {
    text-transform: uppercase;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const TicketInfo = styled.div`
  margin-top: 0.75rem;

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  p {
    font-weight: bold;
    font-size: 0.875rem;
  }
`;

export const DetailsButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.pink};
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
