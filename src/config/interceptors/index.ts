import React from "react";
import axios from "axios";
/** Interfaces & Types */
import {Auth} from "models/interfaces/auth.interfaces.ts";

const useInterceptors = () => {
    /** Variables */
    const redux = JSON.parse(localStorage.getItem('persist:root')!);
    const auth: Auth = JSON.parse(redux.auth);
    const token: string = auth.token;

    const handleFailedResponse = (error: any) => {
        if (error.response) {
            const { status } = error.response;

            if (status === 401) {
                const redux = JSON.parse(localStorage.getItem('persist:root')!);
                redux.auth = JSON.stringify({auth: {token: "", user: {}}})
                localStorage.setItem('persist:root', JSON.stringify(redux));
                window.location.href = '/auth/login';
            }
        }
    }

    React.useEffect(() => {
        axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        axios.interceptors.response.use((response) => response, handleFailedResponse);
    }, [])
}


export default useInterceptors;