import usePagesTypes from "./pages";
import useStatusesTypes from "./statuses";
import useAuthTypes from "./auth";

const useTypes = () => {
    return {
        useAuthTypes,
        useStatusesTypes,
        usePagesTypes
    };
}

export default useTypes;