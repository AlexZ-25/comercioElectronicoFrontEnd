import React from "react";
import consultoriaImage from "../assets/images/Consultoria.jpg";
import excelImage from "../assets/images/Excel.jpg";

const Servicios = () => {
  return (
    <section className="container-blue" id="servicios">
      <div className="title">
        <div className="linea" />
        <h1>Servicios</h1>
        <div className="linea" />
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={excelImage}
              className="d-block w-100"
              alt="Cursos de Excel"
            />
            <div className="carousel-caption">
              <h1>
                <b>Cursos de Excel</b>
              </h1>
              {/* <p>first slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={consultoriaImage}
              className="d-block w-100"
              alt="Consultoría de Procesos"
            />
            <div className="carousel-caption">
              <h1>
                <b>Consultoría de Procesos</b>
              </h1>
              {/* <p> slide.</p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Servicios;
