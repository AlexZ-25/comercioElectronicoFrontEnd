import React from "react";
import AppRouter from './router/AppRouter';
import { AuthProvider } from "./context/AuthContext"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/styles/style.css";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
