import React from "react";
import AppRouter from './router/AppRouter';
import { AuthProvider } from "./context/AuthContext"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/styles/style.css";
import EpisodeState from "./context/EpisodeState";

function App() {
  return (
    <AuthProvider>
      <EpisodeState>
        <AppRouter />
      </EpisodeState>
    </AuthProvider>
  );
}

export default App;
