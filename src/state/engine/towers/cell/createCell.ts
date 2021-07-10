import { v4 as generateId } from "uuid";
export const createCell = ({ x, y, maxTowerSize = 5 }) => ({
  towerPieces: Array.from({ length: maxTowerSize }, () => ({
    type: "empty",
    id: generateId(),
  })),
  x,
  y,
  id: generateId(),
  maxTowerSize,
  size: 0,
});
