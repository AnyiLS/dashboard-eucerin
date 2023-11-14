import useViews from "views";

export interface Routes {
    path: string;
    component: JSX.Element;
    name: string;
    layout: string;
    secondary?: boolean;
}

const routes = (): Routes[] => {
    /** Views */
    const {useScreens} = useViews();
    const {
        InactiveUsers,
        ActiveUsers,
        Scores,
        Worlds,
        Login
    } = useScreens();

    return [
        {
            path: "inactive-users",
            component: <InactiveUsers/>,
            name: "Usuarios Inactivos",
            layout: "/admin",
        },
        {
            path: "active-users",
            component: <ActiveUsers/>,
            name: "Usuarios Activos",
            layout: "/admin",
        },
        {
            path: "scores/:id",
            component: <Scores/>,
            name: "Puntajes",
            layout: "/admin",
        },
        {
            path: "world/:id",
            component: <Worlds/>,
            name: "Mundos",
            layout: "/admin",
        },
        {
            path: "login",
            component: <Login/>,
            name: "Login",
            layout: "/auth",
        }
    ]
}

export default routes;