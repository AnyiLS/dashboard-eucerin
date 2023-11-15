import useHelpers from "helpers";
/** Interfaces & Types */
import {States} from "models/interfaces/create-reducer.interfaces";
import {AuthState} from "models/interfaces/auth.interfaces";

/**
 * Provides authentication-related selectors for use in Redux.
 *
 * @property {Function} authSelector - Selector function for extracting the authentication state.
 */
const useAuthSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    /**
     * Selector function for extracting the authentication state.
     *
     * @param {States} state - The current state of the application.
     * @returns {Auth} The authentication state.
     */
    const authSelector = createSelector(
        (state: States) => state.auth,
        (auth: AuthState) => auth.auth
    );

    return {
        authSelector,
    };
}

export default useAuthSelectors;