import useActiveUsers from "./active-users";
import useInactiveUsers from "./inactive-users";
import useScores from "./scores";
import useWorlds from './worlds'
import useAuth from "./auth";
import useDashboard from "./dashboard";
import useCertifications from "./certifications";
import useQuizzes from "./quizzes";

const useScreensHooks = () => {
    return {
        useInactiveUsers,
        useActiveUsers,
        useScores,
        useWorlds,
        useAuth,
        useDashboard,
        useCertifications,
        useQuizzes
    };
}


export default useScreensHooks;