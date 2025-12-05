import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/*  REQUEST INTERCEPTOR (Attach Token) */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // when you add auth later

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*  RESPONSE INTERCEPTOR (Global Error Handler) */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('API Error:', {
        status: error.response.status,
        data: error.response.data,
      });

      if (error.response.status === 401) {
        console.warn('Unauthorized! Token expired.');
        // optional: logout user here later
      }
    } else if (error.request) {
      console.error('No response from server:', error.request);
    } else {
      console.error('Axios config error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
