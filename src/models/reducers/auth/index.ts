import useHelpers from "helpers";
import useTypes from "types";
/** Interfaces & Types */
import {Action, States} from "../../interfaces/create-reducer.interfaces";
import {Auth} from "models/interfaces/auth.interfaces";

/**
 * Provides authentication-related reducers for use in Redux.
 *
 * @property {Function} auth - Reducer function for handling authentication state changes.
 */
const useAuthReducers = () => {
    /** Helpers */
    const {useCreateReducer} = useHelpers();
    const {createReducer} = useCreateReducer();

    /** Types */
    const {useAuthTypes} = useTypes();
    const {LOGIN} = useAuthTypes();

    /**
     * Reducer function for handling authentication state changes.
     *
     * @param {States} state - The current state of the authentication.
     * @param {Action<Auth>} action - The action object representing a change in authentication state.
     * @returns {Object} The new state after applying the authentication-related action.
     */
    const auth = createReducer({auth: {token: '', user: {}}}, {
       [LOGIN](state: States, action: Action<Auth>) {
           return {
               ...state,
               auth: action.payload
           }
       }
    });

    return {
        auth
    };
}

export default useAuthReducers;