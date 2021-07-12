import React from "react";
import { Button, Col, Layout, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import { Avatar } from "app/components/Avatar";
import { useHeaderContainer } from "app/layout/hooks/useHeaderContainer";

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
    <AntHeader style={{ padding: "0 1vw" }}>
      <Row justify="space-between" align="middle" style={{ height: "100%" }}>
        <Col>
          {!isSiderLocked &&
            (isSiderCollapsed ? (
              <Button size="large" onClick={handleOpenMenuButtonClicked}>
                <MenuUnfoldOutlined />
              </Button>
            ) : (
              <Button size="large">
                <MenuFoldOutlined />
              </Button>
            ))}
        </Col>
        <Col>
          <Avatar />
        </Col>
      </Row>
    </AntHeader>
  );
};
