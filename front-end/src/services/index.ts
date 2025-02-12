import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
});


axiosClient.interceptors.request.use(
    function (config) {
        const token = JSON.parse(localStorage.getItem('token') || '')
        if(token){
            config.headers.Authorization = `${token}`
        }
        
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);
axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default axiosClient