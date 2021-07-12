import { useDispatch, useSelector } from "react-redux";
import {
  userLoginRequested,
  userLogoutRequested,
} from "state/redux/auth/actions";
import { getSession } from "state/redux/auth/selectors/getSession";

export const useAvatarContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getSession) ?? {};
  return {
    user,
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
