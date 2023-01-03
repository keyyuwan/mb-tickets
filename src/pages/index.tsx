import Head from "next/head";

import { Categories } from "../components/Categories";
import { Events } from "../components/Events";
import { Filter } from "../components/Filter";
import { SellingEntities } from "../components/SellingEntities";
import { Container } from "../styles/pages/home-styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>MBTickets</title>
      </Head>
      <Container>
        <Filter />
        <Categories />
        <Events />
        <SellingEntities />
      </Container>
    </>
  );
}
