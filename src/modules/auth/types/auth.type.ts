export interface UserType {
    user_id: number,
    full_name: string,
    email: string,
    password: string,
}
export interface LoginPayload {
    email: string,
    password: string,
}
export interface RegisterPayload {
    email: string,
    username: string,
    password: string,
    full_name: string
}
export interface LoginResponse {
    message: string,
    accessToken: string,
    user?: UserType
}

export interface RegisterResponse {
    message: string,
}