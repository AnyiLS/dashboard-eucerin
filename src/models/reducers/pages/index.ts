/** Local Modules */
import useHelpers from "helpers";
import useTypes from "types";
/** Interfaces & Types */
import type {Action, States} from "models/interfaces/create-reducer.interfaces";
import type {Status} from "models/interfaces/statuses.interfaces";

const usePagesReducers = () => {
    /** Helpers */
    const {useCreateReducer} = useHelpers();
    const {createReducer} = useCreateReducer();

    /** Types */
    const {usePagesTypes} = useTypes();
    const {GET_PAGES}= usePagesTypes();

    const pages = createReducer({pages: []}, {
        [GET_PAGES](states: States, action: Action<Status[]>) {
            return {
                ...states,
                pages: action.payload
            }
        }
    });

    const auth = createReducer({auth: []}, {
        ["LOGIN"](states: States, action: Action<Status[]>) {
            return {
                ...states,
                auth: action.payload
            }
        }
    });

    return {
        pages,
        auth
    };
}


export default usePagesReducers;