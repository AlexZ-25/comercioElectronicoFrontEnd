import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NavBarPrivado from "../components/NavBarPrivado";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import PerfilPage from "../pages/PerfilPage";

const RutasPrivadas = () => {

  return (
    <>
      <NavBarPrivado />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RutasPrivadas;
