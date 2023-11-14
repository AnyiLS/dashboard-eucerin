import useApi from 'api';
import React from 'react';
import { useParams } from 'react-router-dom';

const useScores = () => {
    const {id} = useParams();

    const { useActions } = useApi();
    const { dispatch, useTeamActions } = useActions();
    const { actGetScores } = useTeamActions();

    /** Variables */
    const headings = {
        name: 'Nombre',
        email: 'Correo Electronico',
        phone: 'Telefono',
        pharmacy_name: 'Farmacia',
        chain: 'Cadena',
        score: 'Puntaje'
    }

    /** States */
    const [scores, setScores] = React.useState([]);

    React.useEffect(() => {
        dispatch(actGetScores({
            onError: (error) => console.error("Team Services: ", error),
            onSuccess: (data) => setScores(data),
            level: parseInt(id as string)
        }));
    }, [id]);

    return {
        scores,
        headings
    };
}

export default useScores;