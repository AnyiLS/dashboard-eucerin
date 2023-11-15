import {useDispatch} from "react-redux";
import useStatusesActions from "./statuses";
import usePagesActions from "./pages";
import useTeamActions from "./team";
import useAuthActions from "./auth";

const useActions = () => {
    /** Variables */
    const dispatch: any = useDispatch();

    return {
        dispatch,
        useAuthActions,
        useStatusesActions,
        usePagesActions,
        useTeamActions
    };
}


export default useActions;