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

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        // se tiver com mais de 576px, mantém em 576px, se for menor, ocupa 100%
        width: 100%;
        max-width: 576px;
        max-height: 400px;
        background: ${({ theme }) => theme.colors.gray[700]};
        padding: 3rem;
        position: relative;
        border-radius: 16px;
        overflow-y: auto;
    }

    .react-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.8);
        }
    }

    @media (min-width: 1024px) {
        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.pink};
            border-radius: 8px;
        }
    }
`;
