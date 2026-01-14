export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: string;
        username: string;
    };
}

export interface RegisterRequest {
    username: string;
    password: string;
}

export interface RegisterResponse {
    message: string;
}

export interface AuthUser {
    id: string;
    username: string;
}

export interface User {
    id: string;
    username: string;
}