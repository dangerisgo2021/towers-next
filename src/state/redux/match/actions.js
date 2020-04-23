const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "match";

export const reset = actionCreatorFactory({
  namespace,
  type: "reset",
  creator: ({ matchId }) => ({ matchId }),
});

export const undo = actionCreatorFactory({
  namespace,
  type: "undo",
  creator: ({ matchId }) => ({ matchId }),
});

export const redo = actionCreatorFactory({
  namespace,
  type: "redo",
  creator: ({ matchId }) => ({ matchId }),
});

export const move = actionCreatorFactory({
  namespace,
  type: "move",
  creator: ({ matchId, name, direction, currentPlayer, selectedCell }) => ({
    matchId,
    name,
    direction,
    currentPlayer,
    selectedCell,
  }),
});
