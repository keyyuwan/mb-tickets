import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "../contexts/AuthContext";
import { Header } from "../components/Header";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/global";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  );
}
