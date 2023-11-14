import {useDispatch} from "react-redux";
import useStatusesActions from "./statuses";
import usePagesActions from "./pages";
import useTeamActions from "./team";

const useActions = () => {
    /** Variables */
    const dispatch: any = useDispatch();

    return {
        dispatch,
        useStatusesActions,
        usePagesActions,
        useTeamActions
    };
}


export default useActions;