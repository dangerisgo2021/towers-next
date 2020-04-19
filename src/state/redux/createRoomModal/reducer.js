import React from "react";
import ReducerBuilder from "../utils/factories/ReducerBuilder";

import { formReducer } from "../forms/reducer";
import { NAME } from "./consts";

const formConfig = {
  formName: NAME,
  initialValue: { values: { mode: "casual", name: "" } },
};

export const reducer = new ReducerBuilder()
  .setInitialState({})
  .combine("form", formReducer(formConfig))
  .build();
