import React, { useReducer, useCallback } from "react";
import EpisodeContext from "./EpisodeContext";
import EpisodeReducer from "./EpisodeReducer";
import {
  actualizarEpisodeService,
  crearEpisodeService,
  eliminarEpisodeService,
  obtenerEpisodeService,
  obtenerEpisodesService,
} from "../services/episodes";

const initialState = {
  episodes: [],
  episode: {},
  cart: [],
};

const EpisodeState = ({ children }) => {
  const [globalState, dispatch] = useReducer(EpisodeReducer, initialState);

  const obtenerEpisodes = useCallback(async () => {
    const resp = await obtenerEpisodesService();
    const episodes = resp.data.map((obj) => {
      return {
        Id,
        Nombre,
        URL,
      };
    });

    dispatch({
      type: "OBTENER_EPISODES",
      payload: episodes,
    });
  }, []);

  const crearEpisode = async (form) => {
    await crearEpisodeService(form);
    await obtenerEpisodes();
  };

  const eliminarEpisode = async (id) => {
    await eliminarEpisodeService(id);
    await obtenerEpisodes();
  };

  const obtenerEpisode = useCallback(async (id) => {
    const res = await obtenerEpisodeService(id);
    console.log(res.data);
    const episode = {
      Id,
      Nombre,
      URL,
    };
    dispatch({
      type: "OBTENER_EPISODE",
      payload: episode
    })
  }, []);

  const actualizarEpisode = async (id, form) => {
    await actualizarEpisodeService(id, form);
    await obtenerEpisode(id);
  };

  // const agregarEpisodeCarrito = async (product) => {
  //   const productoEncontrado = globalState.cart.find((cartItem) => cartItem.id === product.id )
  //   if (!productoEncontrado) {
  //     dispatch({
  //       type: "AGREGAR_PRODUCTO_CARRITO",
  //       payload: product
  //     })
  //   } else {
  //     alert('Producto previamente agregado');
  //   }
  // };

  // const eliminarProductoCarrito = (id) => {
  //   // console.log(id);
  //   dispatch({
  //     type: "ELIMINAR_PRODUCTO_CARRITO",
  //     payload: id
  //   })
  // }

  return (
    <EpisodeContext.Provider
      value={{
        episodes: globalState.episodes,
        episode: globalState.episode,
        // cart: globalState.cart,
        obtenerEpisodes,
        crearEpisode,
        eliminarEpisode,
        obtenerEpisode,
        actualizarEpisode,
        // agregarEpisodeCarrito,
        // eliminarEpisodeCarrito,
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};

export default EpisodeState;
