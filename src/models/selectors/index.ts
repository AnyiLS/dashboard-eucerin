import {useSelector} from "react-redux";
import useStatusesSelectors from "./statuses";
import usePagesSelectors from "./pages";
import useAuthSelectors from "./auth";

const useSelectors = () => {
    return {
        useSelector,
        useAuthSelectors,
        useStatusesSelectors,
        usePagesSelectors
    };
}


export default useSelectors;