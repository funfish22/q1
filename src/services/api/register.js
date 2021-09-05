import axios from 'axios';

export const register = async (username, password) => {
    return await axios.post('/api/register', { username, password });
};
