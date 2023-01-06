import { FormEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../components/Form/Input";
import {
  Content,
  Form,
  GoToRegisterText,
  LoginButton,
  LoginContainer,
  Title,
} from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoginIn } = useAuth();

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await signIn({
      username,
      password,
    });
  }

  return (
    <>
      <Head>
        <title>MBTickets | Login</title>
      </Head>

      <LoginContainer>
        <Content>
          <Title>Login</Title>

          <Form onSubmit={handleSignIn}>
            <Input
              required
              label="Nome de usuário"
              name="username"
              value={username}
              onChange={(event) =>
                setUsername(
                  (event.target as HTMLInputElement).value.toLowerCase()
                )
              }
            />
            <Input
              required
              label="Senha"
              name="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword((event.target as HTMLInputElement).value)
              }
            />
            <LoginButton type="submit">
              {isLoginIn ? "..." : "Entrar"}
            </LoginButton>
          </Form>

          <GoToRegisterText>
            Ainda não tem uma conta?{" "}
            <Link href="/cadastro">Cadastre-se aqui</Link>
          </GoToRegisterText>
        </Content>
      </LoginContainer>
    </>
  );
}
