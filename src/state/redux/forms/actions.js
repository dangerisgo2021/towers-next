const {
  actionCreatorFactory,
} = require("../utils/factories/actionCreatorFactory");
const namespace = "form";

export const formFinished = actionCreatorFactory({
  namespace,
  type: "formFinished",
  creator: ({ form, values }) => ({ form, values }),
});

export const formValueChanged = actionCreatorFactory({
  namespace,
  type: "formValueChanged",
  creator: ({ form, values }) => ({ form, values }),
});
