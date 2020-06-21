import React from "react";

import seta from "../../assets/Vector.svg";

import { ContainerMain } from "./styles";

function Main() {
  return (
    <ContainerMain>
      <h1>Escola de Surf</h1>
      <form action="">
        <input type="text" placeholder="E-mail" />
        <button type="submit" formaction="/surfbot/cart">
          Matricule-se <img src={seta} alt="seta" />
        </button>
      </form>
    </ContainerMain>
  );
}

export default Main;
