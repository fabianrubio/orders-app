import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
  baseURL: config.api.baseURL,
  auth: {
    username: config.api.username,
    password: config.api.password,
  },
});

export default axiosInstance;
