import styled, { css } from "styled-components";

interface EventImageContainerProps {
  img: string;
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

export const ShareContainer = styled.div`
  width: fit-content;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #25d366;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
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
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BuyTicketButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};

  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 1rem;
  border-radius: 8px;

  @media (min-width: 1024px) {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
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
