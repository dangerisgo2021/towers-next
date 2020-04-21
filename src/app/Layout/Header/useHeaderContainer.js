import { useDispatch, useSelector } from "react-redux";
import {
  getIsSiderCollapsed,
  getIsSiderLocked,
} from "../../../state/redux/sider/selectors";
import { openMenuButtonClicked } from "../../../state/redux/header/actions";

export const useHeaderContainer = () => {
  const dispatch = useDispatch();
  const isSiderCollapsed = useSelector(getIsSiderCollapsed);
  const isSiderLocked = useSelector(getIsSiderLocked);

  return {
    isSiderCollapsed,
    isSiderLocked,
    handleOpenMenuButtonClicked: () => {
      dispatch(openMenuButtonClicked({ isSiderCollapsed }));
    },
  };
};
