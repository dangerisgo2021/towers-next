import React from "react";
import { Button, Row, Progress } from "antd";
import { useJoinGameContainer } from "app/components/room/hooks/useJoinGameContainer";

const defaultGameConfig = { minPlayers: 2 };

export const JoinGame = ({ gameConfig = defaultGameConfig, players = undefined }) => {
  const {
    joinRoomClicked,
    leaveRoomClicked,
    percent,
    isJoinDisabled,
    isLeaveDisabled,
  } = useJoinGameContainer({
    gameConfig,
    players,
  });

  return (
    <Row justify="center" align="middle">
      <Button
        disabled={isJoinDisabled}
        onClick={() => {
          joinRoomClicked();
        }}
      >
        Join Game
      </Button>
      <Progress style={{ margin: "0 2vw" }} type="circle" percent={percent} />
      <Button
        disabled={isLeaveDisabled}
        onClick={() => {
          leaveRoomClicked();
        }}
      >
        Leave Game
      </Button>
    </Row>
  );
};
