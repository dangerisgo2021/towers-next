const {
  actionCreatorFactory,
} = require("state/redux/utils/factories/actionCreatorFactory");
const namespace = "sider";

export const collapseSider = actionCreatorFactory({
  namespace,
  type: "collapseSider",
});

export const expandSider = actionCreatorFactory({
  namespace,
  type: "expandSider",
});

export const siderBreak = actionCreatorFactory({
  namespace,
  type: "siderBreak",
});

export const clickedOutsideExpandedSider = actionCreatorFactory({
  namespace,
  type: "clickedOutsideExpandedSider",
});
