import React from "react";
import { Button, Layout, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { Avatar } from "../../Components/Avatar/Avatar";
import { useHeaderContainer } from "./useHeaderContainer";

const { Header: AntHeader } = Layout;

export const Header = () => {
  const {
    isSiderCollapsed,
    isSiderLocked,
    handleOpenMenuButtonClicked,
  } = useHeaderContainer();
  // need to manually set keys on button to prevent
  // React from reusing the button with the click event

  return (
    <AntHeader style={{ padding: "1vw" }}>
      <Row justify="space-between" align="middle" style={{ height: "100%" }}>
        {isSiderLocked && (
          <Button key="0" size="large">
            <MenuOutlined />
          </Button>
        )}
        {!isSiderLocked &&
          (isSiderCollapsed ? (
            <Button key="1" size="large" onClick={handleOpenMenuButtonClicked}>
              <MenuUnfoldOutlined />
            </Button>
          ) : (
            <Button key="2" size="large">
              <MenuFoldOutlined />
            </Button>
          ))}
        <Avatar />
      </Row>
    </AntHeader>
  );
};
