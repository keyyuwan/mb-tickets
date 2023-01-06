import { createContext, ReactNode, use, useEffect, useState } from "react";

import { api } from "../services/api";
import { IUser } from "../dtos/UserDTO";

interface AuthContextData {
  user: IUser | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  function signIn() {}

  function signOut() {}

  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await api.get<IUser[]>(
          "users?username=keyyuwan&password=1234"
        );

        const userData = data[0];

        setUser({
          id: userData.id,
          name: userData.name,
          surname: userData.surname,
          img: userData.img,
          cpf: userData.cpf,
        });
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
