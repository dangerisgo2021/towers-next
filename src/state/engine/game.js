import { cloneDeep } from "lodash";
import { getCellByIndex, setup } from "./Towers/setup";
import { INVALID_MOVE } from "boardgame.io/core";

const calculateVictoryProgress = (input) => {
  console.log(0, "input", input);
  const { board, gameConfig } = input;
  console.log(1, "{ board, gameConfig }", { board, gameConfig });

  const { castles } = gameConfig;
  console.log(2, "castles", castles);

  const { cells } = board;
  console.log(3, "cells", cells);

  const playerToScoreMap = castles.reduce((acc, val) => {
    const { x, y } = val;
    const castleCell = getCellByIndex({ cells, x, y });
    const controller = castleCell.towerPieces[castleCell.size - 1].type;

    if (controller.startsWith("player")) {
      if (!acc[controller]) {
        acc[controller] = {
          castlesControlled: 0,
          castlesCrowned: 0,
        };
      }

      acc[controller].castlesControlled = acc[controller].castlesControlled + 1;

      if (castleCell.size === gameConfig.maxTowerSize)
        acc[controller] = {
          ...acc[controller],
          castlesCrowned: acc[controller].castlesCrowned + 1,
        };
    }

    return acc;
  }, {});
  console.log(4, "playerToScoreMap", playerToScoreMap);

  // winner is the key of the first winning entry.
  const [winner = null] =
    Object.entries(playerToScoreMap).find(
      ([_, { castlesControlled, castlesCrowned }]) =>
        castlesControlled >= gameConfig.castlesToWin ||
        castlesCrowned >= gameConfig.crownsToWin
    ) || [];

  return {
    ...playerToScoreMap,
    winner,
  };
};
const push = ({ board, x, y, xDir, yDir }) => {
  const { cells } = board;
  const pushedCell = getCellByIndex({ cells, x, y });
  const movingPieces = cloneDeep(pushedCell.towerPieces);
  let currentCell = pushedCell;
  movingPieces.forEach((movingPiece, index) => {
    if (movingPiece.type !== "empty") {
      if (index === 0) {
        currentCell.towerPieces.forEach((piece, i) => {
          if (i === 0) {
            piece.type = movingPiece.type;
          } else {
            piece.type = "empty";
          }
        });
        currentCell.size = 1;
      } else {
        const xN = currentCell.x + xDir;
        const yN = currentCell.y + yDir;
        const nextCell = getCellByIndex({ cells, x: xN, y: yN });

        if (nextCell && currentCell.size >= nextCell.size) {
          currentCell = nextCell;
          nextCell.towerPieces[nextCell.size].type = movingPiece.type;
          nextCell.size++;
        } else {
          currentCell.towerPieces[currentCell.size].type = movingPiece.type;
          currentCell.size++;
        }
      }
    }
  });

  if (currentCell.id === pushedCell.id) {
    return INVALID_MOVE;
  }
};

export const Towers = {
  name: "Towers",
  setup,
  turn: {
    moveLimit: 1,
  },
  moves: {
    build: (board, player, { x, y }) => {
      const cell = getCellByIndex({ cells: board.cells, x, y });

      cell.towerPieces[cell.size] = {
        ...cell.towerPieces[cell.size],
        type: `player${player}`,
      };

      cell.size++;
    },
    pushUp: (board, player, { x, y }) =>
      push({ board, x, y, xDir: 0, yDir: -1 }),
    pushLeft: (board, player, { x, y }) =>
      push({ board, x, y, xDir: -1, yDir: 0 }),
    pushRight: (board, player, { x, y }) =>
      push({ board, x, y, xDir: 1, yDir: 0 }),
    pushDown: (board, player, { x, y }) =>
      push({ board, x, y, xDir: 0, yDir: 1 }),
  },
  victoryProgress: ({ board, gameConfig }) => calculateVictoryProgress({ board, gameConfig })

};
