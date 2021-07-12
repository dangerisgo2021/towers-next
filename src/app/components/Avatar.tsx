import React from "react";
import { Avatar as AntAvatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAvatarContainer } from "app/components/towers/hooks/useAvatarContainer";

export const Avatar = () => {
  const { user, login, logout, loading } = useAvatarContainer();

  return user ? (
    <Button
      shape="circle"
      size="large"
      onClick={() => {
        !loading && logout();
      }}
      style={{ padding: "0", border: 0 }}
    >
      <AntAvatar src={user.image} shape="circle" size="large" />
    </Button>
  ) : (
    <Button size="large" shape="circle" onClick={() => !loading && login()}>
      <UserOutlined />
    </Button>
  );
};
