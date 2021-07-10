import {
  clickedOutsideExpandedSider,
  collapseSider,
} from "state/redux/sider/actions";

export const collapseSliderOnOutsideExpandedSliderClick = (store) => (next) => (
  action
) => {
  next(action);

  if (action.type === clickedOutsideExpandedSider.type) {
    store.dispatch(collapseSider());
  }
};
