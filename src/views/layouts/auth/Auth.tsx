import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
/** Local Modules */
import useControllers from "controllers";
import useViews from "views";
import routes from "routes/routes";
/** Interfaces & Types */
/** Styles */
import {
    Container,
    Main,
    FlexContainer,
    LeftColumn,
    RightColumn,
    BackgroundImage
} from "./Auth.styles";

interface IAuth {

}

const Auth: React.FC<IAuth> = ({ }): JSX.Element => {
    /** Controllers */
    const { useLayoutsHooks } = useControllers();
    const { useAuth } = useLayoutsHooks();
    const { getRoutes } = useAuth();

    React.useEffect(() => {
        let redux = JSON.parse(localStorage.getItem('persist:root')!);
        let login = JSON.parse(redux.auth ?? "");
        
        if(login.auth.token) {
            window.location.href = '/admin/dashboard';
        }
    }, [])

    return (
        <Container>
            <Main>
                <FlexContainer>
                    <LeftColumn>
                        <Routes>
                            {getRoutes(routes())}
                            <Route path="/" element={<Navigate to="/auth/login" replace />} />
                        </Routes>
                    </LeftColumn>
                    <RightColumn>
                        <BackgroundImage image={"/portD.png"}>
                        </BackgroundImage>
                    </RightColumn>
                </FlexContainer>
            </Main>
        </Container>
    );
}

export default Auth;