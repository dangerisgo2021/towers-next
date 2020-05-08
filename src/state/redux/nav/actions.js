const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "match";

export const sideNavItemClicked = actionCreatorFactory({
  namespace,
  type: "sideNavItemClicked"
});
