import React from "react";
import { Button, Row } from "antd";

import { useStartGameContainer } from "app/components/room/hooks/useStartGameContainer";

const defaultGameConfig = { minPlayers: 2 };

export const StartGame = ({ gameConfig = defaultGameConfig, players }) => {
  const { onStartButtonClicked, isDisabled } = useStartGameContainer({
    gameConfig,
    players,
  });

  return (
    <Row justify="center">
      <Button
        type="primary"
        block
        onClick={onStartButtonClicked}
        disabled={isDisabled}
      >
        Start Game Session
      </Button>
    </Row>
  );
};
