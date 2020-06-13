import React from "react";

import fotoLocal from "../../assets/foto-local.png";
import fotoMap from "../../assets/foto-mapa.png";
import snadalhas from "../../assets/sandalhas.svg";
import coco from "../../assets/coco.svg";
import boia from "../../assets/boia.svg";

import { PraiaContainer, BoxLeft, BoxRight } from "./styles";

function Praia() {
  return (
    <PraiaContainer>
      <BoxLeft>
        <div id="praia">
          <img src={fotoLocal} alt="Foto da Escola" />
          <img id="fotoMap" src={fotoMap} alt="Foto da localização " />
        </div>
        <div className="como-chegar">
          <span></span>
          <h4>Como Chegar:</h4>
        </div>
        <div className="como-ir">
          <p>
            <span>Carro</span> pela via Lúcio costa sentido Barra
          </p>
          <p>
            <span>Ônibus</span> linhas 2333, 138, 189 e 170
          </p>
          <p>
            <span>Metrô</span> linha azul sentido Zona Sul
          </p>
        </div>
      </BoxLeft>
      <BoxRight>
        <h2>
          <span>Aulas</span> em uma das melhores praias do <span>Rio</span>.
        </h2>
        <div className="container-item">
          <div className="item-praia">
            <img src={snadalhas} alt="Sandalhas" />
            <span>8 km da costa</span>
          </div>
          <div className="item-praia">
            <img src={coco} alt="Côco" />
            <span>Restaurante à beira mar</span>
          </div>
          <div className="item-praia">
            <img src={boia} alt="Bóia salva vidas" />
            <span>Salva vidas a cada 300m</span>
          </div>
        </div>
        <p>
          A praia da Barra da Tijuca é a principal praia da região e estende-se
          ao longo da Avenida Lúcio Costa até o Recreio dos Bandeirantes. É a
          maior praia do estado do Rio de Janeiro, com dezoito quilômetros de
          comprimento. A partir da avenida Ayrton Senna a praia não possui
          calçadão, por ser uma região de preservação ambiental.Tem ondas
          fortes, tubulares e muito boas para a prática do Surf e do
          Bodyboarding. Nela são realizadas diversas etapas de campeonatos
          brasileiros e até mundiais como WT. Suas areias são brancas e finas.
        </p>
      </BoxRight>
    </PraiaContainer>
  );
}

export default Praia;
