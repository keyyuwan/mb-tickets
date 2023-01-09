import styled from "styled-components";

export const BuyTicketModalContainer = styled.div``;

export const SuccessModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 280px;
  }

  a {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 500;
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    a {
      font-size: 1.125rem;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

export const CheckoutInfo = styled.div`
  margin-top: 1rem;

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray[200]};
    display: block;
  }

  p {
    font-weight: bold;
  }

  .inputs-container {
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      input {
        width: 48%;
      }
    }

    input {
      width: 100%;
      height: 40px;
      outline: 0;
      border-radius: 4px;
      border: 1.5px solid ${({ theme }) => theme.colors.gray[200]};
      padding: 0.5rem 1rem;

      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

export const CheckoutFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
