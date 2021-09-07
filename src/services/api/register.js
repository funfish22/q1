import axios from 'axios';

export const register = (username, password) => {
    const result = axios
        .post('/api/register', { username, password })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        });
    return result;
};
