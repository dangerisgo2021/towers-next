import React, { useEffect } from "react";
import { notification } from "antd";
import classnames from "classnames";
import { isEqual, isNil } from "lodash";
import { useDispatch } from "react-redux";
import { roomMatchMoveClicked } from "../../../state/redux/room/actions";
import { useGetRoomIdFromUrl } from "./hooks/useGetRoomIdFromUrl";
import { SelectedCellDetails } from "./SelectedCellDetails";
import { Button } from "antd";
import { VictoryProgress } from "./VictoryProgress";

const useTowersContainer = ({ match, moveNames, victoryProgress }) => {
  const roomId = useGetRoomIdFromUrl();

  const dispatch = useDispatch();
  const {
    id,
    board: { cells = [], width = 7, height = 7 } = {},
    maxTowerSize,
  } = match || {};
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

  const [selectedCell, setSelectedCell] = React.useState(cells[0]);

  useEffect(() => {
    if (!isNil(victoryProgress.winner)) {
      notification.open({
        message: `Congrats Player ${victoryProgress.winner} you won!!!`,
      });
    }
  }, [victoryProgress]);
  return {
    selectedCell,
    setSelectedCell,
    board: { cells, width, height },
    maxTowerSize,
    moves,
  };
};

export const RemoteTowers = ({
  match,
  moveNames,
  currentPlayer,
  player,
  victoryProgress,
}) => {
  const {
    board: { cells, width, height },
    maxTowerSize,
    moves,
    selectedCell,
    setSelectedCell,
  } = useTowersContainer({ match, moveNames, victoryProgress });
  const cellWidth = "50px";

  const selectedController = selectedCell.towerPieces.find((piece, i, array) =>
    array[i + 1] ? array[i + 1].type === "EMPTY" : true
  );

  return (
    <div className="TowersBoard">
      <SelectedCellDetails
        {...{
          selectedCell,
          selectedController,
          player,
          currentPlayer,
        }}
      />
      <div className="board">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className={classnames("cell", {
              selected: isEqual(cell.location, selectedCell.location),
            })}
            onClick={(e) => {
              e.preventDefault();
              setSelectedCell(cell);
            }}
          >
            <div className="pieces">
              {cell.towerPieces
                .slice(0) // shallow copy so it doesnt flip flop each render
                .reverse()
                .map((piece) => (
                  <div
                    key={piece.id}
                    className={classnames(
                      "piece",
                      isNil(piece.owner)
                        ? piece.type
                        : `${piece.type}${piece.owner}`
                    )}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <VictoryProgress
          victoryProgress={victoryProgress}
          currentPlayer={currentPlayer}
          player={player}
        />
        <div className="actions">
          {moves.map((move) => {
            return (
              <Button
                key={move.id}
                style={{
                  gridArea: move.name,
                  gridRow: move.name === "BUILD" ? "1 / span 2" : undefined,
                  height: move.name === "BUILD" ? "100%" : undefined,
                  backgroundColor: player === 0 ? "#deb0b0" : "lightblue",
                  border: "1px solid black",
                }}
                className={classnames("action", move.name)}
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedCell.isCastle && move.name === "BUILD") {
                    notification.open({
                      message: "Cannot build on caste",
                    });
                  } else if (
                    move.name === "BUILD" &&
                    selectedCell.size === maxTowerSize
                  ) {
                    notification.open({
                      message: "Cannot perform build past max tower height",
                    });
                  } else if (selectedController.owner !== currentPlayer) {
                    notification.open({
                      message:
                        "Cannot perform action without controlling square",
                    });
                  } else if (player !== selectedController.owner) {
                    notification.open({
                      message:
                        "Cannot perform action when the tower is not yours",
                    });
                  } else if (player !== currentPlayer) {
                    notification.open({
                      message: "Cannot perform action when its not your turn",
                    });
                  } else if (!isNil(victoryProgress.winner)) {
                    notification.open({
                      message: "Cannot perform action when game has a winner",
                    });
                  } else {
                    move.execute(currentPlayer, selectedCell);
                  }
                }}
              >
                {move.text}
              </Button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .board {
          display: grid;
          grid-gap: 4px;
          grid-template-columns: repeat(${width}, ${cellWidth});
          grid-template-rows: repeat(${height}, ${cellWidth});
          justify-content: center;
          background-color: dimgray;
          padding: 1vw;
        }

        .piece {
          border: 1px solid black;
        }

        .pieces {
          display: grid;
          grid-template-rows: repeat(${maxTowerSize}, 1fr);
        }

        .cell {
          display: grid;
          grid-template-rows: 1fr min-content;
        }

        .position {
          text-align: center;
        }

        .EMPTY {
          background-color: lightgrey;
        }

        .CASTLE {
          background-color: green;
        }

        .PLAYER0 {
          background-color: red;
        }
        .PLAYER1 {
          background-color: blue;
        }
        .controls {
          border: 1px solid black;
        }
        .test {
          background-color: magenta;
        }
        .action {
          border: 2px solid black;
          background-color: green;
          text-align: center;
          padding: 0;
        }
        .actions {
          display: grid;
          grid-template-areas:
            "BUILD PUSH_LEFT PUSH_RIGHT"
            "BUILD PUSH_UP PUSH_DOWN";
        }

        .info {
          display: grid;
          grid-auto-flow: column;
          grid-template-rows: 1fr 1fr;
        }
        .selected {
          border: 2px solid gold;
        }
        .info-bit {
          border: 1px solid black;
          padding: 3px;
        }
      `}</style>
    </div>
  );
};
