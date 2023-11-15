import React from 'react';
import {useForm} from "react-hook-form";
import useApi from "api";
import useHelpers from "helpers";
/** Interfaces & Types */
import {Login, ValidateCode} from "models/interfaces/auth.interfaces.ts";

/**
 * Provides authentication-related functionality and hooks for use in components.
 *
 * @property {boolean} validateCode - A state variable indicating whether the authentication code needs validation.
 * @property {Object} register - React Hook Form register for the login form.
 * @property {Object} registerValidate - React Hook Form register for the code validation form.
 * @property {Function} handleSubmit - React Hook Form handleSubmit for the login form.
 * @property {Function} handleSubmitValidate - React Hook Form handleSubmit for the code validation form.
 * @property {boolean} isValid - React Hook Form state indicating the validity of the login form.
 * @property {boolean} isValidValidate - React Hook Form state indicating the validity of the code validation form.
 * @property {Function} handleLogin - Function to handle the login process.
 * @property {Function} handleValidateCode - Function to handle the code validation process.
 */
const useAuth = () => {
    /** States */
    const [validateCode, setValidateCode] = React.useState<boolean>(false);
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useAuthActions} = useActions();
    const {actLogin, actValidateCode} = useAuthActions();

    /** Helpers */
    const {useAlert} = useHelpers();
    const {showAlert} = useAlert();

    /** Forms Hooks */
    const {
        register,
        handleSubmit,
        formState: {isValid}
    } = useForm<Login>({mode: 'onChange'});
    const {
        register: registerValidate,
        handleSubmit: handleSubmitValidate,
        formState: {isValid: isValidValidate},
        setValue
    } = useForm<ValidateCode>({mode: 'onChange'});

    /**
     * Function to handle the login process.
     *
     * @param {Login} data - The login credentials.
     */
    const handleLogin = (data: Login) => {
        dispatch(actLogin({
            data,
            onError: (error: any) => {
                console.log(error);
                if(error.response) {
                    showAlert({title: 'Login Error: ', description: error.response.data.message.content, open: true, type: 'danger'});
                } else {
                    showAlert({title: 'Login Error: ', description: error, open: true, type: 'danger'});
                }
            },
            onSuccess: () => {
                setValidateCode(true)
                setValue('email', data.email);
                setValue('password', data.password);
            }
        }));
    }

    /**
     * Function to handle the code validation process.
     *
     * @param {ValidateCode} data - The code for validation.
     */
    const handleValidateCode = (data: ValidateCode) => {
        dispatch(actValidateCode({
            data,
            onError: (error: any) => {
                if(error.response) {
                    showAlert({title: 'Login Error: ', description: error.response.data.message.content, open: true, type: 'danger'});
                } else {
                    showAlert({title: 'Login Error: ', description: error, open: true, type: 'danger'});
                }
            },
            onSuccess: () => {
                showAlert({title: 'Ingreso exitoso: ', description: 'Bienvenido una vez más!', open: true, type: 'success'});
                setTimeout(() => {
                    setValidateCode(false);
                    window.location.href = '/admin/dashboard';
                }, 2000)
            }
        }));
    }

    return {
        validateCode,
        register,
        registerValidate,
        handleSubmit,
        handleSubmitValidate,
        isValid,
        isValidValidate,
        handleLogin,
        handleValidateCode
    };
}

export default useAuth;