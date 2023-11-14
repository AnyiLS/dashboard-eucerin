import {useSelector} from "react-redux";
import useStatusesSelectors from "./statuses";
import usePagesSelectors from "./pages";

const useSelectors = () => {
    return {
        useSelector,
        useStatusesSelectors,
        usePagesSelectors
    };
}


export default useSelectors;