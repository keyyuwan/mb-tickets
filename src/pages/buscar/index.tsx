import { MagnifyingGlass } from "phosphor-react";

import { Events } from "../../components/Events";
import { SellingEntities } from "../../components/SellingEntities";
import {
  SearchBar,
  SearchBarContainer,
  SearchContainer,
  SearchContent,
  SearchResultsContainer,
} from "./styles";

export default function Search() {
  return (
    <SearchContainer>
      <SearchBarContainer>
        <SearchBar type="text" placeholder="Busque por eventos ou entidades" />
        <MagnifyingGlass />
      </SearchBarContainer>

      <SearchContent>
        <SearchResultsContainer>
          <Events />
        </SearchResultsContainer>

        <SearchResultsContainer>
          <SellingEntities />
        </SearchResultsContainer>
      </SearchContent>
    </SearchContainer>
  );
}
