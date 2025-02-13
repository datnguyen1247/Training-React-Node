/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "../services";


const shopApi = {
    
    async getOne(shopId:number): Promise<any> {
        return await axiosClient.get(`/shop/${shopId}`);
    },
};
export default shopApi;
