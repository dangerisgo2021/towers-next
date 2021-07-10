import React from "react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAvatarContainer } from "app/components/towers/hooks/useAvatarContainer";

export const Avatar = () => {
  const { user, login, logout, name, loading } = useAvatarContainer();

  return user ? (
    <Button
      shape="circle"
      size="large"
      onClick={() => {
        alert("");
        !loading && logout();
      }}
    >
      {name}
    </Button>
  ) : (
    <Button size="large" shape="circle" onClick={() => !loading && login()}>
      <UserOutlined />
    </Button>
  );
};
