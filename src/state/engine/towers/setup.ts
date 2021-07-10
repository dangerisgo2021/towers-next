import { createCell } from "state/engine/towers/cell/createCell";

const gameConfig = {
  width: 7,
  height: 7,
  maxTowerSize: 5,
  castlesToWin: 4,
  crownsToWin: 3,
  castles: [
    { size: 2, x: 3, y: 3 },
    { size: 1, x: 1, y: 3 },
    { size: 1, x: 5, y: 3 },
    { size: 1, x: 3, y: 1 },
    { size: 1, x: 3, y: 5 },
  ],
  startingPlayerPieces: [
    { size: 3, player: 0, x: 0, y: 1 },
    { size: 3, player: 0, x: 5, y: 6 },
    { size: 3, player: 0, x: 6, y: 5 },
    { size: 3, player: 1, x: 0, y: 5 },
    { size: 3, player: 1, x: 1, y: 6 },
    { size: 3, player: 1, x: 5, y: 0 },
    { size: 3, player: 1, x: 6, y: 1 },
    { size: 3, player: 0, x: 1, y: 0 },
  ],
};

export const getCellByIndex = ({ cells, x, y }) => {
  if (x < gameConfig.width && y < gameConfig.height && x >= 0 && y >= 0) {
    return cells[y * gameConfig.width + x];
  } else {
    return undefined;
  }
};

const createCells = ({ width, height, maxTowerSize }) =>
  Array.from({ length: width * height }).map((_, i) =>
    createCell({ x: i % width, y: Math.floor(i / height), maxTowerSize })
  );

const mapCastles = (cell) => {
  const castle = gameConfig.castles.find(
    ({ x, y }) => cell.x === x && cell.y === y
  );

  return castle
    ? {
        ...cell,
        isCastle: true,
        towerPieces: cell.towerPieces.map((towerPiece, i) => {
          return i < castle.size
            ? { ...towerPiece, type: "castle" }
            : towerPiece;
        }),
        size: castle.size,
      }
    : cell;
};
const mapStartingPlayerPieces = (cell) => {
  const startingPlayerPieces = gameConfig.startingPlayerPieces.find(
    ({ x, y }) => cell.x === x && cell.y === y
  );
  return startingPlayerPieces
    ? {
        ...cell,
        towerPieces: cell.towerPieces.map((towerPiece, i) => {
          return i < startingPlayerPieces.size
            ? {
                ...towerPiece,
                type: `player${startingPlayerPieces.player}`,
              }
            : towerPiece;
        }),
        size: startingPlayerPieces.size,
      }
    : cell;
};

export const setup = () => {
  const width = gameConfig.width;
  const height = gameConfig.height;
  const maxTowerSize = gameConfig.maxTowerSize;
  const cells = createCells({ width, height, maxTowerSize })
    .map(mapCastles)
    .map(mapStartingPlayerPieces);

  return {
    gameConfig,
    maxTowerSize,
    moves: [],
    players: [{ name: "1st Player" }, { name: "2nd Player" }],
    currentPlayerIndex: 0,
    board: {
      cells,
      width,
      height,
    },
  };
};
