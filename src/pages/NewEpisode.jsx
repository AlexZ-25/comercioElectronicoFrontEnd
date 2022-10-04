import React, { useState, useContext } from "react";
import EpisodeContext from "../context/EpisodeContext";

const initForm = {
  Id: "",
  Nombre: "",
  URL: "",
};

const NewEpisode = () => {
  const [form, setForm] = useState(initForm);
  const { crearEpisode } = useContext(EpisodeContext);
  
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(form);
    await crearEpisode(form);
    alert(`El episodio "${form.Nombre}" se ha agregado exitosamente.`);
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className="row pt-5">
        <article className="col d-flex justify-content-center align-items-center">
          <form className="w-90" onSubmit={handleForm}>
            <div className="mb-3">
              <h1 className="mx-auto">Agrega un nuevo episodio a la base de datos</h1>
              <label htmlFor="inputId" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                id="inputId"
                name="Id"
                value={form.Id}
                onChange={cambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputNombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                name="Nombre"
                className="form-control"
                id="inputNombre"
                value={form.Nombre}
                onChange={cambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputURL" className="form-label">
                URL
              </label>
              <input
                type="text"
                name="URL"
                className="form-control"
                id="inputURL"
                value={form.URL}
                onChange={cambio}
              />
            </div>
            <div className="mb-3 text-end">
              <button
                type="submit"
                className="btn btn-success"
                // disabled={auth.loading}
              >
                Agregar
              </button>
            </div>
          </form>
        </article>
      </main>
    </>
  );
};

export default NewEpisode;
