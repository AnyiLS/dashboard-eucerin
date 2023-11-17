import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";
/** Interfaces & Types */
import {Response} from 'models/interfaces/responses.interfaces';

const useDashboardProviders = () => {
    const dashboard_info = (): Promise<AxiosResponse<Response>> => {
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.get('/admin/dashboard/get-dashboard-info');
        }

        return trackPromise(request());
    }
    return {
        dashboard_info,
    };
}

export default useDashboardProviders;