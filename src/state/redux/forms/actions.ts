const {
  actionCreatorFactory,
} = require("state/redux/utils/factories/actionCreatorFactory");
const namespace = "form";

export const formFinished = actionCreatorFactory({
  namespace,
  type: "formFinished",
});

export const formValueChanged = actionCreatorFactory({
  namespace,
  type: "formValueChanged",
});
