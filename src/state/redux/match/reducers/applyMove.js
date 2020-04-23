import { cloneDeep, isEqual } from "lodash";
import { Towers } from "../../../engine/game";
const calculateNextPlayerIndex = ({ currentPlayerIndex, players }) => {
  console.log({ currentPlayerIndex, players });
  if (currentPlayerIndex === players.length - 1) {
    return 0;
  } else {
    return currentPlayerIndex + 1;
  }
};

const createMoveFromPayload = ({
  selectedCell: { x, y },
  currentPlayer,
  name,
  direction,
}) => ({
  location: { x, y },
  player: currentPlayer,
  name,
  direction,
});

const applyMoveToBoard = ({ board, move }) => {
  const result = cloneDeep(board);

  if (move.name === "build") {
    Towers.moves.build(result, move.player, move.location);
  } else if (move.name === "push") {
    switch (move.direction) {
      case "left":
        Towers.moves.pushLeft(result, move.player, move.location);
        break;
      case "right":
        Towers.moves.pushRight(result, move.player, move.location);
        break;
      case "up":
        Towers.moves.pushUp(result, move.player, move.location);
        break;
      case "down":
        Towers.moves.pushDown(result, move.player, move.location);
        break;
      default:
        return board;
    }
  } else {
    return board;
  }

  return isEqual(board, result) ? board : result;
};
export const applyMove = (state, action) => {
  const move = createMoveFromPayload(action.payload);

  if (action.payload.matchId === state.id) {
    const newBoard = applyMoveToBoard({ board: state.board, move });
    // the move only counts if the board changed
    if (newBoard !== state.board) {
      console.log({
        newBoard,
        currentPlayer: state.currentPlayerIndex,
        gameConfig: state.gameConfig,
      });
      const victoryProgress = Towers.victoryProgress({
        board: newBoard,
        currentPlayer: state.currentPlayerIndex,
        gameConfig: state.gameConfig,
      });
      console.log({ victoryProgress });
      return {
        ...state,
        currentPlayerIndex: calculateNextPlayerIndex(state),
        moves: [...state.moves, move],
        board: newBoard,
        victoryProgress,
      };
    } else {
      return state;
    }
  }
};
