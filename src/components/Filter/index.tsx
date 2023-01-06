import { useState } from "react";
import { MapPin } from "phosphor-react";

import { FilterContainer, LocationButton } from "./styles";
import { Title } from "../Title";

const IPINFOTOKEN = "fab6b2e015faec";

interface FilterProps {
  userCity: string;
  onSetUserCity: (city: string) => void;
}

export function Filter({ userCity, onSetUserCity }: FilterProps) {
  const [userState, setUserState] = useState("");

  async function handleLocateUser() {
    if (userCity !== "") return;

    fetch(`https://ipinfo.io/json?token=${IPINFOTOKEN}`)
      .then((res) => res.json())
      .then((jsonres) => {
        onSetUserCity(jsonres.city);
        setUserState(jsonres.region);
      })
      .catch((err) => console.log(err));
  }

  return (
    <FilterContainer>
      <Title title="Cidade:" />
      <LocationButton onClick={handleLocateUser} isCityEmpty={userCity === ""}>
        <MapPin size={24} />
        {userCity !== ""
          ? `${userCity}, ${userState}`
          : "Usar minha Localização"}
      </LocationButton>
    </FilterContainer>
  );
}
