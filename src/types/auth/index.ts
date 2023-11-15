/**
 * Returns an object containing action types related to authentication.
 *
 * @property {string} LOGIN - Action type for setting login state.
 */
const useAuthTypes = () => {
    return {
        'LOGIN': "[Auth] => Set Login",
    };
}

export default useAuthTypes;