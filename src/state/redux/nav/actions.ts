const {
  actionCreatorFactory,
} = require("state/redux/utils/factories/actionCreatorFactory");
const namespace = "match";

export const sideNavItemClicked = actionCreatorFactory({
  namespace,
  type: "sideNavItemClicked"
});
