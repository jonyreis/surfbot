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
        <a href="/surfbot">
          <img src={logo} alt="Logo Surfbot" />
        </a>
        <ul>
          <li>
            <a href="/surfbot/#praia" alt="Link Praia">
              Praia
            </a>
          </li>
          <li>
            <a href="/surfbot/#aulas" alt="Link Aulas">
              Aulas
            </a>
          </li>
          <li>
            <a href="/surfbot/#contato" alt="Link Contato">
              Contato
            </a>
          </li>
          <li>
            <a href="/surfbot/cart" alt="Link Matricula" id="matricule-se">
              Matricule-se
            </a>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  );
}

export default Header;
