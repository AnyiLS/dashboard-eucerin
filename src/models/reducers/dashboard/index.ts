import useHelpers from "helpers";
/** Interfaces & Types */
import { Action, States } from "../../interfaces/create-reducer.interfaces";

/**
 * Provides authentication-related reducers for use in Redux.
 *
 * @property {Function} auth - Reducer function for handling authentication state changes.
 */
const useDashboardReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    const dashboard = createReducer({ dashboard: { registered_users: [] } }, {
        ["SET_DASHBOARD"](state: States, action: Action<any>) {
            return {
                ...state,
                dashboard: action.payload
            }
        }
    });

    const certifications = createReducer({ certifications: { certifications: [] } }, {
        ["SET_CERTIFICATIONS"](state: States, action: Action<any>) {
            return {
                ...state,
                certifications: action.payload
            }
        }
    });

    const quizzes = createReducer({ quizzes: { quizzes: [] } }, {
        ["SET_QUIZZES"](state: States, action: Action<any>) {
            return {
                ...state,
                quizzes: action.payload
            }
        }
    });

    const courses = createReducer({ courses: { courses: [] } }, {
        ["SET_COURSES"](state: States, action: Action<any>) {
            return {
                ...state,
                courses: action.payload
            }
        }
    });

    const users = createReducer({ users: {users: []}}, {
        ["SET_USERS"](state: States, action: Action<any>) {
            return {
                ...state,
                users: action.payload
            }
        }
    });

    const inactive_users = createReducer({ users: {users: []}}, {
        ["SET_INACTIVE_USERS"](state: States, action: Action<any>) {
            return {
                ...state,
                users: action.payload
            }
        }
    });


    return {
        dashboard,
        certifications,
        quizzes,
        courses,
        users,
        inactive_users
    };
}

export default useDashboardReducers;