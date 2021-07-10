const {
  actionCreatorFactory,
} = require("state/redux/utils/factories/actionCreatorFactory");
const namespace = "match";

export const reset = actionCreatorFactory({
  namespace,
  type: "reset",
});

export const undo = actionCreatorFactory({
  namespace,
  type: "undo",
});

export const redo = actionCreatorFactory({
  namespace,
  type: "redo",
});

export const move = actionCreatorFactory({
  namespace,
  type: "move",
});
