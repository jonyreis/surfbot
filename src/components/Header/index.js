import React from "react";

import logo from "../../assets/logo-surfbot.svg";

import { ContainerHeader, TopHeader } from "./styles";

function Header() {
  return (
    <ContainerHeader>
      <TopHeader>
        <p>Aula na Praia Mansa de Sexta à Sábado 08:00 as 14:00</p>
      </TopHeader>
      <nav>
        <a href="/">
          <img src={logo} alt="Logo Surfbot" />
        </a>
        <ul>
          <li>
            <a href="/#praia" alt="Link Praia">
              Praia
            </a>
          </li>
          <li>
            <a href="/#aulas" alt="Link Aulas">
              Aulas
            </a>
          </li>
          <li>
            <a href="/#contato" alt="Link Contato">
              Contato
            </a>
          </li>
          <li>
            <a href="/cart" alt="Link Matricula" id="matricule-se">
              Matricule-se
            </a>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  );
}

export default Header;
