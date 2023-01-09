import styled from "styled-components";

export const NotAuthModalContainer = styled.div`
  p {
    margin-top: 2rem;

    a {
      color: ${({ theme }) => theme.colors.pink};
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
