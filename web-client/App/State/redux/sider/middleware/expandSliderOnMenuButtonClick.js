import { menuButtonClicked } from "../../header/actions";
import { expandSider } from "../actions";
import { getIsSiderCollapsed } from "../selectors";

export const expandSliderOnMenuButtonClick = (store) => (next) => (action) => {
  next(action);

  if (action.type === menuButtonClicked.type) {
    const state = store.getState();
    const isCollapsed = getIsSiderCollapsed(state);
 
    if (isCollapsed) {
      store.dispatch(expandSider());
    }
  }
};
