import axios from 'axios';

export const login = async (username, password) => {
    await axios.post('/api/login', { username, password });
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
