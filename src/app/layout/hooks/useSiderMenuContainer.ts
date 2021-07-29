import { useDispatch, useSelector } from "react-redux";

import { getSiderNavItems } from "state/redux/nav/selectors";
import { getIsAuthenticated } from "state/redux/auth/selectors/getIsAuthenticated";

export const useSiderMenuContainer = () => {
  const navItems = useSelector(getSiderNavItems) || [];
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  return {
    navItems,
    dispatch,
    isAuthenticated,
  };
};
