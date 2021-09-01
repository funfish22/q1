import axios from 'axios';

export const register = async (username, password) => {
    await axios.post('/api/register', { username, password });
};
