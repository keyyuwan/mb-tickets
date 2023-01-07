import styled from "styled-components";

export const EventsContainer = styled.div`
  margin-top: 2rem;
`;

export const NoEventsText = styled.p`
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-top: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
