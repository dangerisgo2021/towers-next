import React from "react";
import { Button, Layout, Row, Col } from "antd";
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
    <AntHeader style={{padding: "2vw"}}>
      <Col>
        <Row justify="space-between" align="middle">
          {isSiderLocked && (
            <Button key="0">
              {" "}
              <MenuOutlined />
            </Button>
          )}
          {!isSiderLocked &&
            (isSiderCollapsed ? (
              <Button key="1" onClick={handleOpenMenuButtonClicked}>
                <MenuUnfoldOutlined />
              </Button>
            ) : (
              <Button key="2">
                <MenuFoldOutlined />
              </Button>
            ))}
          <Avatar />
        </Row>
      </Col>
    </AntHeader>
  );
};
