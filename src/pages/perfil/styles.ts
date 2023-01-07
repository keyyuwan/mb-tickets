import styled from "styled-components";

interface OptionsButtonProps {
  isSignOutButton?: boolean;
}

export const ProfileContainer = styled.div`
  padding: 0 2rem 2rem;
  max-width: 1120px;
  margin: 1rem auto 0;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Wrapper = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    span.primary {
      font-weight: bold;
      font-size: 1.5rem;
    }

    span.secondary {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const ProfileOptions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  a {
    width: 100%;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    gap: 4rem;
  }
`;

export const OptionsButton = styled.button<OptionsButtonProps>`
  width: 100%;
  height: 50px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray[100]};
  background-color: ${({ theme, isSignOutButton }) =>
    isSignOutButton ? theme.colors.red : theme.colors.gray[700]};

  font-size: 1.5rem;

  @media (min-width: 1024px) {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
