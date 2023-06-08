import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const post = content => {
  const sendData = { content };
  return instance.post('/tasks', sendData, { headers: { 'Content-Type': 'application/json' } });
};

export const get = () => instance.get('/tasks');