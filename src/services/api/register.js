import axios from 'axios';

export const register = async (username, password) => {
    console.log('username', username);
    console.log('password', password);
    const response = await axios.post('/api/register', { username, password });
    console.log('response', response);
};
