import Link from "next/link";
import { Ticket, House, User } from "phosphor-react";

import { HeaderContainer, NavBar, ProfileInfo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <ProfileInfo>
          <img
            src="https://github.com/keyyuwan.png"
            alt="Imagem de perfil do usuário"
          />
          <span>Olá, Key!</span>
        </ProfileInfo>
        <NavBar>
          <Link href="/">
            <House size={32} />
            <span>Eventos</span>
          </Link>
          <Link href="/meus-ingressos">
            <Ticket size={32} />
            <span>Meus Ingressos</span>
          </Link>
          <Link href="/perfil">
            <User size={32} />
            <span>Meu Perfil</span>
          </Link>
        </NavBar>
      </div>
    </HeaderContainer>
  );
}
