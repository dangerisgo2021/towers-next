import React from "react";
import { Button, Row } from "antd";
import { startButtonClicked } from "../../../state/redux/room/actions";
import { useDispatch } from "react-redux";

const defaultGameConfig = { minPlayers: 2 };
const useStartGameContainer = ({ players, gameConfig = defaultGameConfig }) => {
  const dispatch = useDispatch();
  const currentPlayerCount = Array.isArray(players) ? players.length : 0;
  const isDisabled = currentPlayerCount < gameConfig.minPlayers;

  return {
    isDisabled,
    onStartButtonClicked: () => {
      dispatch(startButtonClicked());
    },
  };
};
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
