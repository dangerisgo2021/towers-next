import ReducerBuilder from "../../redux/utils/factories/ReducerBuilder";
import React from "react";
import { formValueChanged } from "./actions";
import { getForm } from "./selectors/getForm";
export const reducer = new ReducerBuilder()
  .setInitialState({})
  .addReducer(formValueChanged.type, (state, action) => {
    const { form, values } = action.payload;
    const formState = getForm(state, { form }) || {};

    return {
      ...state,
      [form]: {
        ...formState,
        values,
      },
    };
  })
  .build();
