import { combineReducers } from "redux";
import useStatusesReducers from "./statuses";
import usePagesReducers from "./pages";
import useAuthReducers from "./auth";
import useDashboardReducers from "./dashboard";

const useReducers = () => {
    /** Reducers */
    const statusesReducers = useStatusesReducers();
    const pagesReducers = usePagesReducers();
    const authReducers = useAuthReducers();
    const dashboardReducers =  useDashboardReducers();

    return combineReducers({
        ...authReducers,
        ...statusesReducers,
        ...pagesReducers,
        ...dashboardReducers
    });
}

export default useReducers;