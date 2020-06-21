import React from "react";

import Main from "../../components/Main";
import Praia from "../../components/Praia";
import Aulas from "../../components/Aulas";
import Blockquote from "../../components/Blockquote";
import Contato from "../../components/Contato";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Main />
      <Praia />
      <Aulas />
      <Blockquote />
      <Contato />
    </Container>
  );
}

export default Home;
