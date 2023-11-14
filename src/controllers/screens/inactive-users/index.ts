import useApi from 'api';
import React from 'react';

const useInactiveUsers = () => {
    const { useActions } = useApi();
    const { dispatch, useTeamActions } = useActions();
    const { actGetInactiveUsers, actActiveUsers } = useTeamActions();

    /** Variables */
    const headings = {
        id: "Id",
        name: 'Nombre',
        email: 'Correo Electronico',
        phone: 'Telefono',
        pharmacy_name: 'Farmacia',
        chain: 'Cadena',
        created_at: 'Aceptacion de terminos',
        options: 'opciones'
    }

    /** States */
    const [users, setUsers] = React.useState([]);

    const handleActiveUser = (id: number) => {
        dispatch(actActiveUsers({
            id,
            onSuccess: () => {
                dispatch(actGetInactiveUsers({
                    onError: (error) => console.error("Team Services: ", error),
                    onSuccess: (data) => setUsers(data)
                }));
            },
            onError: (error) => console.error("Team Services: ", error)
        }))
    }

    React.useEffect(() => {
        dispatch(actGetInactiveUsers({
            onError: (error) => console.error("Team Services: ", error),
            onSuccess: (data) => setUsers(data)
        }));
    }, []);

    return {
        users,
        headings,
        handleActiveUser
    };
}

export default useInactiveUsers;