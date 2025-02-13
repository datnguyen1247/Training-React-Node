/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "../services";


const shopApi = {
    
    async getOne(): Promise<any> {
        return await axiosClient.get('/shop');
    },
};
export default shopApi;
