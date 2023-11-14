import useAdmin from "./admin";
import useAuth from "./auth";

const useLayoutsHooks = () => {
    return {
        useAdmin,
        useAuth
    };
}


export default useLayoutsHooks;