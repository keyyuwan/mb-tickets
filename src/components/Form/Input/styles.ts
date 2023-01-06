import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    align-self: flex-start;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[200]};
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  input {
    height: 40px;
    border-radius: 8px;
    padding: 0 1rem;

    border: 0;
    outline: 0;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const HelperText = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  text-align: left;
`;
