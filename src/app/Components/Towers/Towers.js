import React from "react";
import classnames from "classnames";
import { startCase } from "lodash";
import { Button, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { reset, redo, undo, move } from "../../../state/redux/match/actions";

const useTowersContainer = ({ matchSelector }) => {
  const dispatch = useDispatch();
  const match = useSelector(matchSelector);
  const {
    id = "MATCH_ID_MISSING",
    board: { cells = [], width = 7, height = 7 } = {},
    maxTowerSize,
    currentPlayerIndex = "0",
  } = match || {};

  return {
    G: {
      board: { cells, width, height },
      maxTowerSize,
    },
    ctx: { currentPlayer: currentPlayerIndex },
    moves: {
      build: (currentPlayer, selectedCell) => {
        dispatch(
          move({ matchId: id, name: "build", currentPlayer, selectedCell })
        );
      },
      pushUp: (currentPlayer, selectedCell) => {
        dispatch(
          move({
            matchId: id,
            name: "push",
            direction: "up",
            currentPlayer,
            selectedCell,
          })
        );
      },
      pushLeft: (currentPlayer, selectedCell) => {
        dispatch(
          move({
            matchId: id,
            name: "push",
            direction: "left",
            currentPlayer,
            selectedCell,
          })
        );
      },
      pushRight: (currentPlayer, selectedCell) => {
        dispatch(
          move({
            matchId: id,
            name: "push",
            direction: "right",
            currentPlayer,
            selectedCell,
          })
        );
      },
      pushDown: (currentPlayer, selectedCell) => {
        dispatch(
          move({
            matchId: id,
            name: "push",
            direction: "down",
            currentPlayer,
            selectedCell,
          })
        );
      },
    },
    reset: () => {
      dispatch(reset({ matchId: id }));
    },
    undo: () => {
      dispatch(undo({ matchId: id }));
    },
    redo: () => {
      dispatch(redo({ matchId: id }));
    },
  };
};

export const Towers = ({ matchSelector }) => {
  const {
    G: {
      board: { cells, width, height },
      maxTowerSize,
    },
    ctx: { currentPlayer },
    moves,
    reset,
    undo,
    redo,
  } = useTowersContainer({ matchSelector });
  const [selectedCell, setSelectedCell] = React.useState(cells[0]);

  const cellWidth = "50px";
  const actions = Object.entries(moves).map(([id, move]) => ({
    id,
    move,
    text: startCase(id),
  }));

  const selectedController = selectedCell.towerPieces.find((piece, i, array) =>
    array[i + 1] ? array[i + 1].type === "empty" : true
  );
  const matchActions = [
    {
      id: "RESET",
      text: "RESET",
      onClick: () => {
        reset();
      },
    },
    {
      id: "UNDO",
      text: "UNDO",
      onClick: () => {
        undo();
      },
    },
    {
      id: "REDO",
      text: "REDO",
      onClick: () => {
        redo();
      },
    },
  ];
  return (
    <div className="TowersBoard">
      <div className="board">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className={classnames("cell", {
              selected: cell.x === selectedCell.x && cell.y === selectedCell.y,
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
                    className={classnames("piece", piece.type)}
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
            Selected: [{`${selectedCell.x}, ${selectedCell.y}`}]
          </span>
          <span className="info-bit">
            Selected Tower's Controller : {selectedController.type}
          </span>
          <span className="info-bit">
            Is Castle : {selectedCell.isCastle ? "yes" : "no"}
          </span>
          <span className="info-bit">Size : {selectedCell.size}</span>
        </div>
        <div className="actions">
          {actions.map((action) => {
            return (
              <div
                key={action.id}
                className="action"
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedCell.isCastle && action.id === "build") {
                    alert("Cannot build on caste");
                  } else if (
                    action.id === "build" &&
                    selectedCell.size === maxTowerSize
                  ) {
                    alert("Cannot perform build past max tower height");
                  } else if (
                    selectedController.type !== `player${currentPlayer}`
                  ) {
                    alert("Cannot perform action without controlling square");
                  } else {
                    action.move(currentPlayer, selectedCell);
                  }
                }}
              >
                {action.text}
              </div>
            );
          })}
        </div>
        <Row
          className="match-actions"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          {matchActions.map((matchAction) => {
            return (
              <Button
                key={matchAction.id}
                className="match-action"
                onClick={(e) => {
                  e.preventDefault();
                  matchAction.onClick(e);
                }}
              >
                {matchAction.text}
              </Button>
            );
          })}
        </Row>
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

        .empty {
          background-color: lightgrey;
        }

        .castle {
          background-color: green;
        }

        .player0 {
          background-color: red;
        }
        .player1 {
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
        }
        .actions {
          display: grid;
          grid-auto-flow: column;
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
