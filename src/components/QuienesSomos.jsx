import React from "react";
import videoPresentacion from '../assets/videos/animacionING3NIO.mp4';
import fotoAlexis from '../assets/images/alexis-castillo.jpg';
import fotoAngel from '../assets/images/angel-castillo.jfif'
import logoInstagram from "../assets/images/instagram.png";
import logoLinkedIn from '../assets/images/linkedin (1).png';

const QuienesSomos = () => {
  return (
    <section className="container-blue" id="quienes-somos">
      <div className="title">
        <div className="linea" />
        <h1>Quiénes somos</h1>
        <div className="linea" />
      </div>
      <video src={videoPresentacion} width="320" height="240" controls="controls" autoplay="true" muted="true"/>
      <div className="contactos">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={fotoAlexis}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              <b>Alexis Castillo</b>
              <br />
              Co-Host
            </p>
            <div className="logos-negativo">
              <a href="https://www.instagram.com/alexiscast/" target="_blank">
                <img
                  src={logoInstagram}
                  alt="Logo Instagram"
                  height={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alexiscastillo25/"
                target="_blank"
              >
                <img
                  src={logoLinkedIn}
                  alt="Logo LinkedIn"
                  height={30}
                />
              </a>
            </div>
            <p />
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={fotoAngel}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              <b>Angel Castillo</b>
              <br />
              Co-Host
            </p>
            <div className="logos-negativo">
              <a
                href="https://www.instagram.com/angel_en_tenochtitlan/"
                target="_blank"
              >
                <img
                  src={logoInstagram}
                  alt="Logo Instagram"
                  height={30}
                />
              </a>
              <a href="https://www.linkedin.com/in/ingangelco/" target="_blank">
                <img
                  src={logoLinkedIn}
                  alt="Logo LinkedIn"
                  height={30}
                />
              </a>
            </div>
            <p />
          </div>
        </div>
      </div>
      <div className="texto-presentacion2">
        <p1>
          ING3NIO es un espacio donde Ángel y Alexis conversan sobre temas de
          innovación y tecnología aplicados en diferentes áreas organizacionales
          con un enfoque en mejora continua e ingeniería de procesos, mostrando
          así que la aplicación de ambas va más allá de la manufactura.
        </p1>
      </div>
    </section>
  );
};

export default QuienesSomos;
