import React from "react";
// Logos
import logoING3NIO from "../assets/images/ING3NIO B_Negativo Blanco.png";
import logoFacebook from "../assets/images/facebook.png";
import logoInstagram from "../assets/images/instagram.png";
import logoSpotify from "../assets/images/spotify.png";
import logoYoutube from "../assets/images/youtube.png";

const Footer = () => {
  return (
    <footer className="container-blue">
      <a className="navbar-brand" href="#main">
        <img
          id="logo-ING3NIO"
          src={logoING3NIO}
          alt="Logo ING3NIO"
          height={60}
        />
      </a>
      <div className="logos logos-negativo">
        <a href="https://www.facebook.com/ING3NIOPodcast/">
          <img
            src={logoFacebook}
            alt="Logo facebook"
            height={30}
          />
        </a>
        <a href="https://www.instagram.com/ing3nio_/">
          <img
            src={logoInstagram}
            alt="Logo instagram"
            height={30}
          />
        </a>
        <a href="https://open.spotify.com/show/0KQnxN7GAIGYOR2DlYbkbd?si=6b6427383def4f73">
          <img src={logoSpotify} alt="Logo spotify" height={30} />
        </a>
        <a href="https://bit.ly/YTubeING3NIO">
          <img src={logoYoutube} alt="Logo youtube" height={30} />
        </a>
      </div>
      <p>2022, ING3NIO.com.mx. Creado por: Alexis Antonio Castillo Pimienta.</p>
    </footer>
  );
};

export default Footer;
