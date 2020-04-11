import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
  // baseURL: 'http://192.168.0.15:3333',
  // baseURL: 'http://10.1.1.100:3333',
});

export default api;
