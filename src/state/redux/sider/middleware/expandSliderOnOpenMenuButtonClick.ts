import { openMenuButtonClicked } from "state/redux/header/actions";
import { expandSider } from "state/redux/sider/actions";

export const expandSliderOnOpenMenuButtonClick = (store) => (next) => (
  action
) => {
  next(action);
  if (action.type === openMenuButtonClicked.type) {
    console.log({ action });

    store.dispatch(expandSider());
  }
};
