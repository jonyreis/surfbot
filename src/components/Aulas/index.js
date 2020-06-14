import React from "react";

import seta from "../../assets/Vector.svg";
import prancha from "../../assets/prancha.svg";

import { AulasContainer } from "./styles";

function Aulas() {
  return (
    <AulasContainer id="aulas">
      <h2>Aulas</h2>
      <div className="items-aulas">
        <div className="aula">
          <div className="pranchas">
            <img src={prancha} alt="prancha" />
          </div>

          <h3>Infantil</h3>
          <div className="plano-aula">
            <p>
              <span></span> Público entre 5 e 15 anos
            </p>
            <p>
              <span></span> Equipamentos fornecidos
            </p>
            <p>
              <span></span> Horários de Sex. à Sab.
            </p>
            <p>
              <span></span> 2 horas seguidas de aula
            </p>
          </div>
          <div className="valor">
            <span>R$ 49,99 / AULA</span>
            <a href="/cart" alt="link para o carrinho">
              Matricule-se <img src={seta} alt="seta" />
            </a>
          </div>
        </div>
        <div className="aula">
          <div className="pranchas">
            <img src={prancha} alt="prancha" />
            <img src={prancha} alt="prancha" />
          </div>
          <h3>Adulto</h3>
          <div className="plano-aula">
            <p>
              <span></span> Público entre 5 e 15 anos
            </p>
            <p>
              <span></span> Equipamentos fornecidos
            </p>
            <p>
              <span></span> Horários de Sex. à Sab.
            </p>
            <p>
              <span></span> 2 horas seguidas de aula
            </p>
          </div>
          <div className="valor">
            <span>R$ 49,99 / AULA</span>
            <a href="/cart" alt="link para o carrinho">
              Matricule-se <img src={seta} alt="seta" />
            </a>
          </div>
        </div>
        <div className="aula">
          <div className="pranchas">
            <img src={prancha} alt="prancha" />
            <img src={prancha} alt="prancha" />
            <img src={prancha} alt="prancha" />
          </div>
          <h3>Profissional</h3>
          <div className="plano-aula">
            <p>
              <span></span> Público entre 5 e 15 anos
            </p>
            <p>
              <span></span> Equipamentos fornecidos
            </p>
            <p>
              <span></span> Horários de Sex. à Sab.
            </p>
            <p>
              <span></span> 2 horas seguidas de aula
            </p>
          </div>
          <div className="valor">
            <span>R$ 49,99 / AULA</span>
            <a href="/cart" alt="link para o carrinho">
              Matricule-se <img src={seta} alt="seta" />
            </a>
          </div>
        </div>
      </div>
      <div className="blockquote">
        <p>
          Possui um grupo com mais de <span>3 pessoas</span> ?
        </p>
        <p>
          Entre em <a href="#contato">contato</a> para um desconto personalizado
        </p>
      </div>
    </AulasContainer>
  );
}

export default Aulas;
