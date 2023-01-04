import { GetServerSideProps } from "next";
import Head from "next/head";

import { api } from "../services/api";
import { IEvent } from "../dtos/EventDTO";
import { IOrganizer } from "../dtos/OrganizerDTO";
import { Categories } from "../components/Categories";
import { Events } from "../components/Events";
import { Filter } from "../components/Filter";
import { SellingEntities } from "../components/SellingEntities";
import { Container } from "../styles/pages/home-styles";

interface HomeProps {
  events: IEvent[];
  organizers: IOrganizer[];
}

export default function Home({ events, organizers }: HomeProps) {
  return (
    <>
      <Head>
        <title>MBTickets</title>
      </Head>
      <Container>
        <Filter />
        <Categories />
        <Events events={events} />
        <SellingEntities organizers={organizers} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [eventsData, organizersData] = await Promise.all([
    api.get("events?_expand=organizer", {
      params: {
        _sort: "date",
      },
    }),
    api.get("organizers?_embed=events"),
  ]);

  const formattedEvents = eventsData.data.map((event: IEvent) => ({
    id: event.id,
    title: event.title,
    img: event.img,
    description: event.description,
    city: event.city,
    state: event.state,
    address: event.address,
    date: event.date, // formatar com date-fns
    isActive: event.isActive,
    organizerEntity: {
      name: event.organizer.name,
      img: event.organizer.img,
      city: event.organizer.city,
      state: event.organizer.state,
    },
  }));

  const formattedOrganizers = organizersData.data.map(
    (organizer: IOrganizer) => ({
      id: organizer.id,
      name: organizer.name,
      img: organizer.img,
      entityType: organizer.entityType,
      city: organizer.city,
      state: organizer.state,
      about: organizer.about,
    })
  );

  return {
    props: {
      events: formattedEvents,
      organizers: formattedOrganizers,
    },
  };
};
