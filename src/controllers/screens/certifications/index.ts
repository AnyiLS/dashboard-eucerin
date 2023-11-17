import useApi from "api";
import useModels from "models";
import React from "react";
import { useParams } from "react-router-dom";

const useCertifications = () => {
    /** Params */
    const {id} = useParams<{id: string}>();

    /** Variables */
    const headings = {id: 'id', name: 'Nombre', email: 'Correo Electronico', position: 'Cargo', options: 'Opciones'};

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useUsersActions} = useActions();
    const {actGetCertifications} = useUsersActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useDashboardSelectors} = useSelectors();
    const {certificationsSelector} = useDashboardSelectors();
    const certifications = useSelector(certificationsSelector);

    React.useEffect(() => {
        dispatch(actGetCertifications({
            onError: (error) => console.error(error),
            course: id ?? '1'
        }))
    }, [id])

    return {
        headings,
        certifications
    }
}

export default useCertifications;