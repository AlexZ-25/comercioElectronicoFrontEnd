import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Footer from "../components/Footer";
import RutasAdmin from "./RutasAdmin";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";

const AppRouter = () => {
  const { auth, verifyingToken } = useContext(AuthContext);

  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  return (
    <Router>
      {auth.authStatus ? (
        auth.permissions === "admin" ? (
          <RutasAdmin />
        ) : (
          <RutasPrivadas />
        )
      ) : (
        <RutasPublicas />
      )}
      <Footer />
    </Router>
  );
};

export default AppRouter;
