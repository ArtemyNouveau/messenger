import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://messenger-interview.herokuapp.com/'
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    config.headers.Authorization = 'Bearer ' + token;
    return config;
});

export default axiosInstance;
