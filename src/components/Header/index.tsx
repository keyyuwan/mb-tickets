import Link from "next/link";
import {
  Ticket,
  House,
  MagnifyingGlass,
  SignIn,
  Signpost,
} from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";
import { ActiveLink } from "./components/ActiveLink";
import { HeaderContainer, Logo, NavBar, ProfileInfo } from "./styles";

export function Header() {
  const { user, isAuthenticated } = useAuth();

  return (
    <HeaderContainer>
      <div className="content">
        <ProfileInfo>
          {isAuthenticated ? (
            <>
              <Link href="/perfil">
                <img src={user!.img} alt="Imagem de perfil do usuário" />
              </Link>
              <span>Olá, {user!.name}!</span>
            </>
          ) : (
            <Logo>MBTickets</Logo>
          )}
        </ProfileInfo>
        <NavBar>
          <ActiveLink href="/" icon={<House />} text="Eventos" />
          <ActiveLink href="/buscar" icon={<MagnifyingGlass />} text="Buscar" />
          {isAuthenticated ? (
            <ActiveLink
              href="/meus-ingressos"
              icon={<Ticket />}
              text="Meus Ingressos"
            />
          ) : (
            <>
              <ActiveLink href="/login" icon={<SignIn />} text="Entrar" />
              <ActiveLink
                href="/cadastro"
                icon={<Signpost />}
                text="Cadastre-se"
              />
            </>
          )}
        </NavBar>
      </div>
    </HeaderContainer>
  );
}
