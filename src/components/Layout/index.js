import React from "react";

import fotoLocal from "../../assets/foto-local.png";

import { LayoutContainer } from "./styles";

function Layout() {
  return (
    <LayoutContainer>
      <img src={fotoLocal} alt="Foto da Escola" />
      <h2>
        <span>Aulas</span> em uma das melhores praias do <span>Rio</span>.
      </h2>
    </LayoutContainer>
  );
}

export default Layout;
