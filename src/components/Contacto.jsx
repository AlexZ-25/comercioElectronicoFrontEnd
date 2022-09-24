import React from "react";

const Contacto = () => {
  return (
    <article className="container-white" id="contacto">
      <div className="title">
        <div className="linea azul" />
        <h1>Contacto</h1>
        <div className="linea azul" />
      </div>
      <p>
        ¿Tienes alguna propuesta de contenido, te gustaría hacer una
        colaboración en conjunto o te interesa alguno de nuestros servicios?
        <br />
        Conecta con nosotros en:
        <br />
        <a href="mailto:contacto@ing3nio.com.mx">contacto@ing3nio.com.mx</a>
      </p>
    </article>
  );
};

export default Contacto;
