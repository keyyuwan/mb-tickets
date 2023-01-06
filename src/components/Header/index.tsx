import Link from "next/link";
import { Ticket, House, MagnifyingGlass } from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";
import { ActiveLink } from "./components/ActiveLink";
import { HeaderContainer, NavBar, ProfileInfo } from "./styles";

export function Header() {
  const { user } = useAuth();

  return (
    <HeaderContainer>
      <div className="content">
        <ProfileInfo>
          <Link href="/perfil">
            <img src={user?.img} alt="Imagem de perfil do usuário" />
          </Link>
          <span>Olá, {user?.name}!</span>
        </ProfileInfo>
        <NavBar>
          <ActiveLink href="/" icon={<House size={32} />} text="Eventos" />
          <ActiveLink
            href="/meus-ingressos"
            icon={<Ticket size={32} />}
            text="Meus Ingressos"
          />
          <ActiveLink
            href="/buscar"
            icon={<MagnifyingGlass size={32} />}
            text="Buscar"
          />
        </NavBar>
      </div>
    </HeaderContainer>
  );
}
