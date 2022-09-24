import React from "react";
import logoSpotifyING3NIO from "../assets/images/Logo Spotify.png";

const Jumbotron = () => {
  return (
    <main>
      <div className="container-main" id="main">
        <img
          src={logoSpotifyING3NIO}
          alt="Logo Spotify"
          className="responsive"
        />
        <div className="texto-presentacion">
          <p>Bienvenido a ING3NIO</p>
        </div>
      </div>
    </main>
  );
};

export default Jumbotron;
