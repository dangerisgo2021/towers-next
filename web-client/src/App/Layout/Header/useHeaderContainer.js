import {useDispatch, useSelector} from "react-redux";
import {getIsSiderCollapsed, getIsSiderLocked} from "../../State/redux/sider/selectors";
import {menuButtonClicked} from "../../State/redux/header/actions";

export const useHeaderContainer = () => {
  const dispatch = useDispatch();
  const isSiderCollapsed = useSelector(getIsSiderCollapsed);
  const isSiderLocked = useSelector(getIsSiderLocked);
  return {
    isSiderCollapsed,
    isSiderLocked,
    handleMenuButtonClicked: (e) => {
      e.preventDefault();
      dispatch(menuButtonClicked());
    },
  };
};