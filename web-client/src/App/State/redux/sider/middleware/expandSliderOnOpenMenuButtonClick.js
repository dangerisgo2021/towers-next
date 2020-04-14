import { openMenuButtonClicked } from "../../header/actions";
import { expandSider } from "../actions";

export const expandSliderOnOpenMenuButtonClick = (store) => (next) => (
  action
) => {
  next(action);
  if (action.type === openMenuButtonClicked.type) {
    console.log({ action });

    store.dispatch(expandSider());
  }
};
