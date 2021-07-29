import { useGetRoomIdFromUrl } from "app/components/room/hooks/useGetRoomIdFromUrl";
import { useDispatch } from "react-redux";
import {
  playerSelectedCell,
  roomMatchMoveClicked,
} from "state/redux/room/actions";
import React, { useEffect } from "react";
import { notification } from "antd";
import { isNil } from "lodash";

export const useRemoteTowersContainer = ({
  match,
  moveNames,
  victoryProgress,
  player,
}) => {
  const roomId = useGetRoomIdFromUrl();

  const dispatch = useDispatch();
  const {
    id,
    board: { cells = [], width = 7, height = 7 } = {},
    maxTowerSize,
  } = match || {};

  const [selectedCell, setSelectedCell] = React.useState(cells[0]);
  const moves = moveNames.map(({ name }, i) => {
    return {
      id: i,
      name,
      text: name,
      execute: (currentPlayer, selectedCell) => {
        dispatch(
          roomMatchMoveClicked({
            matchId: id,
            name,
            currentPlayer,
            selectedCell,
            roomId,
          })
        );
      },
    };
  });
  useEffect(() => {
    if (victoryProgress && !isNil(victoryProgress.winner)) {
      notification.open({
        message: `Congrats Player ${victoryProgress.winner} you won!!!`,
      });
    }
  }, [victoryProgress]);
  return {
    selectedCell,
    setSelectedCell: ({ selectedCell }) => {
      dispatch(playerSelectedCell({ player, selectedCell, roomId }));
      console.log({selectedCell})
      // @ts-ignore
      return setSelectedCell(selectedCell);
    },
    board: { cells, width, height },
    maxTowerSize,
    moves,
  };
};
