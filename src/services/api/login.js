import axios from 'axios';

export const login = async (username, password) => {
    await axios.post('/api/login', { username, password });
};
