import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.36.220:3000/'
})

export default api;