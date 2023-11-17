import useHelpers from "helpers";

const useDashboardSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    const dashboardSelector = createSelector(
        (state: any) => state.dashboard,
        (dashboard: any) => dashboard.dashboard
    );

    const certificationsSelector = createSelector(
        (state: any) => state.certifications,
        (certifications: any) => certifications.certifications
    );

    const quizzesSelector = createSelector(
        (state: any) => state.quizzes,
        (quizzes: any) => quizzes.quizzes
    );

    const coursesSelector = createSelector(
        (state: any) => state.courses,
        (courses: any) => courses.courses
    );

    const usersSelector = createSelector(
        (state: any) => {
            return state.users
        },
        (users: any) => {
            const redux = JSON.parse(localStorage.getItem('persist:root')!);
            const usersLocal = JSON.parse(redux.users).users;
            return users?.users ?? usersLocal
        }
    );

    const inactiveUsersSelector = createSelector(
        (state: any) => {
            return state.inactive_users
        },
        (inactive_users: any) => {
            try {
                return inactive_users.users;
            } catch (error) {
                console.error('Error. ', error)
            }
        }
    );

    return {
        dashboardSelector,
        certificationsSelector,
        quizzesSelector,
        coursesSelector,
        usersSelector,
        inactiveUsersSelector
    };
}

export default useDashboardSelectors;