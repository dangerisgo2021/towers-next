import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout, Row } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import styles from "./Header.module.css";
import { Avatar } from "../../Components/Avatar/Avatar";
import { getIsSiderCollapsed } from "../../State/redux/sider/selectors";
import { menuButtonClicked } from "../../State/redux/header/actions";

const { Header: AntHeader } = Layout;

const useContainer = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(getIsSiderCollapsed);
  return {
    isCollapsed,
    handleMenuButtonClicked: (e) => {
      e.preventDefault();
      dispatch(menuButtonClicked());
    },
  };
};
export const Header = () => {
  const { isCollapsed, handleMenuButtonClicked } = useContainer();
  return (
    <AntHeader className={styles.header}>
      <Row justify="space-between">
        <Button onClick={handleMenuButtonClicked}>
          {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Avatar />
      </Row>
    </AntHeader>
  );
};
