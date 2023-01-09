import styled, { css } from "styled-components";

interface TicketDisponibilityProps {
  isAvailable: boolean;
}

interface TicketCountButtonProps {
  action: "add" | "remove";
}

export const TicketContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 16px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .ticket-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .ticket-count {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;

    .ticket-count {
      gap: 1rem;

      span {
        font-size: 1.125rem;
      }
    }
  }
`;

export const TicketDisponibility = styled.span<TicketDisponibilityProps>`
  color: ${({ theme, isAvailable }) =>
    isAvailable ? theme.colors.green : theme.colors.red};
`;

export const TicketCountButton = styled.button<TicketCountButtonProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ action }) =>
    action === "add"
      ? css`
          background-color: ${({ theme }) => theme.colors.white};

          svg {
            color: ${({ theme }) => theme.colors.gray[800]};
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors.gray[800]};

          svg {
            color: ${({ theme }) => theme.colors.white};
          }
        `}

  @media (min-width: 1024px) {
    width: 32px;
    height: 32px;
  }
`;
