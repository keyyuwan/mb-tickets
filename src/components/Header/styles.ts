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

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  @media (min-width: 1024px) {
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
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  @media (max-width: 1023px) {
    span {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    transition: color 0.2s;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;
