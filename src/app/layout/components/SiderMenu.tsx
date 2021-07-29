import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { sideNavItemClicked } from "state/redux/nav/actions";
import { useSiderMenuContainer } from "app/layout/hooks/useSiderMenuContainer";

export const SiderMenu = () => {
  const { navItems = [], isAuthenticated, dispatch } = useSiderMenuContainer();
  return (
    <Menu theme="dark">
      {navItems.map(({ id, href, displayText, requireAuthentication }) =>
        requireAuthentication && !isAuthenticated ? null : (
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
        )
      )}
    </Menu>
  );
};
