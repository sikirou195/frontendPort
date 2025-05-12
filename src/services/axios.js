// src/services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://victorious-quietude-production.up.railway.app', // URL Railway ici
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
