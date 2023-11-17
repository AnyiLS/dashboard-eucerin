import useApi from "api";
import useModels from "models";
import React from "react";
import { useParams } from "react-router-dom";

const useQuizzes = () => {
    /** Params */
    const {id} = useParams<{id: string}>();

    /** Variables */
    const headings = {id: 'id', name: 'Nombre', email: 'Correo Electronico', position: 'Cargo', progress: 'Progreso'};

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useUsersActions} = useActions();
    const {actGetQuizzes} = useUsersActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useDashboardSelectors} = useSelectors();
    const {quizzesSelector} = useDashboardSelectors();
    const quizzes = useSelector(quizzesSelector);

    React.useEffect(() => {
        dispatch(actGetQuizzes({
            onError: (error) => console.error(error),
            course: id ?? '1'
        }))
    }, [id])

    return {
        headings,
        quizzes
    }
}

export default useQuizzes;