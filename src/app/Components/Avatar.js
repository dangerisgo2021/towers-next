import React from "react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { words } from "lodash";

import { useAuth0 } from "../Auth/auth0/react-auth0-wrapper";
import { useDispatch } from "react-redux";
import { userReceived } from "../../state/redux/auth/actions";

const useAvatarContainer = () => {
  const dispatch = useDispatch();
  const { loading, user, loginWithPopup, logout } = useAuth0();
  React.useEffect(() => {
    if (user) {
      dispatch(userReceived({ user }));
    }
  }, [user]);
  const name = user ? words(user.name).map((name) => name[0]) : "#";

  return { user, login: loginWithPopup, logout, name, loading };
};
export const Avatar = () => {
  const { user, login, logout, name, loading } = useAvatarContainer();

  return user ? (
    <Button
      shape="circle"
      size="large"
      onClick={() => {
        alert("hi");
        !loading && logout();
      }}
    >
      {name}
    </Button>
  ) : (
    <Button
      size="large"
      shape="circle"
      onClick={() => !loading && login({})}
      icon={<UserOutlined />}
    />
  );
};
