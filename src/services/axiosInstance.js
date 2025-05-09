// src/services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // L'URL de ton backend NestJS
  timeout: 5000, // Timeout des requêtes en millisecondes
});

export default axiosInstance;
