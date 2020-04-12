const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "sider";

export const collapseSider = actionCreatorFactory({
  namespace,
  type: "collapseSider",
});

export const expandSider = actionCreatorFactory({
  namespace,
  type: "expandSider",
});

export const sliderBreak = actionCreatorFactory({
  namespace,
  type: "sliderBreak",
  creator: (broken) => broken,
});
