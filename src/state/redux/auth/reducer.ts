import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { userReceived, profileReceived } from "./actions";
import { setKeyToPayload } from "state/redux/utils/reducers/setKeyToPayload";

export const reducer = new ReducerBuilder()
  .addReducer(userReceived.type, (state, { payload: { user = {} } = {} }) => ({
    ...state,
    user,
  }))
  .addReducer(profileReceived.type, setKeyToPayload({ key: "profile" }))
  .build();
