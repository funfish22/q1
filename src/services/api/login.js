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

export const authentication = (token) => {
    const result = axios
        .get(`${host}/api/authentication`, {
            headers: {
                AUTHENTICATION_TOKEN: token,
            },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        });
    return result;
};
