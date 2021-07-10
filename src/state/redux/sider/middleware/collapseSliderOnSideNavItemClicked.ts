import { collapseSider } from "state/redux/sider/actions";
import { sideNavItemClicked } from "state/redux/nav/actions";

export const collapseSliderOnSideNavItemClicked = (store) => (next) => (
  action
) => {
  next(action);

  if (action.type === sideNavItemClicked.type) {
    store.dispatch(collapseSider());
  }
};
