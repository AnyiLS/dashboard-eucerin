import { combineReducers } from "redux";
import useStatusesReducers from "./statuses";
import usePagesReducers from "./pages";
import useAuthReducers from "./auth";

const useReducers = () => {
    /** Reducers */
    const statusesReducers = useStatusesReducers();
    const pagesReducers = usePagesReducers();
    const authReducers = useAuthReducers();

    return combineReducers({
        ...authReducers,
        ...statusesReducers,
        ...pagesReducers
    });
}

export default useReducers;