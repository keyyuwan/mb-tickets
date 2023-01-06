import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "../contexts/AuthContext";
import { Header } from "../components/Header";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  );
}
