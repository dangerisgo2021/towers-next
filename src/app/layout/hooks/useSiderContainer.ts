import { useDispatch, useSelector, useStore } from "react-redux";
import {
  clickedOutsideExpandedSider,
  siderBreak,
} from "state/redux/sider/actions";
import {
  getIsSiderCollapsed,
  getIsSiderLocked,
} from "state/redux/sider/selectors";
import React from "react";

export const useSiderContainer = (ref) => {
  const store = useStore();
  const dispatch = useDispatch();
  const handleBreak = (broken) => {
    dispatch(siderBreak(broken));
  };

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      const state = store.getState();
      const isCollapsed = getIsSiderCollapsed(state);
      if (!isCollapsed && ref.current && !ref.current.contains(event.target)) {
        dispatch(clickedOutsideExpandedSider());
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      console.log("unmounting");
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return {
    isCollapsed: useSelector(getIsSiderCollapsed),
    isLocked: useSelector(getIsSiderLocked),
    handleBreak,
  };
};
