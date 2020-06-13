import React from "react";

import Main from "../../components/Main";
import Praia from "../../components/Praia";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Main />
      <Praia />
    </Container>
  );
}

export default Home;
