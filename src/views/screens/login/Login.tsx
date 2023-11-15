import React from "react";
/** Local Modules */
import useViews from "views";
import useControllers from "controllers";
/** Styles */
import {
    Container,
    SignInContainer,
    Title,
    Description
} from "./Login.styles";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
/** Interfaces & Types */
import {ValidateCode} from "models/interfaces/auth.interfaces";


interface ILogin {

}

const Login: React.FC<ILogin> = (): JSX.Element => {
    /** Views */
    const { useComponents } = useViews();
    const { Button, Input } = useComponents();

    /** Controllers */
    const { useScreensHooks } = useControllers();
    const { useAuth } = useScreensHooks();
    const {
        validateCode,
        register,
        registerValidate,
        handleSubmit,
        handleLogin,
        handleValidateCode,
        handleSubmitValidate,
        isValid,
        isValidValidate
    } = useAuth();

    return (
        <Container>
            <SignInContainer>
                {
                    !validateCode ? (
                        <React.Fragment>
                            <Title>Sign In</Title>
                            <Description>¡Ingresa tu correo y contraseña para iniciar sesión!</Description>
                            {/* Email */}
                            <Input
                                variant="auth"
                                extra="mb-3"
                                label="Email*"
                                placeholder="mail@simmmple.com"
                                type="email"
                                register={register}
                                name="email"
                            />

                            {/* Password */}
                            <Input
                                variant="auth"
                                extra="mb-3"
                                label="Password*"
                                placeholder="Min. 8 characters"
                                type="password"
                                register={register}
                                name="password"
                            />
                            <Button color="#a70b2d" text="white" onClick={handleSubmit(handleLogin)}>Ingresar</Button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Title>Sign In</Title>
                            <Description>¡Ingresa el codigo de verificación para que puedas trabajar...!</Description>
                            {/* Email */}
                            <Input
                                variant="auth"
                                extra="mb-3"
                                label="Codigo de verificación*"
                                placeholder="123456"
                                type="number"
                                register={registerValidate}
                                name="code"
                            />
                            <Button color="#a70b2d" text="white" onClick={handleSubmitValidate((data: ValidateCode) => handleValidateCode(data))}>Ingresar</Button>
                        </React.Fragment>
                    )
                }
            </SignInContainer>
        </Container>
    );
}

export default Login;