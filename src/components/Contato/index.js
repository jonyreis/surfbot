import React from "react";

import seta from "../../assets/Vector.svg";

import { ContatoContainer } from "./styles";

function Contato() {
  return (
    <ContatoContainer id="contato">
      <h2>Contato</h2>
      <div className="flex-items">
        <form className="form">
          <label>Nome: </label>
          <input></input>
          <label>E-mail: </label>
          <input></input>
          <label>Mensagem: </label>
          <textarea></textarea>
          <a href="/cart" alt="Botão para enviar a mensagem">
            Enviar Mensagem <img src={seta} alt="seta" />
          </a>
        </form>
        <span className="divisoria" />
        <div className="info-contato">
          <div className="endereco">
            <span>Endereço</span>
            <p>Praia mansa nº 47,</p>
            <p>Rio de Janeiro - RJ</p>
            <p>Procure a barraca vermelha</p>
            <h3>Ver no mapa</h3>
          </div>
          <div className="contato">
            <span>E-mail & Telefone</span>
            <p>contato@surfbot.com.br</p>
            <p>21 99999-8888</p>
          </div>
          <div className="horario">
            <span>Horário</span>
            <p>De sexta à Sábado</p>
            <p>Das 08:00 as 14:00</p>
          </div>
        </div>
      </div>
    </ContatoContainer>
  );
}

export default Contato;
