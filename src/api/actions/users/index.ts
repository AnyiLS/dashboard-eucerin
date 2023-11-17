import useApi from "api";
/** Interfaces & Types */
import {Dispatch, AnyAction} from "redux";
import { Request } from "models/interfaces/create-reducer.interfaces";

const useUsersActions = () => {
    /** Providers */
    const {useProviders} = useApi();
    const {useUsersProviders} = useProviders();
    const {get_certifications, get_quizzes, get_courses, get_users, active_user, get_inactive_users} = useUsersProviders();

    const actGetCertifications = (request: Request & {course: string}) => {
        return async (dispatch: Dispatch) => {
            const {onError, onSuccess, course} = request;

            try {
                const res = await get_certifications(course);

                dispatch({
                    type: "SET_CERTIFICATIONS",
                    payload: res.data.data
                })

                const redux = JSON.parse(localStorage.getItem("persist:root")!);
                redux.certifications = JSON.stringify({certifications: res.data.data});
                localStorage.setItem('persist:root', JSON.stringify(redux));

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    const actGetQuizzes = (request: Request & {course: string}) => {
        return async (dispatch: Dispatch) => {
            const {onError, onSuccess, course} = request;

            try {
                const res = await get_quizzes(course);

                dispatch({
                    type: "SET_QUIZZES",
                    payload: res.data.data
                })

                const redux = JSON.parse(localStorage.getItem("persist:root")!);
                redux.quizzes = JSON.stringify({quizzes: res.data.data});
                localStorage.setItem('persist:root', JSON.stringify(redux));

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    const actGetCourses = (request: Request) => {
        return async (dispatch: Dispatch) => {
            const {onError, onSuccess} = request;

            try {
                const res = await get_courses();

                dispatch({
                    type: "SET_COURSES",
                    payload: res.data.data
                })

                const redux = JSON.parse(localStorage.getItem("persist:root")!);
                redux.courses = JSON.stringify({courses: res.data.data});
                localStorage.setItem('persist:root', JSON.stringify(redux));

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    const actGetUsers = (request: Request & {course: number}) => {
        return async (dispatch: Dispatch) => {
            const {onError, onSuccess, course} = request;

            try {
                const res = await get_users(course);

                dispatch({
                    type: "SET_USERS",
                    payload: res.data.data
                })

                const redux = JSON.parse(localStorage.getItem("persist:root")!);
                redux.users = JSON.stringify({users: res.data.data});
                localStorage.setItem('persist:root', JSON.stringify(redux));

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    const actGetInactiveUsers = (request: Request & {course: string}) => {
        return async (dispatch: Dispatch) => {
            const {onError, onSuccess, course} = request;

            try {
                const res = await get_inactive_users(course);

                const redux = JSON.parse(localStorage.getItem("persist:root")!);
                redux.inactive_users = JSON.stringify({users: res.data.data});
                localStorage.setItem('persist:root', JSON.stringify(redux));

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    const actActiveUser = (request: Request & {id: string}) => {
        return async (dispatch: Dispatch) => {
            const {onError, onSuccess, id} = request;

            try {
               await active_user(id);

                onSuccess && onSuccess();
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    return {
        actGetCertifications,
        actGetQuizzes,
        actGetCourses,
        actGetUsers,
        actGetInactiveUsers,
        actActiveUser
    };
}

export default useUsersActions;