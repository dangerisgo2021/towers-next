import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getSiderNavItems } from "../../../state/redux/nav/selectors";

const SiderMenuRender = ({ navItems = [] }) => (
  <Menu theme="dark">
    {navItems.map(({ id, href, displayText }) => (
      <Menu.Item key={id}>
        <Link href={href}>
          <span className="nav-text">{displayText}</span>
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

export const SiderMenu = () => {
  const navItems = useSelector(getSiderNavItems) || [];
  return <SiderMenuRender navItems={navItems} />;
};
