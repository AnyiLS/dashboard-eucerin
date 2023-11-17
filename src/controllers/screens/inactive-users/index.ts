import useApi from 'api';
import useModels from 'models';
import React from 'react';
import { useParams } from 'react-router-dom';

const useInactiveUsers = () => {
    /** Params */
    const {id} = useParams<{id: string}>();
    const { useActions } = useApi();
    const { dispatch, useUsersActions } = useActions();
    const { actGetInactiveUsers, actActiveUser } = useUsersActions();

    /** Courses */
    const [course, setCourses] = React.useState<string>('1')

    const headings = {
        id: "Id",
        name: 'Nombre',
        email: 'Correo Electronico',
        position: 'Cargo',
        status: 'Estado',
        options: 'Opciones'
    }

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useDashboardSelectors} = useSelectors();
    const {coursesSelector, inactiveUsersSelector} = useDashboardSelectors();
    const courses = useSelector(coursesSelector);
    const users = useSelector(inactiveUsersSelector);

    const handleActiveUser = (user_id: number) => {
        dispatch(actActiveUser({
            id: user_id.toString(),
            onSuccess: () => {
                dispatch(actGetInactiveUsers({
                    onError: (error) => console.error("Team Services: ", error),
                    onSuccess: (data) => {},
                    course: course
                }));
            },
            onError: (error) => console.error("Team Services: ", error)
        }))
    }

    const handleGetUsers = (course: number) => {
        setCourses(course.toString())
        dispatch(actGetInactiveUsers({
            onError: (error) => console.log(error),
            course: course.toString()
        }));
    }

    React.useEffect(() => {
        dispatch(actGetInactiveUsers({
            onError: (error) => console.error("Team Services: ", error),
            onSuccess: (data) => {},
            course: id ?? '1'
        }));
    }, []);

    return {
        users,
        headings,
        handleActiveUser,
        handleGetUsers
    };
}

export default useInactiveUsers;