import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {AuthContext} from "../context/AuthContext"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  const { auth, verifyingToken } = useContext(AuthContext);

  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
