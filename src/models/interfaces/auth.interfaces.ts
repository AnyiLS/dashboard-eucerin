import {Request} from './create-reducer.interfaces'

export interface Login {
    email: string;
    password: string;
}

export interface ValidateCode extends Login {
    code: string;
}

export interface User {
    uid: string;
    name: string;
    email: string;
    position: string;
    course: number;
    attempts: number;
}

export interface Auth {
    token: string;
    user: User;
}

export interface LoginRequest extends Request {
    data: Login;
}

export interface ValidateCodeRequest extends Request {
    data: ValidateCode;
}

export type AuthState = {
    auth: Auth;
}