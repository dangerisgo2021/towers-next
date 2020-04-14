import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getSiderNavItems } from "../../State/redux/nav/selectors";

const SiderMenuRender = ({ navItems = [] }) => (
  <Menu theme="dark">
    {navItems.map(({ id, href, displayText }) => (
      <Menu.Item key={id}>
        <Link href={href}>
          <a>
            <span className="nav-text">{displayText}</span>
          </a>
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

export const SiderMenu = () => {
  const navItems = useSelector(getSiderNavItems) || [];
  return <SiderMenuRender navItems={navItems} />;
};
