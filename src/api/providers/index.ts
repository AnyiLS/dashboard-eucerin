import usePagesProviders from "./pages";
import useStatusesProviders from "./statuses";
import useTeamsProviders from "./team";
import useAuthProviders from "./auth";
import useDashboardProviders from "./dashboard";
import useUsersProviders from "./users";

const useProviders = () => {
    return {
        useAuthProviders,
        useDashboardProviders,
        useUsersProviders,
        useStatusesProviders,
        usePagesProviders,
        useTeamsProviders
    };
}


export default useProviders;