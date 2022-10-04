import axios from 'axios';

const URL = 'https://comercio-electronico.onrender.com/episodes'

const CONFIG = {
    headers: {
        'auth-token': localStorage.getItem('token1')
    }
}

export const obtenerEpisodesService = async () => {
    const resp = await axios.get(`${URL}`)
    return resp.data;
}

export const crearEpisodeService = async (form) => {
    const resp = await axios.post(`${URL}`,
        form, CONFIG)
    return resp.data;
}

export const eliminarEpisodeService = async (id) => {
    const resp = await axios.delete(
        `${URL}/${id}`,
        CONFIG
    );
    return resp.data;
};

export const obtenerEpisodeService = async (id) => {
    const resp = await axios.get(`${URL}/${id}`);
    return resp.data
}

export const actualizarEpisodeService = async (id, form) => {
    const resp = await axios.put(`${URL}/${id}`,
        form, CONFIG);
    return resp.data
}