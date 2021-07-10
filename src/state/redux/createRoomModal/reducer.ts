import faker from "faker";
import ReducerBuilder from "../utils/factories/ReducerBuilder";

import { formReducer } from "../forms/reducer";
import { NAME } from "./consts";

export const formInitialValue = {
  values: { mode: "CASUAL", name: faker.random.word() },
};
const formConfig = {
  formName: NAME,
  initialValue: formInitialValue,
};

export const reducer = new ReducerBuilder()
  .setInitialState({})
  .combine("form", formReducer(formConfig))
  .build();
