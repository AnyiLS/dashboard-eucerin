import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useTeamsProviders = () => {
    const getInactiveUsers = () => {
        const request = async () => {
            return axios.get('/admin/get-inactive-users')
        }

        return trackPromise(request());
    }

    const activeUsers = (id: number) => {
        const request = async () => {
            return axios.get(`/auth/active-user/${id}`)
        }

        return trackPromise(request());
    }

    const getActiveUsers = (id: number) => {
        const request = async () => {
            return axios.get(`/admin/get-active-users`)
        }

        return trackPromise(request());
    }

    const getUsersByLevel = (id: number) => {
        const request = async () => {
            return axios.get(`/admin/get-users-level/${id}`)
        }

        return trackPromise(request());
    }

    const activeNextLevel = (id: number) => {
        const request = async () => {
            return axios.post(`/admin/active-next-level/${id}`)
        }

        return trackPromise(request());
    }

    const getScores = (id: number) => {
        const request = async () => {
            return axios.get(`/admin/get-scores/${id}`)
        }

        return trackPromise(request());
    }

    const login = (data: any) => {
        const request = async () => {
            return axios.post(`/auth/login-admin`, data)
        }

        return trackPromise(request());
    }

    return {
        getInactiveUsers,
        activeUsers,
        getActiveUsers,
        getUsersByLevel,
        activeNextLevel,
        getScores,
        login
    };
}

export default useTeamsProviders;