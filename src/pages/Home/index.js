import React from "react";

import Main from "../../components/Main";
import Praia from "../../components/Praia";
import Aulas from "../../components/Aulas";
import Blockquote from "../../components/Blockquote";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Main />
      <Praia />
      <Aulas />
      <Blockquote />
    </Container>
  );
}

export default Home;
