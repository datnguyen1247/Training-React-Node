/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "../services";
import { ICustomize } from "../types";


const customizationApi = {
    
    async save(data:ICustomize): Promise<any> {
        return await axiosClient.put('/customization',data);
    },
    async get(): Promise<any> {
        return await axiosClient.get('/customization');
    },
};
export default customizationApi;
