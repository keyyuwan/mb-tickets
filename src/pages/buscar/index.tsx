import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

import { api } from "../../services/api";
import { IEvent } from "../../dtos/EventDTO";
import { IOrganizer } from "../../dtos/OrganizerDTO";
import { useDebounce } from "../../hooks/useDebounce";
import { formatDate } from "../../utils/formatDate";
import { Events } from "../../components/Events";
import { SellingEntities } from "../../components/SellingEntities";
import { Loading } from "../../components/Loading";
import {
  LoadingContainer,
  SearchBar,
  SearchBarContainer,
  SearchContainer,
  SearchContent,
  SearchResultsContainer,
} from "./styles";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [entities, setEntities] = useState<IOrganizer[]>([]);

  const debouncedValue = useDebounce(search, 700);

  useEffect(() => {
    async function getEventsAndEntities() {
      setIsSearching(true);

      try {
        const [eventsData, organizersData] = await Promise.all([
          api.get<IEvent[]>(`events?isActive=true&title_like=${search}`, {
            params: {
              _sort: "date",
            },
          }),
          api.get(`organizers?_embed=events&name_like=${search}`),
        ]);

        const formattedEvents = eventsData.data.map((event) => ({
          ...event,
          date: formatDate(event.date, "dd 'de' MMMM"),
        }));

        setEvents(formattedEvents);
        setEntities(organizersData.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsSearching(false);
      }
    }

    getEventsAndEntities();
  }, [debouncedValue]);

  return (
    <SearchContainer>
      <SearchBarContainer>
        <SearchBar
          type="text"
          placeholder="Busque por eventos ou entidades"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <MagnifyingGlass />
      </SearchBarContainer>

      <SearchContent>
        {isSearching ? (
          <LoadingContainer>
            <Loading height="64" width="64" />
          </LoadingContainer>
        ) : (
          <>
            <SearchResultsContainer>
              <Events events={events} />
            </SearchResultsContainer>

            <SearchResultsContainer>
              <SellingEntities organizers={entities} />
            </SearchResultsContainer>
          </>
        )}
      </SearchContent>
    </SearchContainer>
  );
}
