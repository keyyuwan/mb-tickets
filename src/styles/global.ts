import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.gray[800]};
        color: ${({ theme }) => theme.colors.gray[100]};
    }

    body, input, textarea, button {
        font-size: 1rem;
        font-weight: 400;
        font-family: ${({ theme }) => theme.fonts.main};

        @media (max-width: 1023px) {
            font-size: 87.5%; // 14px ou 0.875rem
        }
    }

    button {
        cursor: pointer;
        border: 0;
        background: 0;
    }
`;
