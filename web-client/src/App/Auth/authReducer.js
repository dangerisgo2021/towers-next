import ReducerBuilder from "../State/redux/utils/factories/ReducerBuilder";
import { userReceived } from "./actions";

export const authReducer = new ReducerBuilder()
    .addReducer(userReceived.type, (state, { payload: { user } = {} }) => ({
      ...state,
      user
    }))
    .build();