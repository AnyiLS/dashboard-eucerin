import React from "react";

const Admin = React.lazy(() => import("./admin"));
const Auth = React.lazy(() => import("./auth"));

const useLayouts = () => {
    return {
        Admin,
        Auth
    };
}

export default useLayouts;