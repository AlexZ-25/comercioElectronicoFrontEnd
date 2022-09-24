import React from "react";
import logoGooglePodcast from "../assets/images/google-podcasts.png";
import logoYoutube from "../assets/images/youtube-red.png";
import logoSpotify from "../assets/images/spotify-green.png";
import logoAnchor from "../assets/images/anchor.png";
import logoApplePodcasts from "../assets/images/apple-podcasts.png";
import logoAmazonMusic from "../assets/images/Amazon_Music_logo.png";

const Episodios = () => {
  return (
    <section className="container-white" id="episodios">
      <div className="title">
        <div className="linea azul" />
        <h1>Episodios Podcast</h1>
        <div className="linea azul" />
      </div>
      <h3>Episodio más reciente</h3>
      <iframe
        id="actual"
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/show/0KQnxN7GAIGYOR2DlYbkbd?utm_source=generator&theme=0"
        width="95%"
        height={232}
        frameBorder={0}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
      <h3>Todos los episodios</h3>
      <div className="panel-episodios">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Temporada 2
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="list-group">
                <a
                  onclick="repSp(this.id)"
                  id="T2E9"
                  className="list-group-item list-group-item-action"
                >
                  Emprendimiento y Mejora Continua en Hospitales con Gustavo
                  Fernández
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E8"
                  className="list-group-item list-group-item-action"
                >
                  La Adopción de Modelos Híbridos y la Importancia del “Lado
                  Humano” del Empleo
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E7"
                  className="list-group-item list-group-item-action"
                >
                  Hablemos de Blockchain con Blockchain Culture
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E6"
                  className="list-group-item list-group-item-action"
                >
                  Hablemos de RPA (Automatización Robótica de Procesos)
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E5"
                  className="list-group-item list-group-item-action"
                >
                  Logística y Cadena de Suministro con Lucy González
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E4"
                  className="list-group-item list-group-item-action"
                >
                  Todos Debemos de Aprender a Programar
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E3"
                  className="list-group-item list-group-item-action"
                >
                  Control de Almacén Vs Control de Inventario
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E2"
                  className="list-group-item list-group-item-action"
                >
                  Estudiar o No Una Maestría
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T2E1"
                  className="list-group-item list-group-item-action"
                >
                  Capital Humano: Tendencias y Mejora Continua
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Temporada 1
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="list-group">
                <a
                  onclick="repSp(this.id)"
                  id="T1E20"
                  className="list-group-item list-group-item-action"
                >
                  4 Libros de Mejora Continua [Final de Temporada]
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E19"
                  className="list-group-item list-group-item-action"
                >
                  Inteligencia Artificial
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E18"
                  className="list-group-item list-group-item-action"
                >
                  Los 8 Desperdicios
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E17"
                  className="list-group-item list-group-item-action"
                >
                  Tips para Conseguir tu Primer Empleo
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E16"
                  className="list-group-item list-group-item-action"
                >
                  Administración de Inventario
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E15"
                  className="list-group-item list-group-item-action"
                >
                  Las 7 Herramientas Básicas de Calidad
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E14"
                  className="list-group-item list-group-item-action"
                >
                  Logística y Cadena de Suministro
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E13"
                  className="list-group-item list-group-item-action"
                >
                  Liderazgo y Mejora Continua
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E12"
                  className="list-group-item list-group-item-action"
                >
                  Finanzas Personales / Empresariales y Mejora Continua
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E11"
                  className="list-group-item list-group-item-action"
                >
                  ¿El límite de la Mejora Continua? (Costo-Tiempo-Calidad)
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E10"
                  className="list-group-item list-group-item-action"
                >
                  Indicadores de Desempeño (KPI's)
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E9"
                  className="list-group-item list-group-item-action"
                >
                  Hablemos de Industria 4.0
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E8"
                  className="list-group-item list-group-item-action"
                >
                  DMAIC - Control
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E7"
                  className="list-group-item list-group-item-action"
                >
                  DMAIC - Mejora
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E6"
                  className="list-group-item list-group-item-action"
                >
                  DMAIC - Analizar
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E5"
                  className="list-group-item list-group-item-action"
                >
                  DMAIC - Medir
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E4"
                  className="list-group-item list-group-item-action"
                >
                  DMAIC - Definir
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E3"
                  className="list-group-item list-group-item-action"
                >
                  ¿Profesionales de la Comunicación e Ing. de Procesos?
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E2"
                  className="list-group-item list-group-item-action"
                >
                  El Proceso de Salir de tu Zona de Confort
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E1"
                  className="list-group-item list-group-item-action"
                >
                  Ingeniería de Procesos
                </a>
                <a
                  onclick="repSp(this.id)"
                  id="T1E0"
                  className="list-group-item list-group-item-action"
                >
                  Piloto
                </a>
              </div>
            </div>
          </div>
        </div>
        <iframe
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/episode/4qA0xgjcyVgO9hhk6JHUh8?utm_source=generator&theme=0"
          width="95%"
          height={232}
          frameBorder={0}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
      <h3>Estamos en las siguientes plataformas:</h3>
      <div className="plataformas">
        <div className="youtube responsive2">
          <div>
            <a href="https://bit.ly/YTubeING3NIO">
              <img
                src={logoYoutube}
                alt="Logo Youtube rojo"
                height={60}
              />
            </a>
          </div>
          <div>
            <h7>Youtube</h7>
          </div>
        </div>
        <div className="spotify responsive2">
          <div>
            <a href="https://open.spotify.com/show/0KQnxN7GAIGYOR2DlYbkbd">
              <img
                src={logoSpotify}
                alt="Logo Spotify verde"
                height={60}
              />
            </a>
          </div>
          <h7>Spotify</h7>
        </div>
        <div className="anchor responsive2">
          <div>
            <a href="https://anchor.fm/ing3nio">
              <img
                src={logoAnchor}
                alt="Logo Anchor"
                height={60}
              />
            </a>
          </div>
          <h7>Anchor</h7>
        </div>
        <div className="apple responsive2">
          <div>
            <a href="https://podcasts.apple.com/us/podcast/ing3nio/id1624158199">
              <img
                src={logoApplePodcasts}
                alt="Logo Apple Podcasts"
                height={60}
              />
            </a>
          </div>
          <h7>
            Apple
            <br />
            Podcasts
          </h7>
        </div>
        <div className="amazon responsive2">
          <div>
            <a href="https://music.amazon.com.mx/podcasts/f19f0315-707e-4cf7-a8e4-315bebdde357/ing3nio">
              <img
                src={logoAmazonMusic}
                alt="Logo Amazon Music"
                height={60}
              />
            </a>
          </div>
          <h7>
            Amazon
            <br />
            Music
          </h7>
        </div>
        <div className="google responsive2">
          <div>
            <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZmYxYjI2OC9wb2RjYXN0L3Jzcw==">
              <img
                src={logoGooglePodcast}
                alt="Logo Google Podcasts"
                height={60}
              />
            </a>
          </div>
          <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZmYxYjI2OC9wb2RjYXN0L3Jzcw=="></a>
          <h7>
            Google
            <br />
            Podcasts
          </h7>
        </div>
      </div>
    </section>
  );
};

export default Episodios;
