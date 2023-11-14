import usePagesTypes from "./pages";
import useStatusesTypes from "./statuses";

const useTypes = () => {
    return {
        useStatusesTypes,
        usePagesTypes
    };
}

export default useTypes;