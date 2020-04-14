import React from "react";
import { Layout } from "antd";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  clickedOutsideExpandedSider,
  sliderBreak,
} from "../../State/redux/sider/actions";
import {
  getIsSiderCollapsed,
  getIsSiderLocked,
} from "../../State/redux/sider/selectors";

const { Sider: AntSider } = Layout;

const useContainer = (ref) => {
  const store = useStore();
  const dispatch = useDispatch();
  const handleBreak = (broken) => {
    dispatch(sliderBreak(broken));
  };
  const isLocked = useSelector(getIsSiderLocked);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      const state = store.getState();
      const isCollapsed = getIsSiderCollapsed(state);
      console.log({ isCollapsed, expanded: !isCollapsed });

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
    isLocked,
    handleBreak,
  };
};

export const Sider = ({ children }) => {
  const ref = React.useRef(null);
  const { isLocked, isCollapsed, handleBreak } = useContainer(ref);
  return (
    <AntSider
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={!isLocked && isCollapsed}
      trigger={null}
      onBreakpoint={handleBreak}
    >
      <div ref={ref}>{children}</div>
    </AntSider>
  );
};
