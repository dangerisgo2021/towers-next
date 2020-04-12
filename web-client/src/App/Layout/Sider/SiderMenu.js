import React from "react";
import { Menu } from "antd";

export const SiderMenu = () => (
  <Menu theme="dark">
    <Menu.Item key="1">
      <span className="nav-text">nav 1</span>
    </Menu.Item>
    <Menu.Item key="2">
      <span className="nav-text">nav 2</span>
    </Menu.Item>
    <Menu.Item key="3">
      <span className="nav-text">nav 3</span>
    </Menu.Item>
    <Menu.Item key="4">
      <span className="nav-text">nav 4</span>
    </Menu.Item>
  </Menu>
);
