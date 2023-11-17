import {useSelector} from "react-redux";
import useStatusesSelectors from "./statuses";
import usePagesSelectors from "./pages";
import useAuthSelectors from "./auth";
import useDashboardSelectors from "./dashboard";

const useSelectors = () => {
    return {
        useSelector,
        useAuthSelectors,
        useDashboardSelectors,
        useStatusesSelectors,
        usePagesSelectors
    };
}


export default useSelectors;