import { PageState } from "./pages.interfaces.ts";
import {Statuses} from "./statuses.interfaces.ts";
import {AuthState} from "./auth.interfaces";

export type Request = {
    onError?: (error?: any) => void;
    onSuccess?: (data?: any) => void;
}

export type States = {
    auth: AuthState;
    statuses: Statuses;
    pages: PageState;
}

export type Action<T> = {
    type: string;
    payload: T;
}