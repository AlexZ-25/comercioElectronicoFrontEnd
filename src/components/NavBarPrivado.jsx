import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import logoING3NIO from "../assets/images/INGENIO B - Horizontal.png";
import logoFacebook from "../assets/images/facebook.png";
import logoInstagram from "../assets/images/instagram.png";
import logoSpotify from "../assets/images/spotify.png";
import logoYoutube from "../assets/images/youtube.png";

const NavBar = () => {
  const { auth, logout } = useContext(AuthContext);
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              id="logo-ING3NIO"
              src={logoING3NIO}
              alt="Logo ING3NIO"
              height={60}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/#quienes-somos"
                >
                  Quiénes somos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="#episodios"
                >
                  Episodios Podcast
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/servicios"
                >
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/#contacto"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
            <span className="logos">
              <a href="https://www.facebook.com/ING3NIOPodcast/">
                <img src={logoFacebook} alt="Logo facebook" height={30} />
              </a>
              <a href="https://www.instagram.com/ing3nio_/">
                <img src={logoInstagram} alt="Logo instagram" height={30} />
              </a>
              <a href="https://open.spotify.com/show/0KQnxN7GAIGYOR2DlYbkbd?si=6b6427383def4f73">
                <img src={logoSpotify} alt="Logo spotify" height={30} />
              </a>
              <a href="https://bit.ly/YTubeING3NIO">
                <img src={logoYoutube} alt="Logo youtube" height={30} />
              </a>
            </span>
            <div className="">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {!auth.username ? "Mi cuenta" : auth.username}
                    {/* Mi cuenta */}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "dropdown-item active" : "dropdown-item"
                        }
                        aria-current="page"
                        to="/perfil"
                      >
                        Mi cuenta
                      </NavLink>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <button className="dropdown-item" onClick={logout}>Cerrar sesión</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
