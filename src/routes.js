import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/surfbot/" element={<Home />} />
      <Route path="/surfbot/cart" element={<Cart />} />
    </Routes>
  );
}

export default MainRoutes;
