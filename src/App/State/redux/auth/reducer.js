import ReducerBuilder from "../utils/factories/ReducerBuilder";
import { userReceived } from "./actions";

export const reducer = new ReducerBuilder()
  .addReducer(userReceived.type, (state, { payload: { user } = {} }) => ({
    ...state,
    user,
  }))
  .build();
