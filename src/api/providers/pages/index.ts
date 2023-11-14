import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";
/** Interfaces & Types */
import type {StatusData} from "models/interfaces/statuses.interfaces.ts";
import type {CreatePageData, EditPageData} from "models/interfaces/pages.interfaces";

const usePagesProviders = () => {
    const getPages = (): Promise<AxiosResponse> => {
        const request = () => {
            return axios.get(`/admin/pages/get-pages`);
        }

        return trackPromise(request());
    }

    const createPages = (data: CreatePageData): Promise<AxiosResponse> => {
        const request = () => {
            return axios.post(`/admin/pages/create-page`, data);
        }

        return trackPromise(request());
    }

    const editPages = (data: EditPageData): Promise<AxiosResponse> => {
        const request = () => {
            return axios.put(`/admin/pages/edit-page`, data);
        }

        return trackPromise(request());
    }

    const changeStatusPage = (id: number): Promise<AxiosResponse> => {
        const request = () => {
            return axios.put(`/admin/pages/change-status/${id}`);
        }

        return trackPromise(request());
    }


    return {
        getPages,
        createPages,
        editPages,
        changeStatusPage
    };
}

export default usePagesProviders;