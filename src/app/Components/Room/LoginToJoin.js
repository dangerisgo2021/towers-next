import React from "react";
import { Button, Row } from "antd";
import { useAuth0 } from "../../Auth/auth0/react-auth0-wrapper";

const useLoginToJoinContainer = () => {
  const { loginWithPopup } = useAuth0();

  return {
    login: loginWithPopup,
  };
};
export const LoginToJoin = () => {
  const { login } = useLoginToJoinContainer();
  return (
    <Row justify="space-around">
      <Button
        block
        onClick={() => {
          login();
        }}
      >
        Login to Play
      </Button>
    </Row>
  );
};
