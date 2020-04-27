import ReducerBuilder from "../utils/factories/ReducerBuilder";
import { userReceived, profileReceived } from "./actions";
import { setKeyToPayload } from "../utils/reducers/setKeyToPayload";

export const reducer = new ReducerBuilder()
  .addReducer(userReceived.type, (state, { payload: { user } = {} }) => ({
    ...state,
    user,
  }))
  .addReducer(profileReceived.type, setKeyToPayload({ key: "profile" }))
  .build();
