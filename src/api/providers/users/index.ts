import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";
/** Interfaces & Types */
import {Response} from 'models/interfaces/responses.interfaces';

const useUsersProviders = () => {
    const get_certifications = (course: string): Promise<AxiosResponse<Response>> => {
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.get(`/admin/users/get-certifications/${course}`);
        }

        return trackPromise(request());
    }

    const get_quizzes = (course: string): Promise<AxiosResponse<Response>> => {
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.get(`/admin/users/get-quizzes/${course}`);
        }

        return trackPromise(request());
    }

    const get_courses = (): Promise<AxiosResponse<Response>> => {
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.get(`/admin/users/get-courses`);
        }

        return trackPromise(request());
    }

    const get_users = (course: number): Promise<AxiosResponse<Response>> => {
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.get(`/admin/users/get-users/${course}`);
        }

        return trackPromise(request());
    }

    const get_inactive_users = (course: string) => {
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.get(`/admin/users/get-inactive-users/${course}`);
        }

        return trackPromise(request());
    }

    const active_user = (id: string) => {
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.post(`/admin/users/active-users`, {id});
        }

        return trackPromise(request());
    }

    return {
        get_certifications,
        get_quizzes,
        get_courses,
        get_users,
        get_inactive_users,
        active_user
    };
}

export default useUsersProviders;