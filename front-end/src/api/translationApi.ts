/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "../services";
import ITranslation, { ITranslationResponse } from "../types";


const translationApi = {
    
    async getAll(): Promise<{data:ITranslation[]}> {
        return await axiosClient.get('/translation');
    },
    async getOne(locale:string): Promise<{data:ITranslation}> {
        return await axiosClient.get(`/translation/${locale}`);
    },
    async add(data:ITranslation): Promise<ITranslationResponse> {
        return await axiosClient.post('/translation',data);
    },
    async update(data:any): Promise<any> {
        return await axiosClient.post(`/translation/${data.id}`,data);
    },
    async delete(locale:string): Promise<any> {
        return await axiosClient.delete(`/translation/${locale}`);
    },
};
export default translationApi;
