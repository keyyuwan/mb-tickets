import styled from "styled-components";

export const TicketDetailsContainer = styled.div``;

export const TicketInfo = styled.div`
  margin-top: 1rem;

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  p {
    font-weight: bold;
  }

  .qrcode-img {
    width: 140px;
    height: 140px;
    display: block;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
