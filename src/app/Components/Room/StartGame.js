import React from "react";
import { Button, Row } from "antd";
import { startButtonClicked } from "../../../state/redux/room/actions";
import { useDispatch } from "react-redux";
import { useGetRoomIdFromUrl } from "./hooks/useGetRoomIdFromUrl";

const defaultGameConfig = { minPlayers: 2 };
const useStartGameContainer = ({ players, gameConfig = defaultGameConfig }) => {
  const dispatch = useDispatch();
  const currentPlayerCount = Array.isArray(players) ? players.length : 0;
  const isDisabled = currentPlayerCount < gameConfig.minPlayers;
  const roomId = useGetRoomIdFromUrl();
  console.log("useStartGameContainer", { roomId });
  return {
    isDisabled,
    onStartButtonClicked: () => {
      dispatch(startButtonClicked({ roomId }));
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
