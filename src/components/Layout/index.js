import React from "react";

import fotoLocal from "../../assets/foto-local.png";

import { LayoutContainer } from "./styles";

function Layout() {
  return (
    <LayoutContainer>
      <img src={fotoLocal} alt="Foto da Escola" />
      <h1>Aulas em uma das melhores praias do Rio.</h1>
    </LayoutContainer>
  );
}

export default Layout;
