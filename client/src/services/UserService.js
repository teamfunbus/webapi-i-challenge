import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getUsers() {
    return apiClient.get('/api/users');
  },
  getUser(id) {
    return apiClient.get(`/api/users/${id}`);
  },
  createUser(user) {
    return apiClient.post('/api/users', user);
  },
};
