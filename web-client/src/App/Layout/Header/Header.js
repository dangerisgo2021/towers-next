import React from "react";
import { Button, Layout, Row } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import styles from "./Header.module.css";
import { Avatar } from "../../Components/Avatar/Avatar";
import { useHeaderContainer } from "./useHeaderContainer";

const { Header: AntHeader } = Layout;

export const Header = () => {
  const {
    isSiderCollapsed,
    isSiderLocked,
    handleOpenMenuButtonClicked,
  } = useHeaderContainer();
  return (
    <AntHeader className={styles.header}>
      <Row justify="space-between">
        {isSiderLocked && (
          <Button>
            <MenuOutlined />
          </Button>
        )}
        {!isSiderLocked &&
          (isSiderCollapsed ? (
            <Button onClick={handleOpenMenuButtonClicked}>
              <MenuUnfoldOutlined />
            </Button>
          ) : (
            <Button>
              <MenuFoldOutlined />
            </Button>
          ))}
        }
        <Avatar />
      </Row>
    </AntHeader>
  );
};
