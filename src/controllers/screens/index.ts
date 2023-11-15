import useActiveUsers from "./active-users";
import useInactiveUsers from "./inactive-users";
import useScores from "./scores";
import useWorlds from './worlds'
import useAuth from "./auth";

const useScreensHooks = () => {
    return {
        useInactiveUsers,
        useActiveUsers,
        useScores,
        useWorlds,
        useAuth
    };
}


export default useScreensHooks;