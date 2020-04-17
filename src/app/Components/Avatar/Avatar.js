import React from "react";
import { Avatar as AntAvatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import words from "lodash.words";

import { useAuth0 } from "../../Auth/auth0/react-auth0-wrapper";
import { useDispatch } from "react-redux";
import { userReceived } from "../../../state/redux/auth/actions";

const AvatarRender = ({ user, loginWithRedirect, logout, name, loading }) => {
  return user ? (
    <AntAvatar size="large" onClick={() => !loading && logout()}>
      {name}
    </AntAvatar>
  ) : (
    <AntAvatar
      size="large"
      icon={<UserOutlined onClick={() => !loading && loginWithRedirect({})} />}
    />
  );
};

export const Avatar = () => {
  const dispatch = useDispatch();
  const { loading, user, loginWithRedirect, logout } = useAuth0();
  React.useEffect(() => {
    if (user) {
      dispatch(userReceived({ user }));
    }
  }, [user]);
  const name = user ? words(user.name).map((name) => name[0]) : "#";

  return (
    <AvatarRender
      name={name}
      loading={loading}
      user={user}
      loginWithRedirect={loginWithRedirect}
      logout={logout}
    />
  );
};
