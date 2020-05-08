import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getSiderNavItems } from "../../../state/redux/nav/selectors";
import { sideNavItemClicked } from "../../../state/redux/nav/actions";

const SiderMenuRender = ({ navItems = [], dispatch }) => (
  <Menu theme="dark">
    {navItems.map(({ id, href, displayText }) => (
      <Menu.Item
        key={id}
        onClick={() => {
          dispatch(sideNavItemClicked());
        }}
      >
        <Link href={href}>
          <span className="nav-text">{displayText}</span>
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

export const SiderMenu = () => {
  const navItems = useSelector(getSiderNavItems) || [];
  const dispatch = useDispatch();

  return <SiderMenuRender navItems={navItems} dispatch={dispatch} />;
};
