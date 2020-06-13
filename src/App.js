import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Header from "./components/Header";

import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
