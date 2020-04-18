import React from "react";
import get from "lodash.get";
import ReducerBuilder from "../../utils/factories/ReducerBuilder";

import { createRoomButtonClicked } from "../../home/actions";
import { setKeyToValue } from "../../utils/reducers/setKeyToValue";
import { condition } from "../../utils/reducers/condition";
import { modalCanceled } from "../actions";
import { MODALS } from "../reducer";

const isCreateRoomModalAction = (action) =>
  get(action, "payload.modal") === MODALS.createRoomModal;

export const createRoomModalReducer = new ReducerBuilder()
  .setInitialState({ show: false })
  .addReducer(
    createRoomButtonClicked.type,
    setKeyToValue({ key: "show", value: true })
  )
  .addReducer(
    modalCanceled.type,
    condition({
      condition: isCreateRoomModalAction,
      reducer: setKeyToValue({ key: "show", value: false }),
    })
  )
  .build();
