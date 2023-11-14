import { Route } from "react-router-dom";
/** Interfaces & Types */
import type { Routes } from "routes/routes";

const useAuth = () => {
    const getRoutes = (routes: Routes[]): any => {
        return routes.map((prop, key) => {
            if (prop.layout === "/auth") {
                return (
                    <Route path={`/${prop.path}`} element={prop.component} key={key} />
                );
            } else {
                return null;
            }
        });
    };

    return {
        getRoutes
    }
}

export default useAuth;