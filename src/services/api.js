import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5d9695a9a824b400141d2777.mockapi.io/api/v1',
});

export default api;
