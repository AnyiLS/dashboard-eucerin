import React from "react";

const InactiveUsers = React.lazy(() => import("./inactive-users"));
const ActiveUsers = React.lazy(() => import("./active-users"));
const Scores = React.lazy(() => import("./scores"));
const Worlds = React.lazy(() => import("./worlds"));
const Login = React.lazy(() => import("./login"));

const useScreens = () => {
    return {
        InactiveUsers,
        ActiveUsers,
        Scores,
        Worlds,
        Login
    };
}


export default useScreens;