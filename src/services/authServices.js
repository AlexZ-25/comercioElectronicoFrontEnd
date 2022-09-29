import axios from "axios";

const URL_ROOT = "https://comercio-electronico.onrender.com/users";

const CONFIG = {
    headers: {
        'auth-token': localStorage.getItem('token1')
    }
}

export const loginService = async (form) => {
    const resp = await axios.post(`${URL_ROOT}/login`,
        form);
    return resp.data;
}

export const signupService = async (form) => {
    const resp = await axios.post(`${URL_ROOT}`,
        form);
    return resp.data;
}

export const verifyingTokenService = async () => {
    console.log('corriendo verifyingTokenService')
    const resp = await axios.get(`${URL_ROOT}/auth`, CONFIG);
    return resp.data;
}