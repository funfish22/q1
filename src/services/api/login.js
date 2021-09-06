import axios from 'axios';

export const login = (username, password) => {
    const result = axios
        .post('/api/login', { username, password })
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
        .get('/api/authentication', {
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
