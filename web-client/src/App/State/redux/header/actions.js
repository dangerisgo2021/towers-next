const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "header";

export const menuButtonClicked = actionCreatorFactory({
  namespace,
  type: "menuButtonClicked",
});