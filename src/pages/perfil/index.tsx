import Link from "next/link";
import { SignOut, Ticket } from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";
import {
  OptionsButton,
  ProfileContainer,
  ProfileInfo,
  ProfileOptions,
  Title,
  Wrapper,
} from "./styles";

export default function Profile() {
  const { user, signOut } = useAuth();

  return (
    <ProfileContainer>
      <Wrapper>
        <ProfileInfo>
          <Title>Meu Perfil</Title>
          <img src={user?.img} alt="Imagem do usuário" />

          <div className="wrapper">
            <span className="primary">{`${user?.name} ${user?.surname}`}</span>
            <span className="secondary">{user?.cpf}</span>
          </div>
        </ProfileInfo>

        <ProfileOptions>
          <Link href="meus-ingressos">
            <OptionsButton>
              <Ticket />
              Meus Ingressos
            </OptionsButton>
          </Link>
          <OptionsButton isSignOutButton onClick={signOut}>
            <SignOut />
            Sair
          </OptionsButton>
        </ProfileOptions>
      </Wrapper>
    </ProfileContainer>
  );
}
