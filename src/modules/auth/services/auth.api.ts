import type { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from "../types/auth.type.ts";
import { AxiosApi } from "../../../utils/AxiosApi.ts";


export const AuthApi = {
    login: async(data: LoginPayload): Promise<LoginResponse> => {
        const response = await AxiosApi.post('/login',data)
        return response.data
    },
    register: async(data: RegisterPayload): Promise<RegisterResponse> => {
        const response = await AxiosApi.post('/register', data)
        return response.data
    }
}