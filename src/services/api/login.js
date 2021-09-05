import axios from 'axios';

export const login = async (username, password) => {
    await axios.post('/api/login', { username, password });
};

export const authentication = async (token) => {
    await axios
        .get('/api/authentication', {
            headers: {
                AUTHENTICATION_TOKEN: token,
            },
        })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};
