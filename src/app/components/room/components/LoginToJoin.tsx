import React from "react";
import { Button, Row } from "antd";
import { useLoginToJoinContainer } from "app/components/room/hooks/useLoginToJoinContianer";

export const LoginToJoin = () => {
  const { onLoginToJoinCButtonClicked } = useLoginToJoinContainer();
  return (
    <Row justify="space-around">
      <Button block onClick={onLoginToJoinCButtonClicked}>
        Login to Play
      </Button>
    </Row>
  );
};
