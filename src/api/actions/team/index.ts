import useApi from "api";
import type { Request } from 'models/interfaces/create-reducer.interfaces';
import type { Dispatch } from 'redux';

const useTeamActions = () => {
    /** Providers */
    const { useProviders } = useApi();
    const { useTeamsProviders } = useProviders();
    const {
        getActiveUsers,
        activeNextLevel,
        activeUsers,
        getInactiveUsers,
        getScores,
        getUsersByLevel,
        login
    } = useTeamsProviders();

    const actGetInactiveUsers = (request: Request) => async (dispatch: Dispatch) => {
        /** Request */
        const { onError, onSuccess } = request;

        try {
            const res = await getInactiveUsers();
            const { data } = res.data.data;

            dispatch({
                type: "GET_INACTIVE_USERS",
                payload: data
            });

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetActiveUsers = (request: Request & {page: number}) => async (dispatch: Dispatch) => {
        /** Request */
        const { onError, onSuccess, page } = request;

        try {
            const res = await getActiveUsers(page);
        
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetScores = (request: Request & {level: number}) => async (dispatch: Dispatch) => {
        /** Request */
        const { onError, onSuccess, level } = request;

        try {
            const res = await getScores(level);
        
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetUsersByLevel = (request: Request & {level: number}) => async (dispatch: Dispatch) => {
        /** Request */
        const { onError, onSuccess, level } = request;

        try {
            const res = await getUsersByLevel(level);
        
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actActiveUsers = (request: Request & {id: number}) => async (dispatch: Dispatch) => {
        /** Request */
        const { onError, onSuccess, id } = request;

        try {
            await activeUsers(id);

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    }

    const actActiveNextLevelUsers = (request: Request & {id: number}) => async (dispatch: Dispatch) => {
        /** Request */
        const { onError, onSuccess, id } = request;

        try {
            await activeNextLevel(id);

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    }

    const actLogin = (request: Request & {data: any}) => async (dispatch: Dispatch) => {
        /** Request */
        const { onError, onSuccess, data } = request;

        try {
            const res = await login(data);

            const redux = JSON.parse(localStorage.getItem('persist:root')!);
            redux.auth = JSON.stringify({auth: res.data.data});
            localStorage.setItem('persist:root', JSON.stringify(redux));

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actGetInactiveUsers,
        actActiveUsers,
        actGetActiveUsers,
        actGetScores,
        actGetUsersByLevel,
        actActiveNextLevelUsers,
        actLogin
    };
}

export default useTeamActions;