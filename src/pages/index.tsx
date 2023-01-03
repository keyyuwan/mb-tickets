import Head from "next/head";

import { Categories } from "../components/Categories";
import { Filter } from "../components/Filter";
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
      </Container>
    </>
  );
}
