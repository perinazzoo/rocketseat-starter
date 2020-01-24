import axios from 'axios';

const api = axios.create({
  baseURL: 'APIURL',
});

export default api;
