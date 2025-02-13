/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "../services";
import { ICustomize } from "../types";


const customizationApi = {
    
    async save(data:ICustomize): Promise<any> {
        return await axiosClient.put('/customization',data);
    },
};
export default customizationApi;
