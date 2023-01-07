import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import { destroyCookie, parseCookies, setCookie } from "nookies";

import { api } from "../services/api";
import { IUser } from "../dtos/UserDTO";
import { toastOptions } from "../utils/toastify";

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: IUser | null;
  signIn: ({ username, password }: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isLoginIn: boolean;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoginIn, setIsLoginIn] = useState(false);

  async function signIn({ username, password }: SignInCredentials) {
    setIsLoginIn(true);

    try {
      const { data } = await api.get(
        `users?username=${username}&password=${password}`
      );

      const userData = {
        id: data[0].id,
        username: data[0].username,
        name: data[0].name,
        surname: data[0].surname,
        img: data[0].img,
        cpf: data[0].cpf,
      };

      setUser(userData);

      setCookie(undefined, "@mbtickets:user", JSON.stringify(userData), {
        maxAge: 60 * 60 * 24, // 24h
        path: "/",
      });

      Router.push("/");

      toast.success(`Bem vindo(a) ${userData.name}`, toastOptions);
    } catch (err) {
      console.log(err);
      toast.error("Ocorreu um erro ao entrar :(", toastOptions);
    } finally {
      setIsLoginIn(false);
    }
  }

  function signOut() {
    destroyCookie(undefined, "@mbtickets:token");
    destroyCookie(undefined, "@mbtickets:user");
    setUser(null);

    Router.push("/login");
  }

  useEffect(() => {
    const { "@mbtickets:user": userStoraged } = parseCookies();

    if (userStoraged) {
      const userStoragedParsed = JSON.parse(userStoraged);

      api
        .get(`users?username=${userStoragedParsed.username}`)
        .then((res) => {
          const userData = {
            id: res.data[0].id,
            username: res.data[0].username,
            name: res.data[0].name,
            surname: res.data[0].surname,
            img: res.data[0].img,
            cpf: res.data[0].cpf,
          };

          setUser(userData);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isLoginIn, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
