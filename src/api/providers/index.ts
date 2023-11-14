import usePagesProviders from "./pages";
import useStatusesProviders from "./statuses";
import useTeamsProviders from "./team";

const useProviders = () => {
    return {
        useStatusesProviders,
        usePagesProviders,
        useTeamsProviders
    };
}


export default useProviders;