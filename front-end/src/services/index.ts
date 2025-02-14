/* eslint-disable no-extra-boolean-cast */
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
});


axiosClient.interceptors.request.use(
    function (config) {
        if(localStorage.getItem('token')){
            const token = JSON.parse(localStorage.getItem('token') || '')
            config.headers.Authorization = `Bearer ${token}`
        }
        if(localStorage.getItem('shop')){
            const shop = JSON.parse(localStorage.getItem('shop') || '')
            config.headers.shopify_domain = shop.shopify_domain
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