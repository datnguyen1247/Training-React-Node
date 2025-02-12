import axiosClient from "../services";
import { IResponseLogin } from "../types";


const authApi = {
    
    async fakeLogin(): Promise<IResponseLogin> {
        return await axiosClient.get('/login');
    },
};
export default authApi;
