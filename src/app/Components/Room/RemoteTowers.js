import React from "react";
import classnames from "classnames";
import { isEqual, isNil } from "lodash";
import { useDispatch } from "react-redux";
import {
  roomMatchMoveClicked,
  roomResetClicked,
} from "../../../state/redux/room/actions";
import { useGetRoomIdFromUrl } from "./hooks/useGetRoomIdFromUrl";
import { Button } from "antd";

const useTowersContainer = ({ match, moveNames }) => {
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

  return {
    selectedCell,
    setSelectedCell,
    board: { cells, width, height },
    maxTowerSize,
    moves,
    onResetClicked: () => {
      dispatch(roomResetClicked({ roomId }));
    },
  };
};

export const RemoteTowers = ({ match, moveNames, currentPlayer }) => {
  const {
    board: { cells, width, height },
    maxTowerSize,
    moves,
    selectedCell,
    setSelectedCell,
    onResetClicked,
  } = useTowersContainer({ match, moveNames });
  const cellWidth = "50px";

  const selectedController = selectedCell.towerPieces.find((piece, i, array) =>
    array[i + 1] ? array[i + 1].type === "EMPTY" : true
  );
  return (
    <div className="TowersBoard">
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
        <div className="info">
          <span className="info-bit">Who's turn? : {currentPlayer}</span>
          <span className="info-bit">
            Selected: [
            {`${selectedCell.location.x}, ${selectedCell.location.y}`}]
          </span>
          <span className="info-bit">
            Selected Tower's Controller : {selectedController.owner || "NONE"}
          </span>
          <span className="info-bit">
            Is Castle : {selectedCell.isCastle ? "yes" : "no"}
          </span>
          <span className="info-bit">Size : {selectedCell.size}</span>
          <span className="info-bit">Winner : {match.winner}</span>
        </div>
        <div className="actions">
          {moves.map((move) => {
            return (
              <Button
                key={move.id}
                className="action"
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedCell.isCastle && move.name === "BUILD") {
                    alert("Cannot build on caste");
                  } else if (
                    move.name === "BUILD" &&
                    selectedCell.size === maxTowerSize
                  ) {
                    alert("Cannot perform build past max tower height");
                  } else if (selectedController.owner !== currentPlayer) {
                    console.log({
                      x: selectedController.owner !== currentPlayer,
                      owner: selectedController.owner,
                      currentPlayer,
                    });
                    alert("Cannot perform action without controlling square");
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
        <Button
          className="reset"
          onClick={() => {
            onResetClicked();
          }}
        >
          RESET
        </Button>
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
          grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
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
