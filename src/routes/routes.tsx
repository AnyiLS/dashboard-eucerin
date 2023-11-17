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
        Login,
        Dashboard,
        Quiz,
        Certificaciones
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
            path: "login",
            component: <Login/>,
            name: "Login",
            layout: "/auth",
        },
        {
            path: "dashboard",
            component: <Dashboard/>,
            name: "Dashboard",
            layout: "/admin",
        },
        {
            path: "quiz/:id",
            component: <Quiz/>,
            name: "Quiz",
            layout: "/admin",
        },
        {
            path: "certificaciones/:id",
            component: <Certificaciones/>,
            name: "Certificaciones",
            layout: "/admin",
        },
    ]
}

export default routes;