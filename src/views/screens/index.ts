import React from "react";

const InactiveUsers = React.lazy(() => import("./inactive-users"));
const ActiveUsers = React.lazy(() => import("./active-users"));
const Login = React.lazy(() => import("./login"));
const Dashboard = React.lazy(() => import("./dashboard"));
const Quiz = React.lazy(() => import("./quiz"));
const Certificaciones = React.lazy(() => import("./certificaciones"));

const useScreens = () => {
    return {
        InactiveUsers,
        ActiveUsers,
        Login,
        Dashboard,
        Quiz,
        Certificaciones
    };
}


export default useScreens;