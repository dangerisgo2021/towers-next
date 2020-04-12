import React from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { collapseSider, sliderBreak } from "../../State/redux/sider/actions";
import {
  getIsSiderCollapsed,
  getIsSiderLocked,
} from "../../State/redux/sider/selectors";

const { Sider: AntSider } = Layout;

const useContainer = (ref) => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(getIsSiderCollapsed);
  const handleBreak = (broken) => {
    dispatch(sliderBreak(broken));
  };
  const isLocked = useSelector(getIsSiderLocked);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (!isCollapsed && ref.current && !ref.current.contains(event.target)) {
        dispatch(collapseSider());
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
    isCollapsed,
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
