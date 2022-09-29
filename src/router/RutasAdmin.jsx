import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NavBarAdmin from "../components/NavBarAdmin";
import HomePage from "../pages/HomePage";
import NewEpisode from "../pages/NewEpisode";
import PerfilPage from "../pages/PerfilPage";

const RutasAdmin = () => {

  return (
    <>
      <NavBarAdmin />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/nuevoepisodio" element={<NewEpisode />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RutasAdmin;
