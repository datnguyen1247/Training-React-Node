/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "../services";
import { IResponseLogin } from "../types";


const authApi = { 
    async fakeLogin(data:any): Promise<IResponseLogin> {
        return await axiosClient.post('/login',data);
    },
};
export default authApi;
