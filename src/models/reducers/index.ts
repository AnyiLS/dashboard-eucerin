import { combineReducers } from "redux";
import useStatusesReducers from "./statuses";
import usePagesReducers from "./pages";

const useReducers = () => {
    /** Reducers */
    const statusesReducers = useStatusesReducers();
    const pagesReducers = usePagesReducers();

    return combineReducers({
        ...statusesReducers,
        ...pagesReducers
    });
}

export default useReducers;