import { useSelector } from "react-redux";
import { getIsAuthenticated } from "state/redux/auth/selectors/getIsAuthenticated";

export const useMyGamesContainer = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    return {
        isAuthenticated,
    };
};
