import axios from "axios";
import type { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from "../types/auth.type.ts";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true
});

export const AuthApi = {
    login: async(data: LoginPayload): Promise<LoginResponse> => {
        const response = await api.post('/login',data)
        return response.data
    },
    register: async(data: RegisterPayload): Promise<RegisterResponse> => {
        const response = await api.post('/register', data)
        return response.data
    }
}