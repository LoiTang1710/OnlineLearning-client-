export {default as Login } from './pages/Login.tsx'
export {default as Register } from './pages/Register.tsx'
export {AuthApi as AuthService} from './services/auth.api.ts'
export type {
  RegisterPayload,
  LoginPayload,
  UserType,
  LoginResponse,
} from "./types/auth.type.ts";