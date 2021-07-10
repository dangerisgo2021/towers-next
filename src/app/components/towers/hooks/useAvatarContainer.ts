import { useDispatch } from "react-redux";
import {
  userLoginRequested,
  userLogoutRequested,
} from "state/redux/auth/actions";

export const useAvatarContainer = () => {
  const dispatch = useDispatch();

  return {
    user: undefined,
    login: () => {
      dispatch(userLoginRequested());
    },
    logout: () => {
      dispatch(userLogoutRequested());
    },
    name: "",
    loading: false,
  };
};
