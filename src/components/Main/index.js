import React from "react";

import seta from "../../assets/Vector.svg";
import "./styles.css";

function Main() {
  return (
    <main className="bg-intro">
      <div className="container-main">
        <h1>Escola de Surf</h1>
        <form action="">
          <input type="text" placeholder="E-mail" />
          <button type="submit">Matricule-se</button>
          <img src={seta} alt="seta" />
        </form>
      </div>
    </main>
  );
}

export default Main;
