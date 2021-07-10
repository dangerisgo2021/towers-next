const {
  actionCreatorFactory,
} = require("state/redux/utils/factories/actionCreatorFactory");
const namespace = "header";

export const openMenuButtonClicked = actionCreatorFactory({
  namespace,
  type: "openMenuButtonClicked",
});
