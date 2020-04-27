import React from "react";
import { Button, Row, Progress } from "antd";
import { get } from "lodash";
import { joinRoomClicked } from "../../../state/redux/room/actions";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../state/redux/auth/selectors/getProfile";
import { useRouter } from "next/router";

const defaultGameConfig = { minPlayers: 2 };
const defaultProfile = { name: "Anon ?????" };

const useGetRoomIdFromUrl = () => {
  const { query = {} } = useRouter();
  const { roomId } = query;
  return roomId;
};

const useJoinGameContainer = ({ gameConfig, players }) => {
  const dispatch = useDispatch();
  const roomId = useGetRoomIdFromUrl();
  const { id } = useSelector(getProfile) || defaultProfile;
  const joined = players.find((player) => get(player, "profile.id") === id);
  const currentPlayerCount = Array.isArray(players) ? players.length : 0;
  const { minPlayers, maxPlayers } = gameConfig;
  const percent = (currentPlayerCount / minPlayers) * 100;
  const isJoinDisabled = joined || currentPlayerCount >= maxPlayers;
  const isLeaveDisabled = !joined;

  return {
    percent,
    isJoinDisabled,
    isLeaveDisabled,
    joinRoomClicked: () => {
      dispatch(joinRoomClicked({ roomId }));
    },
  };
};
export const JoinGame = ({ gameConfig = defaultGameConfig, players }) => {
  const {
    joinRoomClicked,
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
      <Progress
        style={{ margin: "0 2vw" }}
        type="circle"
        percent={percent}
        {...{ status: percent === 0 && "exception" }}
      />
      <Button
        disabled={isLeaveDisabled}
        onClick={() => {
          joinRoomClicked();
        }}
      >
        Leave Game
      </Button>
    </Row>
  );
};
