import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const post = content => {
  const sendData = { content };
  return instance.post('/tasks', sendData, { headers: { 'Content-Type': 'application/json' } });
};

export const get = () => instance.get('/tasks');

export const patch = (id, content, isDone) => {
  const sendData = { id, content, isDone };
  return instance.patch('/tasks', sendData, { headers: { 'Content-Type': 'application/json' } });
};

export const deleteOne = id => {
  return instance.delete(`/tasks/${id}`);
};
