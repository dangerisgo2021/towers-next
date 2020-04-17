import { clickedOutsideExpandedSider } from "../actions";
import { collapseSider } from "../actions";

export const collapseSliderOnOutsideExpandedSliderClick = (store) => (next) => (
  action
) => {
  next(action);

  if (action.type === clickedOutsideExpandedSider.type) {
    store.dispatch(collapseSider());
  }
};
