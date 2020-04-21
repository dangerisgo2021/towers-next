import { cloneDeep } from "lodash";
import { getCellByIndex, setup } from "./Towers/setup";
import { INVALID_MOVE } from "boardgame.io/core";

const isVictory = ({ G }) => {
  const { castles } = G.gameConfig;
  const { cells } = G.board;
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

      if (castleCell.size === G.gameConfig.maxTowerSize)
        acc[controller] = {
          ...acc[controller],
          castlesCrowned: acc[controller].castlesCrowned + 1,
        };
    }

    return acc;
  }, {});
  return Object.values(playerToScoreMap).find(
    ({ castlesControlled, castlesCrowned }) => {
      return (
        castlesControlled >= G.gameConfig.castlesToWin ||
        castlesCrowned >= G.gameConfig.crownsToWin
      );
    }
  );
};
const push = ({ G, x, y, xDir, yDir }) => {
  const cells = G.board.cells;
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
    build: (G, ctx, player, { x, y }) => {
      const cell = getCellByIndex({ cells: G.board.cells, x, y });

      cell.towerPieces[cell.size] = {
        ...cell.towerPieces[cell.size],
        type: `player${player}`,
      };

      cell.size++;
    },
    pushUp: (G, ctx, player, { x, y }) => push({ G, x, y, xDir: 0, yDir: -1 }),
    pushLeft: (G, ctx, player, { x, y }) =>
      push({ G, x, y, xDir: -1, yDir: 0 }),
    pushRight: (G, ctx, player, { x, y }) =>
      push({ G, x, y, xDir: 1, yDir: 0 }),
    pushDown: (G, ctx, player, { x, y }) => push({ G, x, y, xDir: 0, yDir: 1 }),
  },
  endIf: (G, ctx) => {
    if (isVictory({ G })) {
      return { winner: ctx.currentPlayer };
    }
  },
};
