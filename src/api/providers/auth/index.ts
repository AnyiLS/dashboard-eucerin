import axios, {AxiosResponse} from "axios";
import {trackPromise} from "react-promise-tracker";
/** Interfaces & Types */
import {Auth, Login, ValidateCode} from 'models/interfaces/auth.interfaces';
import {Response} from 'models/interfaces/responses.interfaces';

const useAuthProviders = () => {
    /**
     * Logs in a user by sending a POST request to the authentication endpoint.
     *
     * @param {Login} data - The login credentials.
     * @param {string} data.username - The username of the user.
     * @param {string} data.password - The password of the user.
     *
     * @returns {Promise<AxiosResponse<Response>>} A promise that resolves with the response from the server.
     * The response is expected to have the shape of the generic type Response.
     *
     * @throws {Error} If the request fails or the response status is not successful.
     */
    const login = (data: Login): Promise<AxiosResponse<Response>> => {
        /**
         * Sends a POST request to the authentication endpoint.
         *
         * @returns {Promise<AxiosResponse<Response>>} A promise that resolves with the response from the server.
         * @throws {Error} If the request fails or the response status is not successful.
         */
        const request = async (): Promise<AxiosResponse<Response>> => {
            return await axios.post('/admin/auth/login', data);
        }

        return trackPromise(request());
    }

    /**
     * Validates a user authentication code by sending a POST request to the code verification endpoint.
     *
     * @param {ValidateCode} data - The code verification data.
     * @param {string} data.code - The authentication code to be validated.
     *
     * @returns {Promise<AxiosResponse<Response<Auth>>>} A promise that resolves with the response from the server.
     * The response is expected to have the shape of the generic type Response, which in turn has the shape of Auth.
     *
     * @throws {Error} If the request fails or the response status is not successful.
     */

    const validate_code = (data: ValidateCode): Promise<AxiosResponse<Response<Auth>>> => {
        /**
         * Sends a POST request to the code verification endpoint for validating a user authentication code.
         *
         * @returns {Promise<AxiosResponse<Response<Auth>>>} A promise that resolves with the response from the server.
         * @throws {Error} If the request fails or the response status is not successful.
         */
        const request = async (): Promise<AxiosResponse<Response<Auth>>> => {
            return await axios.post('/admin/auth/code-verification', data);
        }

        return trackPromise(request());
    }

    return {
        login,
        validate_code
    };
}

export default useAuthProviders;