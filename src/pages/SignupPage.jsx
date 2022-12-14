import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const initForm = {
  email: "",
  username: "",
  password: "",
};

const SignupPage = () => {
  const [form, setForm] = useState(initForm);
  const { signup } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    await signup(form);

    alert(`Bienvenido ${form.username}. Tu cuenta se ha creado exitosamente.`);
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
          <form className="w-50" onSubmit={handleForm}>
            <div className="mb-3">
              <h1 className="text-center">Crea una cuenta</h1>
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={form.email}
                onChange={cambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                name="username"
                value={form.username}
                onChange={cambio}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputPassword"
                value={form.password}
                onChange={cambio}
              />
            </div>
            <div className="mb-3 text-end">
              <button
                type="submit"
                className="btn btn-success"
                // disabled={auth.loading}
              >
                Registrar
                {/* {auth.loading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Registrar"
                  )} */}
              </button>
            </div>
          </form>
        </article>
      </main>
    </>
  );
};

export default SignupPage;
