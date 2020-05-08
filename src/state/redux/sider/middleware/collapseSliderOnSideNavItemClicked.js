import { collapseSider } from "../actions";
import { sideNavItemClicked } from "../../nav/actions";

export const collapseSliderOnSideNavItemClicked = (store) => (next) => (
  action
) => {
  next(action);

  if (action.type === sideNavItemClicked.type) {
    store.dispatch(collapseSider());
  }
};
