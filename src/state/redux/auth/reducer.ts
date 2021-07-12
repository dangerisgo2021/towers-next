import ReducerBuilder from "state/redux/utils/factories/ReducerBuilder";
import { userReceived, profileReceived, sessionReceived } from "./actions";
import { setKeyToPayload } from "state/redux/utils/reducers/setKeyToPayload";

export const reducer = new ReducerBuilder()
  .addReducer(userReceived.type, (state, { payload: { user = {} } = {} }) => ({
    ...state,
    user,
  }))
  .addReducer(profileReceived.type, setKeyToPayload({ key: "profile" }))
  .addReducer(sessionReceived.type, (state, { payload }) => ({
    ...state,
    session: payload?.session,
  }))
  .build();
