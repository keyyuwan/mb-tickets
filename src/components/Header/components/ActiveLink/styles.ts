import styled from "styled-components";

interface LinkContentProps {
  isActive: boolean;
}

export const LinkContent = styled.div<LinkContentProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.pink : theme.colors.gray[100]};

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1023px) {
    span {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    transition: color 0.2s;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.pink};
    }

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
