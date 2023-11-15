import useApi from "api";
import useTypes from "types";
/** Interfaces & Types */
import {LoginRequest, ValidateCodeRequest} from "models/interfaces/auth.interfaces.ts";
import {Dispatch, AnyAction} from "redux";

/**
 * Provides authentication-related actions for use in Redux.
 *
 * @returns {Object} An object with authentication-related action functions.
 * @property {Function} actLogin - Action function for initiating a login request.
 * @property {Function} actValidateCode - Action function for validating an authentication code.
 */
const useAuthActions = () => {
    /** Providers */
    const {useProviders} = useApi();
    const {useAuthProviders} = useProviders();
    const {login, validate_code} = useAuthProviders();

    /** Types */
    const {useAuthTypes} = useTypes();
    const {LOGIN} = useAuthTypes();

    /**
     * Action function for initiating a login request.
     *
     * @param {LoginRequest} request - The login request object.
     * @param {Function} request.onSuccess - Callback function to be executed on successful login.
     * @param {Function} request.onError - Callback function to be executed on login error.
     */
    const actLogin = (request: LoginRequest) => {
        return async (dispatch: Dispatch) => {
            const {data, onError, onSuccess} = request;

            try {
                await login(data);

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    /**
     * Action function for validating an authentication code.
     *
     * @param {ValidateCodeRequest} request - The code validation request object.
     * @param {Function} request.onSuccess - Callback function to be executed on successful code validation.
     * @param {Function} request.onError - Callback function to be executed on code validation error.
     */
    const actValidateCode = (request: ValidateCodeRequest) => {
        return async (dispatch: Dispatch) => {
            const {data, onError, onSuccess} = request;

            try {
                const res = await validate_code(data);

                dispatch({
                    type: LOGIN,
                    payload: res.data.data
                });

                const redux = JSON.parse(localStorage.getItem('persist:root')!);
                redux.auth = JSON.stringify({auth: res.data.data});
                localStorage.setItem('persist:root', JSON.stringify(redux));

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    return {
        actLogin,
        actValidateCode
    };
}

export default useAuthActions;