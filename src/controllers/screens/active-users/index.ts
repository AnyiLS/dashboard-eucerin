import useApi from 'api';
import useModels from 'models';
import React from 'react';

const useActiveUsers = () => {
    const { useActions } = useApi();
    const { dispatch, useUsersActions } = useActions();
    const {actGetCourses, actGetUsers} = useUsersActions();

    /** Variables */
    const headings = {
        id: "Id",
        name: 'Nombre',
        email: 'Correo Electronico',
        position: 'Cargo',
        status: 'Estado',
    }

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useDashboardSelectors} = useSelectors();
    const {coursesSelector, usersSelector} = useDashboardSelectors();
    const courses = useSelector(coursesSelector);
    const users = useSelector(usersSelector);

    const handleGetUsers = (course: number) => {
        dispatch(actGetUsers({
            onError: (error) => console.log(error),
            course
        }));
    }

    React.useEffect(() => {
        dispatch(actGetCourses({
            onError: (error) => console.log(error)
        }));

        dispatch(actGetUsers({
            onError: (error) => console.log(error),
            course: 1
        }));
    }, []);

    return {
        users,
        headings,
        courses,
        handleGetUsers
    };
}

export default useActiveUsers;