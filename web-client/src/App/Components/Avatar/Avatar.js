import React from "react";
import { Avatar as AntAvatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import words from "lodash.words";

import { useAuth0 } from "../../Auth/auth0/react-auth0-wrapper";

const AvatarRender = ({ user, loginWithRedirect, logout, name, loading }) => {
  return user ? (
    <AntAvatar onClick={() => !loading && logout()}>{name}</AntAvatar>
  ) : (
    <AntAvatar icon={<UserOutlined onClick={() => !loading && loginWithRedirect({})} />} />
  );
};

export const Avatar = () => {
  const { loading, user, loginWithRedirect, logout } = useAuth0();

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
