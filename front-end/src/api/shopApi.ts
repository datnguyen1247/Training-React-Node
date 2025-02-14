/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "../services";


const shopApi = {
    
    async getOne({data}:any): Promise<any> {
        return await axiosClient.post(`/shop`,data);
    },
    async save(data:any): Promise<any> {
        return await axiosClient.post(`/shop`,data);
    },
};
export default shopApi;
