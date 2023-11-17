import useApi from "api";
/** Interfaces & Types */
import {Dispatch, AnyAction} from "redux";
import { Request } from "models/interfaces/create-reducer.interfaces";

const useDashboardActions = () => {
    /** Providers */
    const {useProviders} = useApi();
    const {useDashboardProviders} = useProviders();
    const {dashboard_info} = useDashboardProviders();

    const actDashboardInfo = (request: Request) => {
        return async (dispatch: Dispatch) => {
            const {onError, onSuccess} = request;

            try {
                const res = await dashboard_info();

                dispatch({
                    type: "SET_DASHBOARD",
                    payload: res.data.data
                })

                const redux = JSON.parse(localStorage.getItem("persist:root")!);
                redux.dashboard = JSON.stringify({dashboard: res.data.data});
                localStorage.setItem('persist:root', JSON.stringify(redux));

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    return {
        actDashboardInfo,
    };
}

export default useDashboardActions;