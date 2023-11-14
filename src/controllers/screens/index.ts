import useActiveUsers from "./active-users";
import useLogin from "./auth";
import useInactiveUsers from "./inactive-users";
import useScores from "./scores";
import useWorlds from './worlds'

const useScreensHooks = () => {
    return {
        useInactiveUsers,
        useActiveUsers,
        useScores,
        useWorlds,
        useLogin
    };
}


export default useScreensHooks;