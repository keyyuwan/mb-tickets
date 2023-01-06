import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  .content {
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    .content {
      max-width: 1120px;
      margin: 0 auto;
    }
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.pink};
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  @media (min-width: 1024px) {
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;

      transition: filter 0.2s;
    }

    img:hover {
      filter: brightness(0.8);
    }

    span {
      font-size: 1.5rem;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
  }
`;
