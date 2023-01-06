import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 0 2rem 2rem;

  @media (min-width: 1024px) {
    margin-top: 4rem;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;

  @media (min-width: 1024px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    margin-top: 2rem;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 1rem;

  border-radius: 8px;

  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;

  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.gray[100]};

  @media (min-width: 1024px) {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const GoToRegisterText = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.gray[100]};

  a {
    color: ${({ theme }) => theme.colors.pink};
  }

  a:hover {
    text-decoration: underline;
  }
`;
