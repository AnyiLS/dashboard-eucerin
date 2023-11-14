import useApi from 'api';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const useLogin = () => {
    /** Api */
    const {useActions} = useApi();
    const {dispatch, useTeamActions} = useActions();
    const {actLogin} = useTeamActions();

    /** Form */
    const {register, handleSubmit, setError} = useForm({mode: 'onChange'})

    const handleLogin = (data: any) => {
        if(!data.email || data.email === "") {
            setError('email', {
                type:'validate',
                message: 'El correo electronico es requerido.'
            })
        } else if(!data.password || data.password === "") {
            setError('email', {
                type:'validate',
                message: 'La contraseña es requerida.'
            })
        } else {
            dispatch(actLogin({
                data,
                onError: () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Credenciales incorrectas'
                    })
                },
                onSuccess: () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Bienvenid@!'
                    })

                    setTimeout(() => {
                        window.location.href = '/admin/inactive-users'
                    }, 1500)
                }
            }))
        }
    }

    return {
        register,
        handleSubmit,
        handleLogin
    };
}

export default useLogin;