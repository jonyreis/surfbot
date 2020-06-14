import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyles />
    </Router>
  );
}

export default App;
