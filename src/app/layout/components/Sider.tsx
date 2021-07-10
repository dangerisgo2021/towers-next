import React from "react";
import { Layout } from "antd";
import { useSiderContainer } from "app/layout/hooks/useSiderContainer";

const { Sider: AntSider } = Layout;

export const Sider = ({ children }) => {
  const ref = React.useRef(null);
  const { isLocked, isCollapsed, handleBreak } = useSiderContainer(ref);
  return (
    <AntSider
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={!isLocked && isCollapsed}
      trigger={null}
      onBreakpoint={handleBreak}
      style={
        isLocked
          ? {}
          : { position: "absolute", top: "64px", zIndex: 100, height: "100%" }
      }
    >
      <div ref={ref}>{children}</div>
    </AntSider>
  );
};
