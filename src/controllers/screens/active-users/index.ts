import useApi from 'api';
import React from 'react';

const useActiveUsers = () => {
    const { useActions } = useApi();
    const { dispatch, useTeamActions } = useActions();
    const { actGetActiveUsers, actActiveUsers } = useTeamActions();

    /** Variables */
    const headings = {
        id: "Id",
        name: 'Nombre',
        email: 'Correo Electronico',
        phone: 'Telefono',
        pharmacy_name: 'Farmacia',
        chain: 'Cadena',
        created_at: 'Aceptacion de terminos'
    }

    /** States */
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        dispatch(actGetActiveUsers({
            onError: (error) => console.error("Team Services: ", error),
            onSuccess: (data) => setUsers(data),
            page: 1
        }));
    }, []);

    return {
        users,
        headings
    };
}

export default useActiveUsers;