import styled, { css } from "styled-components";

interface EventImageContainerProps {
  img: string;
}

interface TicketCountButtonProps {
  action: "add" | "remove";
}

interface TicketDisponibilityProps {
  isAvailable: boolean;
}

export const EventContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 2rem 2rem;
    max-width: 1120px;
    margin: 2rem auto 0;
  }
`;

export const EventImageContainer = styled.div<EventImageContainerProps>`
  @media (min-width: 768px) {
    position: relative;
    overflow: hidden;
    height: 400px;

    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;

    border-radius: 1rem;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: 240px;

  object-fit: cover;

  @media (min-width: 768px) {
    height: 100%;
    width: 800px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 1rem;
  }
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2rem;
  }

  time,
  span,
  svg {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .wrapper {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  @media (min-width: 1024px) {
    gap: 0.5rem;

    strong {
      font-size: 3rem;
    }
  }
`;

export const EventContent = styled.div`
  @media (max-width: 767px) {
    padding: 0 2rem 2rem;
    max-width: 1120px;
    margin: 1rem auto 0;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Ticket = styled.div`
  max-width: 800px;
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

export const EventDescriptionContainer = styled.div`
  max-width: 800px;

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const EventOrganizerContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: fit-content;
`;

export const TicketDisponibility = styled.span<TicketDisponibilityProps>`
  color: ${({ theme, isAvailable }) =>
    isAvailable ? theme.colors.green : theme.colors.red};
`;
