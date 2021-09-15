import axios from 'axios';
const host = 'https://l8-upgrade-apis.vercel.app';

export const login = (username, password) => {
    const result = axios
        .post(`${host}/api/login`, { username, password })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        });
    return result;
};

export const authentication = () => {
    let token = sessionStorage.getItem('token');
    return axios.get(`${host}/api/user`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const isLogin = () => {
    if (sessionStorage.getItem('token')) return true;
    return false;
};
