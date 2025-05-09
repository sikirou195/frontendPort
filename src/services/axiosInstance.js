// src/services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backendport-tsol.onrender.com', // Juste le domaine du backend
  timeout: 5000,
});

export default axiosInstance;
