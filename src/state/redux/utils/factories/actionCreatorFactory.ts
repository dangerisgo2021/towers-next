import { get, set } from "lodash";

const ActionTypes = {};

const registerActionType = ({ namespace = "ACTION", type }) => {
  if (!ActionTypes[namespace]) {
    ActionTypes[namespace] = {};
  }

  const actionTypeList = [namespace, type];
  const actionString = actionTypeList.join(".");
  if (!get(ActionTypes, actionString)) {
    ActionTypes[namespace] = {};
  }

  if (get(ActionTypes, actionString)) {
    throw new Error(
      "Registering ActionType that already exists : " +
        ActionTypes[actionString]
    );
  } else {
    const actionType = actionTypeList.join(".");
    set(ActionTypes, actionString, actionType);
    return actionType;
  }
};

export const actionCreatorFactory = ({ namespace, type }) => {
  let registeredType = registerActionType({ namespace, type });
  const actionCreator = (payload?) => {
    return {
      type: registeredType,
      payload,
      setMeta: (meta) => ({ type: registeredType, payload, meta }),
    };
  };
  actionCreator.type = registeredType;

  return actionCreator;
};
