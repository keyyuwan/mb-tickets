import { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { maskCPFCNPJ } from "../../utils/masks";
import { toastOptions } from "../../utils/toastify";
import { Input } from "../../components/Form/Input";
import {
  Content,
  Form,
  GoToLoginText,
  RegisterButton,
  RegisterContainer,
  Title,
} from "./styles";

interface RegisterData {
  username: string;
  name: string;
  surname: string;
  cpfcnpj: string;
  password: string;
  confirmedPassword: string;
}

export default function Register() {
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: "",
    name: "",
    surname: "",
    cpfcnpj: "",
    password: "",
    confirmedPassword: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
    mask?: (value: string) => string
  ) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (mask) {
      value = mask(value);
    }

    if (name === "username") {
      value = value.toLowerCase();
    }

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (registerData.password !== registerData.confirmedPassword) {
      toast.error("Senha deve ser igual a Confirmar Senha", toastOptions);
      return;
    }

    try {
      setIsRegistering(true);
      const { username, name, surname, cpfcnpj, password } = registerData;

      await api.post("users", {
        id: username,
        username,
        name,
        surname,
        cpfcnpj,
        password,
      });

      toast.success("Cadastro realizado!", toastOptions);
    } catch (err) {
      console.log(err);
      toast.error("Ocorreu um erro no cadastro :(", toastOptions);
    } finally {
      setIsRegistering(false);
    }
  }

  return (
    <>
      <Head>
        <title>MBTickets | Cadastro</title>
      </Head>

      <RegisterContainer>
        <Content>
          <Title>Cadastro</Title>

          <Form onSubmit={handleRegister}>
            <Input
              required
              label="Nome de usuário"
              name="username"
              value={registerData.username}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event)
              }
            />
            <Input
              required
              label="Nome"
              name="name"
              value={registerData.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event)
              }
            />
            <Input
              label="Sobrenome"
              name="surname"
              value={registerData.surname}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event)
              }
            />
            <Input
              required
              label="CPF ou CNPJ"
              name="cpfcnpj"
              value={registerData.cpfcnpj}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event, maskCPFCNPJ)
              }
            />
            <Input
              required
              label="Senha"
              type="password"
              name="password"
              value={registerData.password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event)
              }
            />
            <Input
              required
              label="Confirmar Senha"
              type="password"
              name="confirmedPassword"
              value={registerData.confirmedPassword}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(event)
              }
            />

            <RegisterButton type="submit">
              {isRegistering ? "..." : "Cadastrar"}
            </RegisterButton>
          </Form>

          <GoToLoginText>
            Já tem uma conta? <Link href="/login">Entre aqui</Link>
          </GoToLoginText>
        </Content>
      </RegisterContainer>
    </>
  );
}
