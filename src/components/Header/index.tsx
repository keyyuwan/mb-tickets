import { Ticket, House, User } from "phosphor-react";

import { ActiveLink } from "./components/ActiveLink";
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
          <ActiveLink href="/" icon={<House size={32} />} text="Eventos" />
          <ActiveLink
            href="/meus-ingressos"
            icon={<Ticket size={32} />}
            text="Meus Ingressos"
          />
          <ActiveLink
            href="/perfil"
            icon={<User size={32} />}
            text="Meu Perfil"
          />
        </NavBar>
      </div>
    </HeaderContainer>
  );
}
