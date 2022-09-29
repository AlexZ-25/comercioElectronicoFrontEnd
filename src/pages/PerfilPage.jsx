import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PerfilPage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <main className="row text-center">
        <article className="col">
          <h1>Hola, {auth.username}</h1>
          <h4>Esta es tu información de usuario:</h4>
          <p><b>Nombre de usuario:</b> {auth.username}</p>
          <p><b>Email:</b> {auth.email}</p>
        </article>
      </main>
    </>
  );
};

export default PerfilPage;
