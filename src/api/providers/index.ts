import usePagesProviders from "./pages";
import useStatusesProviders from "./statuses";
import useTeamsProviders from "./team";
import useAuthProviders from "./auth";

const useProviders = () => {
    return {
        useAuthProviders,
        useStatusesProviders,
        usePagesProviders,
        useTeamsProviders
    };
}


export default useProviders;