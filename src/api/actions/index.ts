import {useDispatch} from "react-redux";
import useStatusesActions from "./statuses";
import usePagesActions from "./pages";
import useTeamActions from "./team";
import useAuthActions from "./auth";
import useDashboardActions from "./dashboard";
import useUsersActions from "./users";

const useActions = () => {
    /** Variables */
    const dispatch: any = useDispatch();

    return {
        dispatch,
        useAuthActions,
        useDashboardActions,
        useUsersActions,
        useStatusesActions,
        usePagesActions,
        useTeamActions
    };
}


export default useActions;