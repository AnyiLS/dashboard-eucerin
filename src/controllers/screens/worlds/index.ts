import useApi from 'api';
import React from 'react';
import { useParams } from 'react-router-dom';

const useWorlds = () => {
    const {id} = useParams();

    const { useActions } = useApi();
    const { dispatch, useTeamActions } = useActions();
    const { actGetUsersByLevel, actActiveNextLevelUsers } = useTeamActions();

    /** Variables */
    const headings = {
        name: 'Nombre',
        email: 'Correo Electronico',
        phone: 'Telefono',
        pharmacy_name: 'Farmacia',
        chain: 'Cadena',
        options: 'Opciones'
    }

    const handleActiveUser = (idLevel: number) => {
        dispatch(actActiveNextLevelUsers({
            id: idLevel,
            onSuccess: () => {
                dispatch(actGetUsersByLevel({
                    onError: (error) => console.error("Team Services: ", error),
                    onSuccess: (data) => setUsers(data),
                    level: parseInt(id as string)
                }));
            },
            onError: (error) => console.error("Team Services: ", error)
        }))
    }

    /** States */
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        dispatch(actGetUsersByLevel({
            onError: (error) => console.error("Team Services: ", error),
            onSuccess: (data) => setUsers(data),
            level: parseInt(id as string)
        }));
    }, [id]);

    return {
        users,
        headings,
        handleActiveUser
    };
}

export default useWorlds;