import axios from 'axios';

const api = axios.create({
  baseURL: 'https://toolsetup.onrender.com', // Set your base URL here
  // Add other configuration options if needed (headers, timeout, etc.)
});

export default api;